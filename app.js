(function () {
  var GAMES = window.GAMES;
  var AI_LABEL = { jam: "잼 검증", reported: "제작자·보도", native: "AI 구동", unknown: "미확인" };
  var REGION_LABEL = { KR: "한국", JP: "일본", TW: "대만", Global: "글로벌" };
  var TABS = [
    { key: "popular", label: "인기" },
    { key: "new", label: "신작" },
    { key: "korea", label: "한국" },
    { key: "global", label: "글로벌" }
  ];
  var BENTO = ["1in8b", "matap", "fly", "capybara", "yesno"];
  var TOOL_RE = /(Claude|ChatGPT|GPT|Cursor|Lovable|Suno|NovelAI|Gemini|Grok)/;

  var state = { view: "store", q: "", tab: "popular", play: {}, price: {}, genre: {}, region: {}, tags: {} };
  var wish = load();
  var order = {};
  GAMES.forEach(function (g, i) { order[g.id] = i; });

  function load() {
    try { return JSON.parse(localStorage.getItem("aiarcade.wish") || "[]"); } catch (e) { return []; }
  }
  function save() {
    try { localStorage.setItem("aiarcade.wish", JSON.stringify(wish)); } catch (e) {}
  }
  function $(id) { return document.getElementById(id); }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function byId(id) { return GAMES.filter(function (g) { return g.id === id; })[0]; }

  function art(g) {
    if (g.img) return '<div class="art shot" style="background-image:url(\'' + esc(g.img) + '\')"></div>';
    var h = g.hue || 220, h2 = (h + 55) % 360, h3 = (h + 300) % 360;
    var bg = "radial-gradient(70% 90% at 15% 15%,hsl(" + h + ",85%,58%),transparent 62%)," +
      "radial-gradient(70% 90% at 90% 85%,hsl(" + h2 + ",80%,52%),transparent 60%)," +
      "radial-gradient(50% 60% at 80% 10%,hsl(" + h3 + ",70%,45%),transparent 65%),hsl(" + h + ",45%,9%)";
    return '<div class="art" style="background:' + bg + '"></div>';
  }
  function mark(g) { return g.img ? "" : '<div class="mark">' + esc(g.title.charAt(0)) + "</div>"; }

  function evidence(g) {
    var label = AI_LABEL[g.ai];
    if (g.ai === "reported") {
      var m = TOOL_RE.exec(g.aiNote || "");
      if (m) label = m[1];
    }
    return '<span class="ai ai-' + g.ai + '">' + esc(label) + "</span>";
  }
  function aiBadge(g) { return '<span class="ai ai-' + g.ai + '">' + AI_LABEL[g.ai] + "</span>"; }

  function score(g) {
    return (g.featured ? 4 : 0) + (g.badge ? 2 : 0) + (g.ai === "jam" ? 1 : 0) + (g.ai === "reported" ? 1 : 0) +
      (/4주|3주/.test(g.badge || "") ? 1 : 0);
  }

  /* filtering */
  function anyOn(group) { return Object.keys(group).some(function (k) { return group[k]; }); }
  function groupOk(group, value) { return !anyOn(group) || !!group[value]; }
  function filtering() {
    return !!(state.q || anyOn(state.play) || anyOn(state.price) || anyOn(state.genre) || anyOn(state.region) || anyOn(state.tags));
  }
  function matches(g) {
    if (state.view === "wishlist" && wish.indexOf(g.id) < 0) return false;
    if (state.tab === "korea" && g.region !== "KR") return false;
    if (state.tab === "global" && g.region === "KR") return false;
    if (!groupOk(state.play, g.dl ? "dl" : "web")) return false;
    if (!groupOk(state.price, g.paid ? "paid" : "free")) return false;
    if (!groupOk(state.genre, g.genre)) return false;
    if (!groupOk(state.region, g.region)) return false;
    for (var t in state.tags) if (state.tags[t] && g.tags.indexOf(t) < 0) return false;
    if (state.q) {
      var hay = [g.title, g.en, g.desc, g.maker, g.tags.join(" ")].join(" ").toLowerCase();
      if (hay.indexOf(state.q.toLowerCase()) < 0) return false;
    }
    return true;
  }
  function sorted(list) {
    var l = list.slice();
    if (state.tab === "new") {
      l.sort(function (a, b) { return (b.year || 0) - (a.year || 0) || order[b.id] - order[a.id]; });
    } else {
      l.sort(function (a, b) { return score(b) - score(a) || order[a.id] - order[b.id]; });
    }
    return l;
  }

  /* stats strip */
  function renderStats() {
    var web = GAMES.filter(function (g) { return !g.dl; }).length;
    var kr = GAMES.filter(function (g) { return g.region === "KR"; }).length;
    var jam = GAMES.filter(function (g) { return g.ai === "jam"; }).length;
    var items = [[GAMES.length, "게임"], [kr, "한국발"], [jam, "Vibe Jam 입상작"], [web, "브라우저에서 바로 플레이"]];
    $("stats").innerHTML = items.map(function (it) {
      return '<div class="stat"><b>' + it[0] + "</b><span>" + it[1] + "</span></div>";
    }).join("");
  }

  /* bento */
  function renderBento() {
    var box = $("bento");
    var show = state.view === "store" && !filtering() && state.tab === "popular";
    box.hidden = !show;
    if (!show) return;
    var list = BENTO.map(byId).filter(Boolean);
    box.innerHTML = list.map(function (g, i) {
      var lead = i === 0;
      return '<div class="bt' + (lead ? " lead" : "") + '" data-id="' + g.id + '">' + art(g) + mark(g) + '<div class="shade"></div>' +
        '<div class="info"><div class="eyebrow">' + evidence(g) + '<span class="pill">' + REGION_LABEL[g.region] + "</span>" +
        (g.badge ? '<span class="badge">' + esc(g.badge) + "</span>" : "") + "</div>" +
        "<h3>" + esc(g.title) + "</h3><p>" + esc(g.desc) + "</p></div></div>";
    }).join("");
    bindOpen(box);
  }

  /* sidebar */
  function count(pred) { return GAMES.filter(pred).length; }
  function renderSide() {
    var groups = [
      { id: "play", title: "플레이", items: [
        { k: "web", l: "브라우저에서 바로", n: count(function (g) { return !g.dl; }) },
        { k: "dl", l: "다운로드", n: count(function (g) { return g.dl; }) }] },
      { id: "price", title: "가격", items: [
        { k: "free", l: "무료", n: count(function (g) { return !g.paid; }) },
        { k: "paid", l: "유료", n: count(function (g) { return g.paid; }) }] },
      { id: "genre", title: "장르", items: window.GENRES.map(function (k) {
        return { k: k, l: k, n: count(function (g) { return g.genre === k; }) }; }) },
      { id: "region", title: "지역", items: Object.keys(REGION_LABEL).map(function (k) {
        return { k: k, l: REGION_LABEL[k], n: count(function (g) { return g.region === k; }) }; }) }
    ];
    $("side").innerHTML = groups.map(function (gr) {
      return '<div class="grp"><h4>' + gr.title + "</h4>" + gr.items.map(function (it) {
        var on = !!state[gr.id][it.k];
        return '<button class="opt' + (on ? " on" : "") + (it.n ? "" : " zero") + '" data-g="' + gr.id + '" data-k="' + it.k + '"><span class="cb">' + (on ? "✓" : "") +
          "</span>" + esc(it.l) + '<span class="n">' + it.n + "</span></button>";
      }).join("") + "</div>";
    }).join("");
    each($("side").querySelectorAll(".opt"), function (b) {
      b.onclick = function () {
        var g = b.getAttribute("data-g"), k = b.getAttribute("data-k");
        state[g][k] = !state[g][k];
        render();
      };
    });
  }

  function renderTabs() {
    $("tabs").innerHTML = TABS.map(function (t) {
      return '<button class="tab' + (state.tab === t.key ? " on" : "") + '" role="tab" data-t="' + t.key + '">' + t.label + "</button>";
    }).join("");
    each($("tabs").children, function (b) {
      b.onclick = function () { state.tab = b.getAttribute("data-t"); render(); };
    });
    var counts = {};
    GAMES.forEach(function (g) { g.tags.forEach(function (t) { counts[t] = (counts[t] || 0) + 1; }); });
    var tags = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; }).slice(0, 20);
    $("f-tags").innerHTML = tags.map(function (t) {
      return '<button class="chip' + (state.tags[t] ? " on" : "") + '" data-k="' + esc(t) + '">#' + esc(t) + "</button>";
    }).join("");
    each($("f-tags").children, function (b) {
      b.onclick = function () { var k = b.getAttribute("data-k"); state.tags[k] = !state.tags[k]; render(); };
    });
  }

  /* grid */
  function tile(g, big) {
    return '<article class="tile' + (big ? " big" : "") + '" data-id="' + g.id + '">' + art(g) + mark(g) + '<div class="shade"></div>' +
      '<span class="ev">' + evidence(g) + "</span>" +
      '<span class="rg pill">' + (g.dl ? "다운로드" : REGION_LABEL[g.region]) + "</span>" +
      '<div class="tt"><h4>' + esc(g.title) + "</h4>" +
      '<p class="sub">' + esc(g.desc) + "</p>" +
      (big ? '<div class="meta">' + (g.badge ? '<span class="badge">' + esc(g.badge) + "</span>" : "") +
        g.tags.slice(0, 3).map(function (t) { return '<span class="tg">' + esc(t) + "</span>"; }).join("") + "</div>" : "") +
      "</div></article>";
  }
  function renderGrid() {
    var list = sorted(GAMES.filter(matches));
    var wl = state.view === "wishlist";
    $("count").textContent = list.length + "개";
    var tabLabel = TABS.filter(function (t) { return t.key === state.tab; })[0].label;
    $("listtitle").textContent = wl ? "보관함" : (state.q ? "검색 결과" : tabLabel);
    $("reset").hidden = !filtering();
    $("empty").hidden = list.length > 0;
    $("empty").textContent = wl && !wish.length ? "아직 보관한 게임이 없어요. 상세 화면에서 담아 보세요." : "조건에 맞는 게임이 없어요.";
    $("grid").innerHTML = list.map(function (g, i) { return tile(g, i % 11 === 0 && list.length > 6); }).join("");
    bindOpen($("grid"));
  }

  function bindOpen(el) {
    each(el.querySelectorAll("[data-id]"), function (n) {
      n.onclick = function () { openDetail(n.getAttribute("data-id")); };
    });
  }

  /* detail */
  function openDetail(id) {
    var g = byId(id);
    if (!g) return;
    var on = wish.indexOf(id) >= 0;
    var rows = [
      ["AI", aiBadge(g) + (g.aiNote ? " " + esc(g.aiNote) : "")],
      ["플레이", g.dl ? "다운로드(원본 페이지 기준)" : "브라우저에서 바로" + (g.paid ? " · 유료" : " · 무료")],
      ["장르", esc(g.genre)],
      ["제작자", esc(g.maker || "미확인")],
      ["지역", REGION_LABEL[g.region]],
      ["연도", g.year ? esc(g.year) : "미확인"]
    ];
    if (g.source) rows.push(["출처", '<a href="' + esc(g.source) + '" target="_blank" rel="noopener noreferrer">조사 출처 보기</a>']);
    $("detail").innerHTML = '<div class="dhead">' + art(g) + '<div class="shade"></div>' + mark(g) + "</div>" +
      '<div class="dpad"><div class="eyebrow">' + (g.badge ? '<span class="badge">' + esc(g.badge) + "</span>" : "") + "</div>" +
      "<h2>" + esc(g.title) + '</h2><div class="en">' + esc(g.en || "") + "</div><p>" + esc(g.desc) + "</p>" +
      '<div class="tags">' + g.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
      "<dl>" + rows.map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>"; }).join("") + "</dl>" +
      '<div class="actions"><a class="btn" href="' + esc(g.url) + '" target="_blank" rel="noopener noreferrer">' + (g.dl ? "페이지 열기" : "플레이하기") + ' ↗</a>' +
      '<button class="btn glass' + (on ? " on" : "") + '" id="wbtn">' + (on ? "✓ 보관함에 있음" : "+ 보관함에 담기") + "</button></div></div>";
    $("wbtn").onclick = function () {
      var i = wish.indexOf(id);
      if (i >= 0) wish.splice(i, 1); else wish.push(id);
      save(); render(); openDetail(id);
    };
    $("modal").hidden = false;
  }

  function render() {
    var store = state.view !== "about";
    $("browse").hidden = !store;
    $("stats").hidden = !store;
    $("about").hidden = store;
    $("wcount").textContent = wish.length;
    each(document.querySelectorAll(".navbtn"), function (b) {
      b.classList.toggle("active", b.getAttribute("data-view") === state.view);
    });
    if (!store) { $("bento").hidden = true; return; }
    renderStats(); renderBento(); renderSide(); renderTabs(); renderGrid();
  }

  each(document.querySelectorAll(".navbtn"), function (b) {
    b.onclick = function () { state.view = b.getAttribute("data-view"); render(); window.scrollTo(0, 0); };
  });
  $("logo").onclick = function (e) { e.preventDefault(); state.view = "store"; render(); window.scrollTo(0, 0); };
  $("q").oninput = function () {
    state.q = this.value.trim();
    if (state.view === "about") state.view = "store";
    render();
  };
  $("reset").onclick = function () {
    state.play = {}; state.price = {}; state.genre = {}; state.region = {}; state.tags = {}; state.q = ""; state.tab = "popular";
    $("q").value = ""; render();
  };
  $("close").onclick = function () { $("modal").hidden = true; };
  $("modal").onclick = function (e) { if (e.target === this) this.hidden = true; };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") $("modal").hidden = true; });

  $("submit").onsubmit = function (e) {
    e.preventDefault();
    var f = new FormData(this);
    var tags = String(f.get("tags") || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    var obj = {
      id: String(f.get("title")).toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-"),
      title: f.get("title"), url: f.get("url"), region: "KR", tags: tags,
      ai: f.get("ai"), desc: f.get("desc"), maker: f.get("maker"), hue: Math.floor(Math.random() * 360)
    };
    $("out").textContent = JSON.stringify(obj, null, 2) + ",";
    $("out").hidden = false;
  };

  render();
})();

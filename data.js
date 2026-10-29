// 시드 데이터: 조사에서 확인한 AI 웹게임 목록.
// ai: "jam"  = Vibe Jam 규칙(코드 90% 이상 AI)을 통과한 출품작
//     "reported" = 언론/공식 사이트에서 AI 사용이 언급됨
//     "unknown"  = AI 사용 여부 미확인 (제작자 확인 필요)
// 주소는 조사 시점의 출처 기준이며 직접 열어 검증하지 않았습니다.
window.GAMES = [
  {
    id: "1in8b",
    title: "80억분의 1",
    en: "1 in 8 Billion",
    url: "https://1in8b.life/ko/",
    region: "KR",
    tags: ["인생 시뮬레이션", "텍스트", "통계 기반"],
    ai: "reported",
    aiNote: "한국 1인 개발자가 AI(바이브코딩)로 4시간 만에 제작했다고 보도됨. 사용 도구는 출처마다 다름.",
    desc: "출생 국가와 가정환경을 고를 수 없는 무작위 인생을 출생부터 사망까지 체험합니다. UN·WHO·세계은행 통계를 반영합니다.",
    maker: "진휘어스 (가명)",
    year: 2026,
    source: "https://namu.wiki/w/80%EC%96%B5%20%EB%B6%84%EC%9D%98%201",
    hue: 210,
    featured: true
  },
  {
    id: "kickru",
    title: "벤치에서 발롱까지",
    en: "Bench to Ballon",
    url: "https://kickru.com/",
    region: "KR",
    tags: ["축구", "육성", "인생 시뮬레이션"],
    ai: "unknown",
    aiNote: "'80억분의 1'에서 영감을 받은 파생작. AI 사용 여부는 확인되지 않음.",
    desc: "16세 유스부터 은퇴까지 시즌 단위로 나만의 축구 선수를 키우는 무료 커리어 시뮬레이션. PC·모바일 브라우저 지원.",
    maker: "7년차 구너 고딩",
    year: 2026,
    source: "https://namu.wiki/w/%EB%B2%A4%EC%B9%98%EC%97%90%EC%84%9C%20%EB%B0%9C%EB%A1%B1%EA%B9%8C%EC%A7%80",
    hue: 140,
    featured: true
  },
  {
    id: "yesno",
    title: "예스노 탐정",
    en: "Yes No Detective",
    url: "https://yesnodetective.com/ko",
    region: "KR",
    tags: ["추리", "AI 내장", "퍼즐"],
    ai: "reported",
    aiNote: "공식 사이트: 판정·힌트·일러스트는 AI로 생성, 스토리 제작에도 AI 도구 활용.",
    desc: "AI에게 예/아니오 질문만 던져 사건의 진상을 밝히는 추리 게임. 질문 수가 적을수록 높은 점수.",
    maker: "미확인",
    year: 2026,
    source: "https://yesnodetective.com/ko",
    hue: 270,
    featured: true
  },
  {
    id: "capybara",
    title: "A Game About Capybaras Delivering Food",
    en: "",
    url: "https://capybara-vibejam26.leocoout.dev",
    region: "Global",
    tags: ["배달", "오픈월드", "Vibe Jam"],
    ai: "jam",
    aiNote: "Cursor Vibe Jam 2026 출품작 (규칙: 코드 90% 이상 AI 작성).",
    desc: "리우데자네이루에서 배달 기사 카피바라가 되어 주문을 받고 배달하는 게임.",
    maker: "@leocooout",
    year: 2026,
    source: "https://levels.io/vibe-jam-2026-winners-quality",
    badge: "Vibe Jam 2026 금상",
    hue: 35,
    featured: true
  },
  {
    id: "fantos",
    title: "Fanto's Mega-Mart",
    en: "",
    url: "https://wavedash.com/games/fantos-mega-mart",
    region: "Global",
    tags: ["Vibe Jam"],
    ai: "jam",
    aiNote: "Cursor Vibe Jam 2026 출품작 (규칙: 코드 90% 이상 AI 작성).",
    desc: "Vibe Jam 2026 은상 수상작. 원래 주소(fantos-megamart.vercel.app)는 Wavedash로 이전했다는 안내만 표시됩니다.",
    maker: "@e_c_t_o",
    year: 2026,
    source: "https://levels.io/vibe-jam-2026-winners-quality",
    badge: "Vibe Jam 2026 은상",
    hue: 0
  },
  {
    id: "wenware",
    title: "WenWare",
    en: "",
    url: "https://wen-ware.com",
    region: "Global",
    tags: ["Vibe Jam"],
    ai: "jam",
    aiNote: "Cursor Vibe Jam 2026 출품작 (규칙: 코드 90% 이상 AI 작성).",
    desc: "Vibe Jam 2026 동상 및 Bolt 선정 '가장 많이 플레이된 게임'.",
    maker: "@underpaid_mom",
    year: 2026,
    source: "https://levels.io/vibe-jam-2026-winners-quality",
    badge: "Vibe Jam 2026 동상",
    hue: 300
  },
  {
    id: "haldane4",
    title: "HALDANE-4",
    en: "",
    url: "https://haldane4.denisbondare.com",
    region: "Global",
    tags: ["Vibe Jam"],
    ai: "jam",
    aiNote: "Cursor Vibe Jam 2026 출품작 (규칙: 코드 90% 이상 AI 작성).",
    desc: "Vibe Jam 2026 Cursor 선정 '가장 독창적인 게임'.",
    maker: "@denisbondare",
    year: 2026,
    source: "https://levels.io/vibe-jam-2026-winners-quality",
    badge: "Most Original",
    hue: 180
  },
  {
    id: "fly",
    title: "fly.pieter.com",
    en: "Multiplayer Flight Sim",
    url: "https://fly.pieter.com/",
    region: "Global",
    tags: ["비행", "멀티플레이", "3D"],
    ai: "reported",
    aiNote: "게임 시작 화면에 'by @levelsio + Cursor + ThreeJS, 100% made with AI'라고 명시. 약 3시간 만에 만들었다고 보도됨.",
    desc: "설치 없이 브라우저에서 즐기는 무료 멀티플레이 비행 시뮬레이터. 바이브코딩 게임의 대표적인 바이럴 사례입니다.",
    maker: "Pieter Levels",
    year: 2025,
    source: "https://levels.io/full-multiplayer-python-websockets-game-ai",
    hue: 205,
    featured: true
  },
  {
    id: "taxi",
    title: "The Great Taxi Assignment",
    en: "",
    url: "https://great-taxi-assignment.netlify.app",
    region: "Global",
    tags: ["Vibe Jam"],
    ai: "jam",
    aiNote: "게임 소개 화면에 '코드의 99%를 AI가 생성(Cursor AI + Claude Sonnet 3.7), 그림은 GPT-4o, 음악은 Suno'라고 명시.",
    desc: "택시를 몰아 승객을 태우고 목적지까지 데려다주는 바이스 시티풍 드라이빙 게임. Vibe Jam 2025 금상, 60시간 만에 제작.",
    maker: "@tomasbencko",
    year: 2025,
    source: "https://vibejam.com/2025/",
    badge: "Vibe Jam 2025 금상",
    hue: 48
  },
  {
    id: "vibeware",
    title: "Vibeware",
    en: "",
    url: "https://vibeware.vercel.app",
    region: "Global",
    tags: ["Vibe Jam"],
    ai: "jam",
    aiNote: "Cursor Vibe Jam 2025 출품작 (규칙: 코드 대부분을 AI가 작성).",
    desc: "Vibe Jam 2025 은상 수상작. 현재 주소는 제작자의 새 프로젝트(마이크로게임) 안내 페이지로 바뀌어 있어 원작을 바로 플레이하기 어려울 수 있습니다.",
    maker: "@mattgordonxyz",
    year: 2025,
    source: "https://vibejam.com/2025/",
    badge: "Vibe Jam 2025 은상",
    hue: 165
  },
  {
    id: "infinitecraft",
    title: "Infinite Craft",
    en: "neal.fun",
    url: "https://neal.fun/infinite-craft/",
    region: "Global",
    tags: ["샌드박스", "조합", "AI 내장"],
    ai: "native",
    aiNote: "게임 안에서 AI가 새 조합 결과를 생성합니다. 게임 자체가 AI로 제작됐다는 뜻은 아닙니다.",
    desc: "원소를 끝없이 조합해 새로운 것을 만드는 브라우저 샌드박스. 2024년 2월 공개.",
    maker: "Neal Agarwal",
    year: 2024,
    source: "https://neura.market/ai-tools-directory/games/infinite-craft",
    hue: 255,
    featured: true
  },
  {
    id: "aidungeon",
    title: "AI Dungeon",
    en: "",
    url: "https://aidungeon.com",
    region: "Global",
    tags: ["텍스트 어드벤처", "AI 내장"],
    ai: "native",
    aiNote: "GPT 계열 AI가 플레이어의 입력에 맞춰 이야기를 실시간 생성합니다 (게임 속 AI).",
    desc: "직접 퀘스트를 쓰거나 AI가 만든 이야기를 따라가는 텍스트 어드벤처.",
    maker: "미확인",
    source: "https://brsoftech.com/blog/ai-free-games",
    hue: 15
  },
  {
    id: "matap",
    title: "마탑 수호기",
    en: "Matap Suhogi",
    url: "https://matap-suhogi.vercel.app/",
    region: "KR",
    tags: ["타워디펜스", "도트", "서바이벌"],
    ai: "reported",
    aiNote: "개발자 노트에 '1인 AI개발'이라고 적혀 있음 (에펨코리아 게시글, 2026.09.30). 사용 도구는 미표기.",
    desc: "에펨코리아에서 화제가 된 무료 도트 타워디펜스 서바이벌. 난이도 '나락' 단계와 유물 66종, 서버 저장 로그인, 랭킹을 갖췄습니다. 가로 화면 전용.",
    maker: "탱구단",
    year: 2026,
    source: "https://www.fmkorea.com/best/10394833155",
    hue: 275
  },
  // aigamedex.com 주간 랭킹(2026.09.28~11.01)에 오른 인기 게임
  // 사용 도구가 aigamedex에 표기된 것만 'reported', 나머지는 'unknown'으로 둡니다.
  { id: "fronts", title: "Fronts Redrawn", en: "", url: "https://onemanitch.itch.io/fronts-redrawn", region: "Global", tags: ["전략", "실시간", "전쟁"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "보병·전차·포병을 지휘해 도시를 점령하고 적의 철도와 보급로를 끊어 포위하는 실시간 전략. 부대가 움직일 때마다 전선이 바뀌고, 보급이 끊긴 부대는 약해집니다.", maker: "@onemanitch", year: 2026, source: "https://aigamedex.com/games/fronts-redrawn", badge: "aigamedex 4주 연속 TOP10", hue: 10 },
  { id: "doctrines", title: "Open Doctrines", en: "", url: "https://pr1nted.itch.io/open-doctrines", region: "Global", tags: ["대전략", "시뮬레이션"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "국가의 산업·군대·연구·정치를 운영하고 이웃 나라와 외교를 맺는 대전략 게임. 여섯 가지 역사 시나리오와 지도 편집기를 제공합니다. 웹과 PC, 안드로이드를 지원합니다.", maker: "@pr1nted", year: 2026, source: "https://aigamedex.com/games/open-doctrines", badge: "aigamedex 3주 TOP10", hue: 215 },
  { id: "ssalmuk", title: "200만원만 지르고 게임으로 쌀먹하는 방법", en: "쌀먹 생존기", url: "https://ojdeal.itch.io/ssalmuk-survival", region: "KR", tags: ["시뮬레이션", "생존", "랭킹"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "사냥으로 번 골드를 현금으로 바꿔 월세·대출금·식비를 내는 생존 시뮬레이션. 성장할수록 지출이 더 빨리 늘어 결국 파산하게 되며, 오래 버틸수록 시즌 랭킹이 오릅니다.", maker: "@ojdeal", year: 2026, source: "https://aigamedex.com/games/200%EB%A7%8C%EC%9B%90%EB%A7%8C-%EC%A7%80%EB%A5%B4%EA%B3%A0-%EA%B2%8C%EC%9E%84%EC%9C%BC%EB%A1%9C-%EC%8C%80%EB%A8%B9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95", badge: "aigamedex 3주 TOP10", hue: 120 },
  { id: "smith", title: "KING OF THE SMITH", en: "대장장이 게임", url: "https://claude.ai/artifact/UW5nFZ8b2Bfpw8D8yqProK", region: "KR", tags: ["대장장이", "시뮬레이션"], ai: "reported", aiNote: "aigamedex에 제작 도구가 Claude로 표기됨. 게임이 claude.ai 아티팩트로 공개되어 있습니다.", desc: "대장간을 운영하며 무기를 만들어 파는 대장장이 시뮬레이션. 한국어로 제작되었습니다.", maker: "미확인", year: 2026, source: "https://aigamedex.com/games/%EB%8C%80%EC%9E%A5%EC%9E%A5%EC%9D%B4-%EA%B2%8C%EC%9E%84-%EB%A7%8C%EB%93%A4%EC%97%88%EB%8A%94%EB%8D%B0-%ED%95%B4%EB%B3%BC%EC%82%AC%EB%9E%8C", badge: "aigamedex 3주 TOP10", hue: 25 },
  { id: "ace", title: "에이스", en: "고교 축구선수 키우기", url: "https://ace-soccer.netlify.app/", region: "KR", tags: ["축구", "육성", "시뮬레이션"], ai: "reported", aiNote: "aigamedex에 제작 도구가 Claude로 표기됨.", desc: "3년 동안 훈련하며 고교 축구선수를 키우는 육성 게임. 8개 포지션마다 핵심 능력치가 다르고, 경기 승부처에서 선택지를 고릅니다.", maker: "미확인", year: 2026, source: "https://aigamedex.com/games/ai%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EA%B3%A0%EA%B5%90-%EC%B6%95%EA%B5%AC-%EC%9C%A1%EC%84%B1-%EA%B2%8C%EC%9E%84-%ED%94%BC%EB%93%9C%EB%B0%B1-%EB%B0%9B%EA%B3%A0-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EB%9C%AF%EC%96%B4%EA%B3%A0%EC%B3%A4%EC%8A%B5%EB%8B%88%EB%8B%A4", badge: "aigamedex 이번 주 2위", hue: 145 },
  { id: "samgukhero", title: "삼국 영웅전", en: "", url: "https://jjh2113.itch.io/samguk-heroes", region: "KR", tags: ["삼국지", "RPG", "수집"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "위·촉·오 장수 90명을 모아 천하를 통일하는 무료 수집형 RPG. 장수가 자동으로 싸우고 국가 시너지로 편성합니다.", maker: "@jjh2113", year: 2026, source: "https://aigamedex.com/games/%EC%82%BC%EA%B5%AD-%EC%98%81%EC%9B%85%EC%A0%84", badge: "aigamedex 10월 3주 6위", hue: 5 },
  { id: "shobo", title: "쇼보", en: "SHOBO · Should've Bought", url: "https://shobo.kr/", region: "KR", tags: ["투자", "시뮬레이션", "실제 데이터"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "2008년 1월 1억 원으로 시작해 실제 일별 종가를 바탕으로 주식·서울 아파트·비트코인을 굴려 보는 투자 시뮬레이션. 한국어·영어·일본어 등을 지원합니다.", maker: "미확인", year: 2026, source: "https://aigamedex.com/games/%EC%87%BC%EB%B3%B4-2008-2025-%ED%88%AC%EC%9E%90-%EC%8B%9C%EB%AE%AC%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B2%8C%EC%9E%84", badge: "aigamedex 2주 TOP10", hue: 40 },
  { id: "samgukduel", title: "삼국듀얼", en: "삼국지 일기토", url: "https://samguk.ubd.gg/", region: "KR", tags: ["삼국지", "카드", "로그라이크"], ai: "reported", aiNote: "aigamedex에 제작 도구가 Claude로 표기됨.", desc: "삼국지 무장 42명 중 한 명으로 1대1 일기토를 벌이는 전략 게임. 매 합마다 카드를 뽑아 상대의 수를 읽으며 스토리·토너먼트·천하통일 모드가 있습니다.", maker: "미확인", year: 2026, source: "https://aigamedex.com/ranking/2026-10-05", badge: "aigamedex 2주 TOP10", hue: 0 },
  { id: "biplane", title: "Biplane Skirmish", en: "", url: "https://www.gamedev.pl/ay/biplane-skirmish", region: "Global", tags: ["비행", "공중전", "액션"], ai: "reported", aiNote: "aigamedex에 제작 도구가 Claude로 표기됨.", desc: "1차 세계대전 복엽기를 몰고 넓은 시골 하늘에서 벌이는 공중전 게임.", maker: "미확인", year: 2026, source: "https://aigamedex.com/ranking/2026-09-28", badge: "aigamedex 9월 4주 4위", hue: 200 },
  { id: "orca", title: "Orca Class", en: "", url: "https://scarf005.itch.io/orca-class", region: "Global", tags: ["슈팅", "전차", "액션"], ai: "reported", aiNote: "aigamedex에 제작 도구가 Claude로 표기됨.", desc: "전차를 소재로 한 슈팅 게임. 제작자가 계속 수정할 예정인 초기 버전입니다.", maker: "scarf005", year: 2026, source: "https://aigamedex.com/ranking/2026-09-28", badge: "aigamedex 9월 4주 6위", hue: 95 },
  { id: "dokan", title: "まるかいてドカン!", en: "Maru Kaite Dokan!", url: "https://soyukke.itch.io/maru-kaite-dokan", region: "JP", tags: ["타워디펜스", "드로잉", "전략"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "종이에 그린 선·원·삼각형으로 벽, 대포, 지뢰를 만들어 막대 인간의 공격을 막는 타워 디펜스. 웨이브마다 강화 카드를 고릅니다.", maker: "@soyukke", year: 2026, source: "https://aigamedex.com/ranking/2026-10-05", badge: "aigamedex 10월 1주 3위", hue: 55 },
  { id: "dubtarot", title: "DubTarot", en: "", url: "https://monkeyinlove.itch.io/dubtarot", region: "Global", tags: ["리듬", "카드", "음악"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "타로 카드로 솔리테어를 하며 덥 테크노를 만드는 브라우저 게임. 박자에 맞춰 카드를 내면 추가 효과와 높은 점수를 받습니다.", maker: "@monkeyinlove", year: 2026, source: "https://aigamedex.com/ranking/2026-09-28", badge: "aigamedex 9월 4주 5위", hue: 285 },
  { id: "arcane", title: "Arcane Wilds", en: "비전의 황야", url: "https://arcane-wilds.pages.dev/", region: "Global", tags: ["어드벤처", "마법", "RPG"], ai: "reported", aiNote: "aigamedex에 제작 도구가 Claude로 표기됨.", desc: "여러 마법을 쓰며 속성에 따라 변하는 환경을 탐험하는 어드벤처. 불로 풀이 타고 물이 어는 등 환경이 바뀌며 퀘스트와 보스전이 있습니다. 처음 로딩이 오래 걸릴 수 있습니다.", maker: "미확인", year: 2026, source: "https://aigamedex.com/ranking/2026-09-28", badge: "aigamedex 9월 4주 9위", hue: 215 },
  { id: "ganso", title: "Ganso clicker", en: "", url: "https://lauratech.itch.io/ganso-clicker", region: "Global", tags: ["클리커", "방치형", "시뮬레이션"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "알에서 시작해 건물과 시설을 지으며 거위 왕국을 키우는 증분형 게임.", maker: "@lauratech", year: 2026, source: "https://aigamedex.com/ranking/2026-09-28", badge: "aigamedex 9월 4주 10위", hue: 65 },
  { id: "riseandfall", title: "Rise and Fall", en: "", url: "https://tuyau.itch.io/rise-and-fall", region: "Global", tags: ["전략", "문명"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "영토를 넓혀 경쟁 문명을 무너뜨리는 전략 게임.", maker: "@tuyau", year: 2026, source: "https://aigamedex.com/ranking/2026-10-05", badge: "aigamedex 10월 1주 8위", hue: 30 },
  { id: "ribbon", title: "Ribbon & Steel: Lantern Fields", en: "", url: "https://lguidolin.itch.io/ribbon-and-steel-lantern-fields", region: "Global", tags: ["농장", "시뮬레이션", "유료"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음. 원본 페이지 기준 유료 게임.", desc: "21일 안에 버려진 밭을 되살리는 농장 게임. 작물을 길러 수확 바구니에 네 가지 작물을 담아 제출하는 것이 목표입니다. (유료)", maker: "@lguidolin", year: 2026, source: "https://aigamedex.com/ranking/2026-10-05", badge: "aigamedex 10월 1주 6위", hue: 95 },
  { id: "vowsteel", title: "VOWSTEEL", en: "NO SECOND BLOW", url: "https://hobby-latex-consolidation-whats.trycloudflare.com/", region: "Global", tags: ["대전", "액션", "중세"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음. 임시 터널(trycloudflare.com) 주소라 곧 끊길 수 있음.", desc: "체력 바가 없는 중세 기사의 1:1 온라인 결투. 칼날이 어디에 닿느냐로 승패가 갈립니다.", maker: "미확인", year: 2026, source: "https://aigamedex.com/games/vowsteel-no-second-blow", badge: "aigamedex 10월 2주 4위", hue: 20 },
  { id: "panic", title: "PANIC STAB 1", en: "Horror Game", url: "https://gamedevz-gamed.itch.io/panic-stab-1-horror-game", region: "Global", tags: ["공포", "탈출", "퍼즐"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "어두운 잠긴 집에서 필요한 아이템 네 개를 찾아 다락의 마리아나를 구하고, 시간이 다 되기 전에 현관으로 탈출하는 공포 게임.", maker: "gamedevz-gamed", year: 2026, source: "https://aigamedex.com/ranking/2026-10-12", badge: "aigamedex 10월 2주 6위", hue: 350 },
  { id: "undermining", title: "Undermining", en: "", url: "https://hibigames.itch.io/undermining", region: "Global", tags: ["로그라이크", "광산", "시뮬레이션"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음.", desc: "낮에는 광물을 캐고, 밤에는 남은 돈을 쓰며 작업 시간이 끝나기 전에 승강기로 돌아와 세 층의 빚을 헤쳐 나가는 로그라이크.", maker: "@hibigames", year: 2026, source: "https://aigamedex.com/ranking/2026-10-12", badge: "aigamedex 10월 2주 10위", hue: 45 },
  { id: "sms207", title: "SMS 207", en: "", url: "https://machudev.itch.io/sms-207", region: "Global", tags: ["공포", "텍스트", "다운로드"], ai: "unknown", aiNote: "aigamedex에 AI 게임으로 등재되었으나 제작 도구는 표기되지 않음. 원본 페이지 기준 Windows용 다운로드 게임.", desc: "심야 지프니에서 승객의 요금을 기사에게 전달하며 수상한 문자를 읽는 공포 게임. 문자가 계속 오며 예정에 없던 목적지로 향하게 됩니다. (Windows 다운로드)", maker: "@machudev", year: 2026, source: "https://aigamedex.com/games/sms-207", badge: "aigamedex 3주 TOP10", hue: 270 },
  // 디시인사이드 · 에펨코리아 게시글에서 찾은 게임 (AI 근거는 게시글/제작자 설명 기준)
  { id: "openmmo", title: "OpenMMO", en: "openmmo.to.nexus", url: "https://openmmo.to.nexus/", region: "KR", tags: ["MMO", "멀티플레이"], ai: "reported", aiNote: "디시인사이드 AI 활용 갤러리에 '바이브코딩으로 만든 웹게임'으로 소개됨.", desc: "구글 계정으로 로그인해 접속하는 웹 MMO. 직업별 기술을 정기적으로 개편하는 업데이트 공지가 올라옵니다.", maker: "미확인", year: 2026, source: "https://gall.dcinside.com/mgallery/board/view/?id=ai_utilize&no=576", hue: 225 },
  { id: "heroschool", title: "용사 학원 키우기", en: "학원이 망했다", url: "https://baramutzero-netizen.github.io/heroschool/", region: "KR", tags: ["키우기", "경영", "도트"], ai: "reported", aiNote: "제작자가 코드·스프라이트·BGM을 전부 AI로 만들었다고 밝힘 (Claude, GPT, Suno 활용).", desc: "망해가는 학원을 용사 양성소로 키워 나가는 키우기 게임.", maker: "미확인", year: 2026, source: "https://gall.dcinside.com/mgallery/board/view/?id=ai_utilize&no=77091", hue: 35 },
  { id: "mugicraft", title: "짤배틀", en: "mugicraft", url: "https://mugicraft.com/?k=dc", region: "KR", tags: ["배틀", "이미지 생성", "AI 내장"], ai: "reported", aiNote: "제작자가 Claude로 주말 동안 만들었다고 밝힘. 사이트에도 '일러스트와 설정은 AI가 만든 것'이라고 표시.", desc: "사진 한 장이나 10초 낙서를 무기로 바꿔 서로 싸우는 모바일형 배틀 게임. 만 14세 이상.", maker: "미확인", year: 2026, source: "https://gall.dcinside.com/mgallery/board/view/?id=ai_utilize&no=58431", hue: 18 },
  { id: "anontokyo", title: "ANON TOKYO", en: "아논 도쿄", url: "https://anon-tokyo123.ygate33.workers.dev/", region: "KR", tags: ["뱀서라이크", "팬게임"], ai: "reported", aiNote: "제작자가 Claude로 게임을, NovelAI로 이미지를 만들었다고 밝힘.", desc: "캐릭터 생일을 기념해 만든 15분 분량 뱀파이어 서바이버형 게임. 비공식 팬게임이며 PC/모바일 지원.", maker: "미확인", year: 2026, source: "https://gall.dcinside.com/mgallery/board/view/?id=bang_dream&no=6489509", hue: 330 },
  { id: "gungi", title: "군의", en: "軍儀 · AI와 온라인 대전", url: "https://gungi-duel.icecake.chatgpt.site/", region: "KR", tags: ["보드게임", "대전", "전략"], ai: "reported", aiNote: "제작자가 GPT 계열 AI로 만들었다고 밝힘 (디시인사이드 게시글).", desc: "AI와 혼자, 또는 방 코드로 친구와 겨루는 장기풍 전술 대국. 기물 제한과 포인트제를 설정할 수 있습니다.", maker: "미확인", year: 2026, source: "https://gall.dcinside.com/mgallery/board/view/?id=hunterxhunter&no=169948", hue: 40 },
  { id: "jamojump", title: "자모 점프", en: "jamojump", url: "https://jamojump.app", region: "KR", tags: ["퍼즐", "한글"], ai: "unknown", aiNote: "디시인사이드 '바이브코딩 웹게임' 검색에 걸린 게시글(네가지소원 갤러리)이나, AI 사용은 본문에서 확인하지 못함.", desc: "두 글자로 깃발까지 가는 한글 퍼즐 게임.", maker: "미확인", year: 2026, source: "https://gall.dcinside.com/mgallery/board/view/?id=fourpromise&no=447", hue: 150 },
  { id: "limited", title: "LIMITED SHOWDOWN", en: "Roblox Limited Challenge", url: "https://limitedshowdown.vercel.app", region: "KR", tags: ["퀴즈", "로블록스"], ai: "reported", aiNote: "디시인사이드 게시글에서 AI로 만들었다고 밝힘. 한국어/영어 지원.", desc: "Roblox 한정 아이템의 가격(RAP)을 읽고 더 비싼 쪽을 고르는 모드형 퀴즈 게임. 노말·하드코어·레어 모드.", maker: "미확인", year: 2026, source: "https://search.dcinside.com/post/p/1/sort/accuracy/q/vercel%20%EC%9B%B9%EA%B2%8C%EC%9E%84", hue: 235 },
  { id: "taipei", title: "臺北狂飆 TAIPEI RUSH", en: "taipei-gta.vercel.app", url: "https://taipei-gta.vercel.app/", region: "TW", tags: ["오픈월드", "3D", "드라이빙"], ai: "reported", aiNote: "디시인사이드 게시글에서 '바이브코딩에 토큰 1만 달러를 써서 만든 게임'이라고 소개됨.", desc: "브라우저에서 바로 즐기는 무료 오픈월드 타이베이 게임.", maker: "미확인", year: 2026, source: "https://search.dcinside.com/post/p/1/sort/accuracy/q/vercel%20%EC%9B%B9%EA%B2%8C%EC%9E%84", hue: 190 },
  { id: "yourstreamer", title: "YourStreamer", en: "방송 종료 후", url: "https://yourstreamer.vercel.app/", region: "KR", tags: ["어드벤처", "카메라·마이크"], ai: "reported", aiNote: "디시인사이드 게시글 제목에 '(AI웹게임)'이라고 표기됨.", desc: "중고로 산 노트북에서 유품을 조사하는 어드벤처. 시작 전에 카메라·마이크 권한 안내가 나옵니다.", maker: "미확인", year: 2026, source: "https://gall.dcinside.com/mgallery/board/view/?id=aidevelop&no=4165", hue: 215 },
  { id: "gecko", title: "게코랩", en: "GECKO LAB", url: "https://gecko-lab.vercel.app", region: "KR", tags: ["육성", "도트", "브리딩"], ai: "reported", aiNote: "디시인사이드 파충류 갤러리 게시글에서 AI로 만든 게임으로 소개됨.", desc: "크레스티드 게코를 교배하고 혈통을 이어가는 브리딩 게임. 턴제, 인큐베이터, 혈통도 기능.", maker: "미확인", year: 2026, source: "https://search.dcinside.com/post/p/1/sort/accuracy/q/vercel.app", hue: 105 },
  { id: "whistling", title: "Whistling Arrow", en: "휘파람 화살", url: "https://whistling-arrow.vercel.app", region: "KR", tags: ["마이크 조작", "아케이드"], ai: "unknown", aiNote: "디시인사이드 AI 게임 개발 갤러리에 공유됨. 제작 방식은 확인하지 못함.", desc: "마이크로 입력한 휘파람 음높이로 화살을 조종하는 게임. 마이크가 없으면 키보드 1/2/3으로 플레이합니다.", maker: "미확인", year: 2026, source: "https://search.dcinside.com/post/p/1/sort/accuracy/q/vercel.app", hue: 250 },
  { id: "boom", title: "BooM", en: "붐 서바이벌", url: "https://boom-survival.vercel.app/", region: "KR", tags: ["서바이벌", "슈터", "8비트"], ai: "unknown", aiNote: "디시인사이드 AI 게임 개발 갤러리에 공유됨. 제작 방식은 확인하지 못함.", desc: "WASD와 마우스로 싸우는 8비트풍 서바이벌 슈터 (둠 파쿠리).", maker: "미확인", year: 2026, source: "https://search.dcinside.com/post/p/1/sort/accuracy/q/vercel%20%EC%9B%B9%EA%B2%8C%EC%9E%84", hue: 355 },
  { id: "eternal", title: "Eternal Night", en: "Abyss Tower", url: "https://eternal-night-mu.vercel.app/", region: "KR", tags: ["로그라이크", "던전"], ai: "unknown", aiNote: "디시인사이드 AI 게임 개발 갤러리에 공유됨. 제작 방식은 확인하지 못함.", desc: "탑을 오르는 2D 탑뷰 던전 로그라이크 데모. 랭킹, 상점, 도감, 업적을 갖췄습니다.", maker: "미확인", year: 2026, source: "https://search.dcinside.com/post/p/1/sort/accuracy/q/vercel%20%EC%9B%B9%EA%B2%8C%EC%9E%84", hue: 45 },
  { id: "mathcard", title: "수학 카드 배틀", en: "", url: "https://math-card-battle.vercel.app/", region: "KR", tags: ["카드", "수학", "퍼즐"], ai: "unknown", aiNote: "디시인사이드 AI 게임 개발 갤러리에 공유됨. 제작 방식은 확인하지 못함.", desc: "사칙연산으로 겨루는 가벼운 카드 배틀 게임 (프론트엔드만 사용).", maker: "미확인", year: 2026, source: "https://search.dcinside.com/post/p/1/sort/accuracy/q/vercel%20%EC%9B%B9%EA%B2%8C%EC%9E%84", hue: 170 },
  { id: "covenant", title: "커버넌트 라이즈", en: "CovenantRise", url: "https://covenantrise.com/", region: "KR", tags: ["전략", "대전", "유닛 합성"], ai: "unknown", aiNote: "디시인사이드 AI 활용 갤러리 게시글('세무사가 만든 ai게임')이나, 사용한 AI 도구는 언급되지 않음.", desc: "인간·마물·엘프 군단으로 다른 플레이어와 랭크전을 벌이며 유닛을 합성하는 게임. 앱과 웹 버전이 있습니다.", maker: "세무사개발자 (WorktimeSoft)", year: 2026, source: "https://gall.dcinside.com/mgallery/board/view/?id=ai_utilize&no=137020", hue: 200 },
  // 80억분의 1 파생 인생 시뮬레이터 (나무위키 정리 기준, AI 사용 여부 미확인)
  { id: "randomhire", title: "랜덤입사게임", url: "https://randomhire.excelkospi.ai", region: "KR", tags: ["인생 시뮬레이션", "직장"], ai: "unknown", desc: "무작위 첫 직장에서 시작해 이직·실직·창업·은퇴까지 겪는 직장인의 삶.", hue: 230 },
  { id: "age30", title: "서른 살의 행운", url: "https://junai.online", region: "KR", tags: ["인생 시뮬레이션"], ai: "reported", aiNote: "페이지에 'Edit with Lovable' 표시가 있어 AI 사이트 빌더(Lovable)로 만든 것으로 보임.", desc: "무작위로 태어나 서른까지 살아남으면 복권에 당첨되고, 이후의 삶을 선택합니다.", hue: 50 },
  { id: "projectmoon", title: "도시의 한 사람으로 태어나", url: "https://project-moon-life.cityborn.workers.dev", region: "KR", tags: ["인생 시뮬레이션", "팬게임"], ai: "unknown", desc: "프로젝트문 세계관 도시의 이름 없는 주민으로 태어나 생존합니다. 비공식 팬게임.", hue: 340 },
  { id: "animal", title: "동물환생소", url: "https://rebornonearth.com", region: "KR", tags: ["인생 시뮬레이션", "동물"], ai: "unknown", desc: "어떤 동물 종으로든 환생하는 인생 시뮬레이터.", hue: 120 },
  { id: "pokemon", title: "어느 포켓몬 세계의 삶", url: "https://moooncang.github.io/poke", region: "KR", tags: ["인생 시뮬레이션", "팬게임"], ai: "unknown", desc: "포켓몬 세계에서 태어나 살아가는 인생 시뮬레이션. 비공식 팬게임.", hue: 55 },
  { id: "japan", title: "1억 2380만분의 1", url: "https://rs-developing.com/1oku2380man", region: "JP", tags: ["인생 시뮬레이션"], ai: "unknown", desc: "일본 인구 기준으로 만든 '80억분의 1' 일본판.", hue: 355 },
  { id: "horse", title: "8,236분의 1", url: "https://8236.tokuzawat.com", region: "JP", tags: ["인생 시뮬레이션", "경마"], ai: "unknown", desc: "일본 경주마로 태어나는 삶을 그린 시뮬레이션.", hue: 25 },
  { id: "boss", title: "사장으로 살아남기", url: "https://sajangnim.pages.dev", region: "KR", tags: ["경영", "인생 시뮬레이션"], ai: "unknown", desc: "공공 데이터를 바탕으로 창업과 폐업을 겪는 사장의 생존기.", hue: 90 },
  { id: "tarkov", title: "타르코프 탈출 일지", url: "https://escape-diary.aeru.workers.dev", region: "KR", tags: ["인생 시뮬레이션", "팬게임"], ai: "unknown", desc: "Escape from Tarkov 세계관을 소재로 한 팬 제작 시뮬레이션.", hue: 160 },
  { id: "looks", title: "외모와 삶", url: "https://looks-life.pages.dev", region: "KR", tags: ["인생 시뮬레이션", "풍자"], ai: "unknown", desc: "배경과 외모가 삶을 좌우하는 현대 한국을 그린 외모지상주의 풍자.", hue: 320 },
  { id: "grail", title: "성배가 차는 밤", url: "https://holygrailwargame.cupnight.workers.dev", region: "KR", tags: ["팬게임", "선택형"], ai: "unknown", desc: "Fate 시리즈의 성배전쟁에 참가하는 팬 제작 게임.", hue: 260 },
  { id: "singularity", title: "기술적 특이점", url: "https://singularity-one-life.fitbrush18.chatgpt.site", region: "KR", tags: ["인생 시뮬레이션", "SF"], ai: "reported", aiNote: "chatgpt.site 주소를 사용해 ChatGPT로 만든 사이트로 보임 (제작자 확인 필요).", desc: "기술적 특이점이 더해진 '80억분의 1' 변형판.", hue: 195 },
  { id: "nuke", title: "핵폭발, 낙진까지 20분", url: "https://nuclear.ubd.gg", region: "KR", tags: ["생존", "시뮬레이션"], ai: "unknown", desc: "서울에 핵이 터졌을 때 민방위 지침대로 살아남는 생존 게임.", hue: 10 }
];

// 각 게임의 첫 화면 캡처 또는 공식 미리보기 이미지 (img/ 폴더). 없으면 그라데이션 표지를 사용합니다.
var IMG = {
  "1in8b": "jpg", kickru: "jpg", capybara: "jpg", wenware: "jpg", fly: "jpg", taxi: "jpg", infinitecraft: "jpg",
  randomhire: "jpg", projectmoon: "jpg", japan: "jpg", horse: "jpg", boss: "jpg", tarkov: "jpg", looks: "jpg",
  grail: "jpg", singularity: "jpg", nuke: "jpg",
  yesno: "jpg", fantos: "jpg", haldane4: "png", vibeware: "jpg", age30: "png", animal: "png", pokemon: "jpg",
  matap: "jpg", openmmo: "jpg", heroschool: "png", mugicraft: "jpg", anontokyo: "jpg", gungi: "jpg",
  fronts: "png", doctrines: "png", ssalmuk: "png", ace: "png", samgukhero: "png", shobo: "jpg", samgukduel: "png",
  biplane: "png", orca: "png", dokan: "png", dubtarot: "png",
  arcane: "jpg", ganso: "png", riseandfall: "png", ribbon: "png", vowsteel: "jpg", panic: "png", undermining: "png", sms207: "gif",
  jamojump: "png", limited: "jpg", taipei: "jpg", gecko: "jpg", whistling: "jpg", boom: "jpg", eternal: "jpg", mathcard: "png"
};
window.GAMES.forEach(function (g) { if (IMG[g.id]) g.img = "img/" + g.id + "." + IMG[g.id]; });

// 장르 (게임당 하나). 정해지지 않은 게임은 '미분류'입니다.
var GENRE = {
  "시뮬레이션": ["1in8b", "capybara", "fly", "infinitecraft", "ssalmuk", "smith", "shobo", "ganso", "ribbon", "heroschool", "gecko",
    "randomhire", "age30", "projectmoon", "animal", "pokemon", "japan", "horse", "boss", "tarkov", "looks", "singularity"],
  "어드벤처": ["aidungeon", "arcane", "panic", "sms207", "yourstreamer", "grail"],
  "퍼즐": ["yesno", "wenware", "jamojump", "mathcard"],
  "액션": ["biplane", "orca", "vowsteel", "mugicraft", "whistling"],
  "로그라이크": ["undermining", "eternal"],
  "리듬": ["dubtarot"],
  "플랫포머": [],
  "RPG": ["samgukhero", "openmmo"],
  "전략": ["fronts", "doctrines", "samgukduel", "dokan", "riseandfall", "gungi", "covenant"],
  "스포츠": ["kickru", "ace"],
  "레이싱": ["taxi", "taipei"],
  "서바이벌": ["matap", "anontokyo", "boom", "nuke"],
  "미분류": ["fantos", "haldane4", "vibeware", "limited"]
};
window.GENRES = Object.keys(GENRE);
window.GAMES.forEach(function (g) {
  g.genre = "미분류";
  window.GENRES.forEach(function (name) { if (GENRE[name].indexOf(g.id) >= 0) g.genre = name; });
});

// 플레이 방식과 가격 (원본 페이지 기준). 기본값은 '웹에서 바로 플레이 / 무료'입니다.
var DOWNLOAD_ONLY = ["sms207"];
var PAID = ["ribbon"];
window.GAMES.forEach(function (g) {
  g.dl = DOWNLOAD_ONLY.indexOf(g.id) >= 0;
  g.paid = PAID.indexOf(g.id) >= 0;
});

// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "ひなまるん！",
    "sidebarTitle": "　color sing",
    "footerText": "",
    "footerSubText": "",
    "footerNote": "",
    "pageTitle": "ひなまるん！ - 特典管理",
    "loadingEmoji": "🧸",
    "loadingText": "Loading...",
    "showHeader": false,
    "showTitle": true,
    "titleGradient": false,
    "titleGradientDirection": "to-r",
    "titleGlow": false
  },
  "colors": {
    "deepBlue": "#ffffff",
    "oceanTeal": "#86fef6",
    "lightBlue": "#58c0e0",
    "amber": "#a494ff",
    "accent": "#4080d8",
    "gold": "#e8f4ff"
  },
  "colorOverrides": {
    "headerGradientStart": "",
    "headerGradientEnd": "",
    "titleGradientStart": "",
    "titleGradientMid": "",
    "titleGradientEnd": "",
    "cardBorder": "#ff6a1a",
    "cardBorderHover": "#ffcf24",
    "primaryText": "#36116f",
    "accentText": "",
    "rank1Card": "#1976f0",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "#7977da",
    "footerText": "",
    "contentText": "#7a78e8",
    "titleColor": "",
    "subText": "#495fd0",
    "popupOverlayColor": "",
    "popupOverlayOpacity": "",
    "glassBgOpacity": 0.35,
    "glassBgColor": "#fbfe48"
  },
  "fonts": {
    "display": "'Playfair Display', serif",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap",
    "body": "'M PLUS 2', sans-serif",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400;500;700&display=swap",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap"
  },
  "images": {
    "headerDesktop": "",
    "headerMobile": "",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "1-HbWK_-RuNYTt5jHklwrM-LQMzSOttBa2Vb51L0C_GQ",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "ranges": {
      "ranking": "D2:G5",
      "goals": "A2:B10",
      "benefits": "A2:E20"
    },
    "refreshIntervalMs": 300000,
    "dataSheetName": "data"
  },
  "views": [
    {
      "id": "home",
      "label": "Home",
      "icon": "🏠",
      "enabled": true
    },
    {
      "id": "menu",
      "label": "Menu",
      "icon": "🍸",
      "enabled": true
    },
    {
      "id": "rights",
      "label": "ボトルキープ",
      "icon": "👥",
      "enabled": true,
      "title": "ボトルキープ一覧"
    },
    {
      "id": "icons",
      "label": "枠内アイコン",
      "icon": "🖼️",
      "enabled": true,
      "title": "枠内アイコン"
    }
  ],
  "benefitTiers": [
    {
      "key": "1k",
      "icon": "🖼️",
      "columnIndex": 0,
      "displayTemplate": "特典: {value}",
      "isMembership": false
    },
    {
      "key": "5k",
      "icon": "🎵",
      "columnIndex": 1,
      "displayTemplate": "強制リクエスト: {value}曲"
    },
    {
      "key": "10k",
      "icon": "🎮",
      "columnIndex": 2,
      "displayTemplate": "権利: {value}時間分"
    },
    {
      "key": "20k",
      "icon": "💬",
      "columnIndex": 3,
      "displayTemplate": "オープンチャット招待済",
      "isBoolean": true
    },
    {
      "key": "30k",
      "icon": "🎤",
      "columnIndex": 4,
      "displayTemplate": "アカペラ音源獲得: {value}曲"
    },
    {
      "key": "40k",
      "icon": "⚡",
      "columnIndex": 5,
      "displayTemplate": "強制リクエスト: {value}曲"
    },
    {
      "key": "50k",
      "icon": "🏆",
      "columnIndex": 6,
      "displayTemplate": "ミックス音源獲得: {value}曲"
    },
    {
      "key": "メンバーシップA",
      "icon": "👑",
      "columnIndex": 7,
      "displayTemplate": "月内リクエスト対応中",
      "isMembership": true
    },
    {
      "key": "メンバーシップB",
      "icon": "🌟",
      "columnIndex": 0,
      "displayTemplate": "特典: {value}",
      "isMembership": true
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "歌推しPt",
    "pointsUnit": "k",
    "targetsTitle": "Targets",
    "targetLabels": [
      "今旬の目標",
      "今月の目標"
    ],
    "faq": {
      "enabled": true,
      "title": "📝 FAQ・注意事項",
      "items": []
    }
  },
  "menu": {
    "title": "Menu"
  },
  "ui": {
    "errorTitle": "エラー",
    "errorMessage": "データの読み込みに失敗しました。しばらくしてから再度お試しください。",
    "retryButton": "再読み込み",
    "refreshButton": "更新",
    "lastUpdate": "最終更新",
    "iconLoading": "アイコンデータを読み込み中...",
    "iconEmpty": "アイコンデータがありません",
    "iconNoImages": "アイコンがありません",
    "userListTitle": "獲得者一覧",
    "userIconTitle": "{user} ",
    "searchPlaceholder": "🔍 名前で検索...",
    "specialRightLabel": "Special権利",
    "imageError": "画像エラー"
  },
  "effects": {
    "iconFloat": true,
    "particles": "bubble",
    "particleDirection": "up",
    "particleColor": "",
    "particleSize": 0.5,
    "particleOpacity": 1
  },
  "deploy": {
    "owner": "colorsing-dashboard",
    "repo": "Hina_Amagi",
    "branch": "main",
    "token": "rev:hfpcu4LVYAZUQYRRtZFX8c6JZ1SQJa3OBRlUZtdpBmPFZFLAh7RrXsWUsaw_FEJ3jkyZgJpT0IMBSTQB11_tap_buhtig"
  },
  "admin": {
    "password": "mickle0w0",
    "developerKey": "CSadmin"
  }
}

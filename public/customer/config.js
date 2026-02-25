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
    "amber": "#9380ff",
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
    "primaryText": "#6b75ff",
    "accentText": "#4993f3",
    "rank1Card": "#ff387e",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "#4993f3",
    "footerText": "#9380ff",
    "contentText": "#9380ff",
    "titleColor": "",
    "subText": "#495fd0",
    "popupOverlayColor": "",
    "popupOverlayOpacity": 0.85,
    "menuCardLabelColor": "#00ffd5",
    "menuCardLabelOpacity": 0,
    "glassBgOpacity": 0.9,
    "glassBgColor": "#ffffff"
  },
  "fonts": {
    "display": "'Yomogi', cursive",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Yomogi:wght@400&display=swap",
    "body": "'Yomogi', cursive",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=Yomogi:wght@400&display=swap",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap"
  },
  "images": {
    "headerDesktop": "",
    "headerMobile": "",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "",
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
      "label": "特典一覧",
      "icon": "📝",
      "enabled": true,
      "title": "特典一覧"
    },
    {
      "id": "rights",
      "label": "特典権利者",
      "icon": "👥",
      "enabled": true,
      "title": "特典権利者"
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
      "displayTemplate": "強制リクエスト: {value}曲分"
    },
    {
      "key": "10k",
      "icon": "🖼️",
      "columnIndex": 2,
      "displayTemplate": "獲得済！",
      "isBoolean": true
    },
    {
      "key": "20k",
      "icon": "🎙️",
      "columnIndex": 3,
      "displayTemplate": "獲得済！",
      "isBoolean": true
    },
    {
      "key": "30k",
      "icon": "💗",
      "columnIndex": 4,
      "displayTemplate": "獲得済！",
      "isBoolean": true
    },
    {
      "key": "40k",
      "icon": "💌",
      "columnIndex": 5,
      "displayTemplate": "獲得済！",
      "isBoolean": true
    },
    {
      "key": "50k",
      "icon": "🎁",
      "columnIndex": 6,
      "displayTemplate": "獲得済！",
      "isBoolean": true
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
    "particles": "heart",
    "particleDirection": "down",
    "particleColor": "#ff85e9",
    "particleSize": 1,
    "particleOpacity": 1.5
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

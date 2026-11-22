function infographic(label, title, description, type = "infographic") {
  return { type, label, title, description };
}

function advice(text, question, followUpTopic, actions, media) {
  return {
    text: `${text} ${question}`,
    followUpTopic,
    actions,
    media,
  };
}

const topicReplies = {
  food: [
    advice(
      "把快吃完的食材放前面，剩菜也能變成明天的一餐。",
      "你家最常剩下蔬菜，還是白飯？",
      "food",
      [{ type: "micro", label: "把快熟食材放前面" }, { type: "micro", label: "用剩菜做明日料理" }],
      infographic("食材保存圖卡", "冰箱前置小整理", "讓快吃完的食材放在看得見的位置。"),
    ),
    advice(
      "買菜前先看一眼冰箱，再列短清單，較不容易重複買。",
      "你習慣每天採買，還是一週一次？",
      "food",
      [{ type: "micro", label: "採買前先看冰箱" }, { type: "micro", label: "先列一張短清單" }],
      infographic("食材採買圖卡", "先看冰箱再出門", "確認已有的食材，再補上真正需要的品項。"),
    ),
  ],
  electricity: [
    advice(
      "省電不用一次改很多。先關沒人在用的燈，再看看哪些電器常待機。",
      "你想先聊冷氣，還是待機用電？",
      "electricity",
      [{ type: "topic", value: "cooling", label: "冷氣小撇步" }, { type: "topic", value: "standby", label: "電器待機" }],
      infographic("日常省電圖卡", "從常用電器開始", "挑一個每天都會遇到的習慣，慢慢調整就好。"),
    ),
    advice(
      "每天用電可以從照明、冷氣和洗衣開始，一次挑一件就好。",
      "你最想先改善哪一種？",
      "electricity",
      [{ type: "topic", value: "lighting", label: "照明習慣" }, { type: "topic", value: "laundry", label: "洗衣習慣" }],
      infographic("居家節電圖卡", "今天先選一個角落", "從常用空間開始，找一個不費力的小改變。"),
    ),
  ],
  cooling: [
    advice(
      "冷氣設在舒服的溫度，再搭配電風扇幫助空氣流動。",
      "你家白天比較熱，還是晚上比較熱？",
      "cooling",
      [{ type: "micro", label: "搭配電風扇" }, { type: "micro", label: "清潔冷氣濾網" }],
      infographic("冷氣節電圖卡", "舒服比調很低重要", "搭配循環風扇，並依照產品說明清潔濾網。"),
    ),
    advice(
      "關好門窗能減少冷氣流失，窗邊有日照時也可拉上窗簾。",
      "你想先試遮陽，還是檢查濾網？",
      "cooling",
      [{ type: "micro", label: "白天拉上窗簾" }, { type: "micro", label: "檢查冷氣濾網" }],
      infographic("冷氣使用圖卡", "留住室內涼爽", "關好門窗，避免陽光直曬室內。"),
    ),
  ],
  fridge: [
    advice(
      "拿取食物時別讓冰箱門開太久，也留些空間讓冷氣流通。",
      "你家最常忘記收哪種食物？",
      "fridge",
      [{ type: "micro", label: "拿完就關冰箱門" }, { type: "micro", label: "整理冰箱通風空間" }],
      infographic("冰箱省電圖卡", "少開門，也別塞太滿", "常用食材放前面，拿取更快也更方便。"),
    ),
    advice(
      "剩菜分裝後及時冷藏，並依照食物安全建議保存。",
      "你想看冰箱整理，還是食材保存？",
      "fridge",
      [{ type: "micro", label: "把常用食材放前面" }, { type: "topic", value: "food", label: "食材保存方法" }],
      infographic("冰箱使用圖卡", "收納順手更省心", "依食材特性妥善保存，並參考冰箱使用說明。"),
    ),
  ],
  lighting: [
    advice(
      "白天先用自然光，離開房間時再順手關燈。",
      "你最常忘記關哪個房間的燈？",
      "lighting",
      [{ type: "micro", label: "離開時關一盞燈" }, { type: "micro", label: "白天拉開窗簾" }],
      infographic("照明省電圖卡", "先用好自然光", "需要換燈時，再考慮較省電的照明選擇。"),
    ),
    advice(
      "書桌只照亮需要的位置也很舒服，不用整個房間都開亮。",
      "你想先調整書桌燈，還是客廳燈？",
      "lighting",
      [{ type: "micro", label: "關掉沒用到的燈" }, { type: "micro", label: "調整書桌照明" }],
      infographic("照明小提醒", "照亮需要的地方", "依照閱讀或休息情境，開啟剛剛好的燈光。"),
    ),
  ],
  standby: [
    advice(
      "電視或音響不用時，可用有開關的延長線集中關閉。",
      "你家待機設備多嗎？",
      "standby",
      [{ type: "micro", label: "關閉影音設備電源" }, { type: "micro", label: "整理充電器插頭" }],
      infographic("待機用電圖卡", "集中管理不常用設備", "冰箱、網路設備等需要持續運作的電器，保持供電即可。"),
    ),
    advice(
      "充電完成後收好不需要的充電器，出門前也能巡一眼電源。",
      "你想先整理書桌，還是客廳的插座？",
      "standby",
      [{ type: "micro", label: "收好已充飽的充電器" }, { type: "micro", label: "檢查影音設備" }],
      infographic("插座整理圖卡", "讓關電源更順手", "把常用充電器集中收納，不用時再關閉電源。"),
    ),
  ],
  laundry: [
    advice(
      "洗衣量累積到合適再洗，別塞得太滿。天氣好時可自然晾乾。",
      "你平常會用烘衣機嗎？",
      "laundry",
      [{ type: "micro", label: "今天改用自然晾乾" }, { type: "micro", label: "洗衣前先分類" }],
      infographic("洗衣省電圖卡", "洗得剛剛好", "依衣物標示選擇適合的洗程，避免過度裝載。"),
    ),
    advice(
      "先看衣物標示，再選合適洗程。不太髒的衣物不一定要用強力模式。",
      "你比較在意洗衣時間，還是烘衣？",
      "laundry",
      [{ type: "micro", label: "選合適的洗衣模式" }, { type: "topic", value: "standby", label: "看看其他用電習慣" }],
      infographic("洗衣小提醒", "洗程符合衣物需求", "確認衣物標示，再選擇適合的洗滌方式。"),
    ),
  ],
  cooking: [
    advice(
      "煮水只裝需要的量，鍋子加蓋也能讓料理更快完成。",
      "你平常用電鍋，還是爐子？",
      "cooking",
      [{ type: "micro", label: "煮水前先量需要的量" }, { type: "micro", label: "煮飯時蓋上鍋蓋" }],
      infographic("料理省電圖卡", "烹調前的小準備", "先備好食材，煮水或料理時蓋上鍋蓋。"),
    ),
    advice(
      "鍋具大小配合爐火，熱能較不會散到鍋子外面。",
      "你最常煮湯，還是煮主食？",
      "cooking",
      [{ type: "micro", label: "挑合適大小的鍋具" }, { type: "micro", label: "先備好料理食材" }],
      infographic("烹飪小提醒", "鍋具配合爐火", "料理前挑選合適大小的鍋具，使用起來更順手。"),
    ),
  ],
  waterHeating: [
    advice(
      "洗澡前先備好換洗衣物，縮短等待和沖洗時間。",
      "你想先看洗澡習慣，還是熱水器設定？",
      "waterHeating",
      [{ type: "micro", label: "洗澡前備好衣物" }, { type: "micro", label: "縮短沖洗一點點" }],
      infographic("熱水使用圖卡", "從準備時間開始", "先準備好用品，再開始使用熱水。"),
    ),
    advice(
      "熱水用量可以慢慢調整，不必一下改變整個洗澡習慣。",
      "你希望先從哪個小地方開始？",
      "waterHeating",
      [{ type: "micro", label: "縮短沖洗一點點" }, { type: "topic", value: "laundry", label: "看看洗衣省電" }],
      infographic("居家節能小卡", "挑一件容易做到的事", "留意熱水使用時間，選擇自己舒服的節奏。"),
    ),
  ],
  disposable: [
    advice(
      "把常用水壺或購物袋放在包包旁，出門時就更容易記得帶。",
      "你最常忘記帶水壺，還是購物袋？",
      "disposable",
      [{ type: "micro", label: "帶上水壺" }, { type: "micro", label: "帶上購物袋" }],
      infographic("出門微挑戰", "挑一樣放進包包", "把常用的重複用品放在出門順手拿得到的位置。", "interactive-card"),
    ),
    advice(
      "不需要一次換掉所有用品。先從最常用的一件開始就很好。",
      "你想先準備餐具，還是隨身杯？",
      "disposable",
      [{ type: "micro", label: "準備自己的餐具" }, { type: "micro", label: "帶上隨身杯" }],
      infographic("重複用品小卡", "從習慣的一件開始", "挑一件常用用品，放進每天會帶的包包。", "interactive-card"),
    ),
  ],
  dining: [
    advice(
      "外食先選自己吃得完的份量，也可以帶上常用餐具或水壺。",
      "你比較想從份量，還是自備用品開始？",
      "dining",
      [{ type: "micro", label: "選剛好的份量" }, { type: "micro", label: "帶上自己的餐具" }],
      infographic("外食微挑戰", "下一餐選一個行動", "依照自己的習慣，挑一件容易做到的事。", "interactive-card"),
    ),
    advice(
      "點餐前先看看今天的食量，吃不完也可詢問店家是否方便打包。",
      "你通常會在午餐外食，還是晚餐外食？",
      "dining",
      [{ type: "micro", label: "先估計今天的食量" }, { type: "micro", label: "自備餐盒打包" }],
      infographic("減少剩食小卡", "依食量選擇餐點", "先看看份量，再選適合自己的餐點。", "interactive-card"),
    ),
  ],
  transport: [
    advice(
      "短程有安全步道時，可以考慮走路或騎車。",
      "你平常通勤距離近，還是比較遠？",
      "transport",
      [{ type: "micro", label: "今天走一小段路" }, { type: "topic", value: "disposable", label: "看看重複用品" }],
      infographic("低碳移動小卡", "短程試試步行", "依照路程、天氣和安全狀況，選擇適合的方式。", "interactive-card"),
    ),
    advice(
      "把行程順路安排，能少一些來回奔波，也比較省心。",
      "你平常最常搭捷運、公車，還是開車？",
      "transport",
      [{ type: "micro", label: "先安排順路的行程" }, { type: "topic", value: "electricity", label: "看看居家省電" }],
      infographic("日常移動小卡", "先把行程排順", "依照路程與方便程度，挑選合適的交通方式。", "interactive-card"),
    ),
  ],
};

function knowledgeEntry(id, title, keywords, content, tts, cardDescription, actions = [], game = null) {
  const entry = {
    id,
    title,
    keywords,
    content,
    tts,
    card: infographic("永續生活知識卡", title, cardDescription),
    actions,
  };
  if (game?.length) entry.game = game;
  return entry;
}

const gameActions = {
  portion: "點餐先估食量，減少剩食",
  bottle: "外出帶上重複使用水壺",
  groceries: "採買前先看看冰箱",
  handkerchief: "自備手帕，少用一次性紙品",
  lights: "離開房間時關掉不用的燈",
  reusableBag: "出門帶上重複使用購物袋",
};

const KNOWLEDGE_BASE = [
  knowledgeEntry(
    "food",
    "飲食減碳",
    ["飲食", "蔬食", "植物性", "豆類", "肉類", "食物"],
    "飲食減碳可以從多選植物性食材、減少浪費開始。不用一次全素，先挑一餐或一道菜試試。",
    "飲食減碳可以從多選植物性食材和減少浪費開始。先挑一餐試試就好。",
    "多樣化植物性食材，從一餐的小選擇開始。",
    [{ type: "topic", value: "food_waste", label: "食材與廚餘" }, { type: "topic", value: "dining", label: "外食減碳" }],
  ),
  knowledgeEntry(
    "electricity",
    "居家節電",
    ["省電", "節電", "用電", "電器", "家電", "電費", "節能"],
    "不使用時關閉照明，選購家電可參考能源效率標示。先從常用電器做一點改變，不必一次改完。",
    "不用的燈和電器記得關閉。選家電時，也可以看看能源效率標示。",
    "從照明和常用電器開始，選一個容易維持的習慣。",
    [{ type: "topic", value: "lighting", label: "照明習慣" }, { type: "topic", value: "standby", label: "待機用電" }],
  ),
  knowledgeEntry(
    "cooling",
    "冷氣省電",
    ["冷氣", "空調", "風扇", "濾網", "降溫"],
    "冷氣以舒服為先，關好門窗並搭配電風扇，定期依產品說明清潔濾網。",
    "冷氣以舒服為先，搭配電風扇並依說明清潔濾網。",
    "關好門窗、搭配電風扇，並依照產品說明清潔濾網。",
    [{ type: "micro", label: "搭配電風扇" }, { type: "micro", label: "清潔冷氣濾網" }],
  ),
  knowledgeEntry(
    "fridge",
    "冰箱省電與保存",
    ["冰箱", "冷藏", "冷凍", "保存", "剩菜"],
    "減少冰箱門開啟時間，別塞得太滿，常用食材放前方。剩菜要及時妥善冷藏。",
    "少開冰箱門、別塞得太滿，常用食材放前面。",
    "讓冷氣流通，拿取食物更快速。",
    [{ type: "micro", label: "把常用食材放前面" }, { type: "topic", value: "food_waste", label: "減少食物浪費" }],
  ),
  knowledgeEntry(
    "lighting",
    "照明習慣",
    ["照明", "燈", "燈泡", "採光", "自然光"],
    "白天先利用自然光，離開空間時順手關燈。需要換燈時，再考慮合適的省電照明。",
    "白天多用自然光，離開空間時順手關燈。",
    "依照空間需求開燈，讓自然光成為好幫手。",
    [{ type: "micro", label: "白天拉開窗簾" }, { type: "micro", label: "離開時關一盞燈" }],
  ),
  knowledgeEntry(
    "standby",
    "待機用電",
    ["待機", "插頭", "插座", "充電器", "延長線", "電源"],
    "不常使用的影音設備和充電器，可集中管理並在不用時關閉。冰箱、網路設備等需要持續運作的電器則維持供電。",
    "不常用的影音設備可集中關閉；冰箱等必要設備維持供電。",
    "整理不常用設備，必要電器不需拔除。",
    [{ type: "micro", label: "整理充電器" }, { type: "micro", label: "關閉影音設備" }],
  ),
  knowledgeEntry(
    "laundry",
    "洗衣與晾衣",
    ["洗衣", "烘衣", "晾衣", "洗程", "衣物"],
    "洗衣量累積到合適再洗，依衣物標示選洗程。天氣合適時自然晾乾，省下烘衣步驟。",
    "衣物累積到合適再洗，天氣好時可以自然晾乾。",
    "依照衣物標示選洗程，避免過度裝載。",
    [{ type: "micro", label: "今天改用自然晾乾" }, { type: "micro", label: "洗衣前先分類" }],
  ),
  knowledgeEntry(
    "disposable",
    "重複使用用品",
    ["一次性", "餐具", "水壺", "購物袋", "保溫杯", "手帕", "重複使用"],
    "把常用水壺、購物袋或餐具放在出門順手的位置。先帶上一件，就能少用一次性用品。",
    "出門前帶上一件常用的水壺、購物袋或餐具就很好。",
    "挑一件常用用品，放在容易帶出門的位置。",
    [{ type: "micro", label: "帶上水壺" }, { type: "topic", value: "slow_fashion", label: "認識慢時尚" }],
    [
      {
        difficulty: "regular",
        item: "用過的面紙",
        detail: "面紙已使用，不能當成乾淨紙張。",
        category: "一般垃圾",
        action: gameActions.handkerchief,
        actions: [gameActions.handkerchief, gameActions.portion, gameActions.groceries],
        reason: "使用過的面紙通常不屬於乾淨可回收紙類。",
        tip: "日常可視情況自備手帕，少用一次性紙品。",
        mediaTitle: "面紙與紙類的差別",
      },
      {
        difficulty: "advanced",
        item: "用過的紙巾",
        detail: "紙巾已使用，並非乾淨可回收紙張。",
        category: "一般垃圾",
        action: gameActions.handkerchief,
        actions: [gameActions.handkerchief, gameActions.reusableBag, gameActions.lights],
        reason: "使用過的紙巾通常不列為回收紙類。",
        tip: "乾淨紙張和用過的紙巾，分類方式可能不同。",
        mediaTitle: "紙張分類辨識圖卡",
      },
    ],
  ),
  knowledgeEntry(
    "transport",
    "綠色交通",
    ["交通", "通勤", "捷運", "公車", "步行", "騎車", "大眾運輸"],
    "短程有安全步道時，可考慮步行或騎車；較遠行程可比較大眾運輸。依天氣與安全選方便的方式。",
    "短程可評估步行或騎車，較遠行程可以考慮大眾運輸。",
    "依照路程、天氣和安全狀況，選擇適合的移動方式。",
    [{ type: "micro", label: "安排順路的行程" }, { type: "micro", label: "走一小段路" }],
  ),
  knowledgeEntry(
    "digital_carbon",
    "數位減碳",
    ["數位", "手機", "電腦", "串流", "雲端", "影音", "電子郵件"],
    "延長手機與電腦的使用年限，整理不再需要的檔案，並關閉不使用的設備。觀看影音時可依需求調整畫質。",
    "延長設備使用年限，整理檔案，關閉不使用的設備。",
    "從延長設備壽命和整理數位內容開始，不必追求完美。",
    [{ type: "micro", label: "整理一個資料夾" }, { type: "micro", label: "延長設備使用年限" }],
  ),
  knowledgeEntry(
    "pizza_trash",
    "沾油披薩盒分類小考",
    ["披薩盒", "比薩盒", "沾油", "油漬紙盒", "紙盒分類"],
    "沾有明顯油污的披薩盒通常不適合和乾淨紙類一起回收；實際分類仍要依所在地公告確認。",
    "沾油披薩盒通常不適合和乾淨紙類一起回收，記得查看所在地規定。",
    "先看紙盒是否乾淨，再依所在地公告分類。",
    [{ type: "game", value: "regular", label: "挑戰分類小考" }, { type: "topic", value: "recycling", label: "資源回收原則" }],
    [
      {
        difficulty: "regular",
        item: "吃完的沾油披薩盒",
        detail: "紙盒上有明顯油漬。",
        category: "一般垃圾",
        action: gameActions.portion,
        actions: [gameActions.portion, gameActions.bottle, gameActions.lights],
        reason: "油污容易沾在紙纖維上，通常不適合和乾淨紙類一起回收。",
        tip: "下次可先看紙盒是否乾淨、乾燥。",
        mediaTitle: "沾油紙盒怎麼分",
      },
      {
        difficulty: "advanced",
        item: "沾有明顯油漬的外帶紙盒",
        detail: "紙盒纖維已被食物油污沾染。",
        category: "一般垃圾",
        action: gameActions.portion,
        actions: [gameActions.portion, gameActions.groceries, gameActions.bottle],
        reason: "油污會影響紙纖維再利用，通常不適合和乾淨紙類一起回收。",
        tip: "先觀察污漬；乾淨紙和沾油紙盒可能不同類。",
        mediaTitle: "乾淨紙盒與油污紙盒",
      },
    ],
  ),
  knowledgeEntry(
    "food_waste",
    "廚餘與食物減廢",
    ["廚餘", "果皮", "菜葉", "剩菜", "剩飯", "食物浪費", "廚餘分類"],
    "先規劃份量並妥善保存食材，減少食物浪費。果皮菜葉等廚餘的收運方式可能因地區而異，請依所在地公告。",
    "先減少食物浪費；廚餘分類方式要查看所在地公告。",
    "先妥善保存食材，再確認所在地的廚餘規則。",
    [{ type: "topic", value: "food", label: "飲食減碳" }, { type: "topic", value: "fridge", label: "冰箱保存" }],
    [
      {
        difficulty: "regular",
        item: "備餐後的菜葉和果皮",
        detail: "都是料理時產生的蔬果剩料。",
        category: "廚餘",
        action: gameActions.groceries,
        actions: [gameActions.groceries, gameActions.bottle, gameActions.lights],
        reason: "蔬果剩料通常屬於廚餘，細節請參考所在地公告。",
        tip: "先看冰箱再採買，也能減少食材放到過期。",
        mediaTitle: "蔬果剩料分類圖卡",
      },
      {
        difficulty: "advanced",
        item: "料理後的菜葉和果皮",
        detail: "蔬果已經整理成一般廚餘。",
        category: "廚餘",
        action: gameActions.groceries,
        actions: [gameActions.groceries, gameActions.reusableBag, gameActions.lights],
        reason: "蔬果剩料通常屬於廚餘，各地收運細節可能不同。",
        tip: "先確認所在地廚餘規則，再照公告瀝除多餘水分。",
        mediaTitle: "廚餘分類小提醒",
      },
    ],
  ),
  knowledgeEntry(
    "dining",
    "外食減碳",
    ["外食", "餐廳", "點餐", "份量", "打包", "餐盒"],
    "外食先估計食量、點剛好的份量。方便時自備餐具或餐盒，吃不完則詢問店家是否可打包。",
    "外食可以先估份量，也能帶上常用餐具或餐盒。",
    "下一餐挑一個順手的小行動就好。",
    [{ type: "micro", label: "依食量選餐" }, { type: "topic", value: "disposable", label: "準備重複用品" }],
  ),
  knowledgeEntry(
    "slow_fashion",
    "慢時尚與衣物照顧",
    ["慢時尚", "衣服", "穿搭", "衣物", "二手", "修補", "時尚"],
    "延長衣物使用時間也是資源減量。可先照顧好現有衣物、簡單修補，或考慮交換與二手選擇。",
    "多穿幾次、適時修補，讓衣物陪你久一點。",
    "先從照顧現有衣物開始，再考慮添購。",
    [{ type: "micro", label: "修補一件衣物" }, { type: "micro", label: "整理可交換衣物" }],
  ),
  knowledgeEntry(
    "recycling",
    "資源回收與分類",
    ["回收", "資源回收", "玻璃瓶", "鋁罐", "塑膠瓶", "紙袋", "紙類", "分類"],
    "回收前先倒空容器，並依材質與所在地規則分類。紙類是否乾淨、乾燥及容器細節都可能影響處理方式。",
    "先倒空容器，並依所在地公告確認分類方式。",
    "乾淨、倒空再分類；細節請看所在地回收指引。",
    [{ type: "game", value: "regular", label: "挑戰分類小考" }, { type: "topic", value: "pizza_trash", label: "沾油紙盒分類" }],
    [
      {
        difficulty: "regular",
        item: "倒空的玻璃瓶",
        detail: "瓶內已倒空，沒有明顯殘留物。",
        category: "可回收物",
        action: gameActions.bottle,
        actions: [gameActions.bottle, gameActions.groceries, gameActions.lights],
        reason: "乾淨的玻璃容器通常可回收，並依所在地規定整理。",
        tip: "先倒空容器，再查看當地回收指引。",
        mediaTitle: "玻璃瓶回收小提醒",
      },
      {
        difficulty: "regular",
        item: "倒空的鋁罐",
        detail: "罐內飲料已倒空。",
        category: "可回收物",
        action: gameActions.bottle,
        actions: [gameActions.bottle, gameActions.groceries, gameActions.lights],
        reason: "金屬容器通常可回收，實際整理方式依所在地公告。",
        tip: "回收前先倒空，再照當地指引分類。",
        mediaTitle: "鋁罐回收小提醒",
      },
      {
        difficulty: "advanced",
        item: "乾淨、乾燥且沒有塑膠膜的紙袋",
        detail: "紙袋沒有油漬，也沒有複合材質內膜。",
        category: "可回收物",
        action: gameActions.reusableBag,
        actions: [gameActions.reusableBag, gameActions.bottle, gameActions.lights],
        reason: "乾淨乾燥的紙類通常可回收，複合材質則要依地方規定確認。",
        tip: "先看紙袋是否乾淨、乾燥，並留意有沒有覆膜。",
        mediaTitle: "紙袋材質辨識圖卡",
      },
      {
        difficulty: "advanced",
        item: "倒空的乾淨塑膠瓶",
        detail: "瓶內已倒空，瓶身沒有明顯污漬。",
        category: "可回收物",
        action: gameActions.bottle,
        actions: [gameActions.bottle, gameActions.groceries, gameActions.handkerchief],
        reason: "乾淨容器通常可回收，瓶蓋等細節依所在地指引處理。",
        tip: "倒空後再查看當地對瓶蓋和標籤的說明。",
        mediaTitle: "塑膠瓶分類圖卡",
      },
    ],
  ),
];

const followUpReplies = {
  food: {
    text: "了解。把快吃完的食材放前面，或先安排一道剩菜料理，都很實用。",
    actions: [{ type: "micro", label: "整理一層冰箱" }, { type: "micro", label: "安排明天的一餐" }],
  },
  electricity: {
    text: "了解。從每天最常用的電器開始，會比較容易養成習慣。",
    actions: [{ type: "topic", value: "cooling", label: "看看冷氣小撇步" }, { type: "topic", value: "lighting", label: "看看照明習慣" }],
  },
  cooling: {
    text: "了解。先關好門窗，窗邊有日照時拉上窗簾，也能讓室內更舒服。",
    actions: [{ type: "micro", label: "搭配電風扇" }, { type: "micro", label: "白天拉上窗簾" }],
  },
  fridge: {
    text: "了解。常用食材放在前方，拿取更快，也比較不會忘記。",
    actions: [{ type: "micro", label: "把常用食材放前面" }, { type: "micro", label: "整理冰箱一層" }],
  },
  lighting: {
    text: "了解。白天多用自然光，離開空間時順手關燈就很不錯。",
    actions: [{ type: "micro", label: "白天拉開窗簾" }, { type: "micro", label: "離開時關一盞燈" }],
  },
  standby: {
    text: "了解。先整理不常用的充電器或影音設備，冰箱等設備維持運作即可。",
    actions: [{ type: "micro", label: "收好充電器" }, { type: "micro", label: "關閉影音設備" }],
  },
  laundry: {
    text: "了解。依衣物標示選洗程，天氣合適時自然晾乾也很方便。",
    actions: [{ type: "micro", label: "改用自然晾乾" }, { type: "micro", label: "選合適的洗衣模式" }],
  },
  cooking: {
    text: "了解。煮水只取需要的量，料理時蓋上鍋蓋，都是簡單的小習慣。",
    actions: [{ type: "micro", label: "煮水前量好用量" }, { type: "micro", label: "料理時蓋上鍋蓋" }],
  },
  waterHeating: {
    text: "了解。先備好洗澡用品，再慢慢找到舒服又不浪費熱水的節奏。",
    actions: [{ type: "micro", label: "先準備洗澡用品" }, { type: "micro", label: "縮短沖洗一點點" }],
  },
  disposable: {
    text: "了解。先準備最常用的一件，放在出門容易拿到的地方。",
    actions: [{ type: "micro", label: "帶上水壺" }, { type: "micro", label: "帶上購物袋" }],
  },
  dining: {
    text: "了解。先依照食量點餐，或帶上常用餐具，選一件就很好。",
    actions: [{ type: "micro", label: "依食量選餐" }, { type: "micro", label: "準備自己的餐具" }],
  },
  transport: {
    text: "了解。依照距離、天氣和安全狀況，挑一種自己方便的方式就好。",
    actions: [{ type: "micro", label: "安排順路的行程" }, { type: "micro", label: "走一小段路" }],
  },
  food_waste: {
    text: "可以呀，茶葉渣和菜葉通常也算廚餘。各地收運方式可能不同，記得看所在地公告。你還有哪種食材想確認嗎？",
    actions: [
      { type: "topic", value: "food_waste", label: "再問一種廚餘" },
      { type: "topic", value: "recycling", label: "看看資源回收" },
    ],
  },
};

const topicTurns = {};

const messages = document.getElementById("chatMessages");
const input = document.getElementById("messageInput");
const voiceButton = document.getElementById("voiceInput");
const voiceStatus = document.getElementById("voiceStatus");
const autoSpeakToggle = document.getElementById("autoSpeakToggle");
const gameStatus = document.getElementById("gameStatus");
const gameInvite = document.getElementById("gameInvite");
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let autoSpeak = false;
let textSize = 0;
let recognition = null;
let listening = false;
let voicePrefix = "";
let voiceTranscript = "";
let voiceConfidence = null;
let voiceHadError = false;
let pendingQuestionTopic = null;
const gameKnowledgeStorageKey = "greenbud-game-questions";

function timeNow() {
  return new Date().toLocaleTimeString("zh-TW", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function scrollToBottom() {
  window.requestAnimationFrame(() => {
    messages.scrollTo({
      top: messages.scrollHeight,
      behavior: "smooth",
    });
  });
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function addUserMessage(text) {
  const row = makeElement("article", "message-row user");
  const stack = makeElement("div", "message-stack");
  const bubble = makeElement("div", "bubble", text);
  const time = makeElement("time", "", timeNow());

  stack.append(bubble, time);
  row.appendChild(stack);
  messages.appendChild(row);
  scrollToBottom();
}

function createMediaCard(media) {
  const card = makeElement("section", "media-card");
  card.dataset.mediaType = media.type;
  card.setAttribute("aria-label", `${media.label}：${media.title}`);

  const icon = makeElement("span", "media-icon", media.type === "infographic" ? "▤" : "✦");
  icon.setAttribute("aria-hidden", "true");
  const content = makeElement("div", "media-content");
  content.append(
    makeElement("span", "media-label", media.label),
    makeElement("strong", "media-title", media.title),
    makeElement("p", "media-description", media.description),
  );
  card.append(icon, content);
  return card;
}

function createActionButtons(actions) {
  const group = makeElement("div", "message-actions");
  group.setAttribute("role", "group");
  group.setAttribute("aria-label", "可選擇的下一步");

  actions.forEach((action) => {
    const button = makeElement("button", "action-chip", action.label);
    button.type = "button";
    button.dataset.actionType = action.type;
    if (action.value) button.dataset.actionValue = action.value;
    group.appendChild(button);
  });
  return group;
}

function speak(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    voiceStatus.textContent = "這個瀏覽器不支援語音朗讀，可以繼續閱讀文字。";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = "zh-TW";
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

function addSpeakButton(stack, text) {
  const button = makeElement("button", "speak-button", "朗讀");
  button.type = "button";
  button.setAttribute("aria-label", "朗讀這則回覆");
  button.addEventListener("click", () => speak(text));
  const time = stack.querySelector("time");
  if (time) stack.insertBefore(button, time);
  else stack.appendChild(button);
}

function addAssistantMessage(reply) {
  const response = typeof reply === "string" ? { text: reply } : reply;
  pendingQuestionTopic = response.followUpTopic || null;
  const row = makeElement("article", "message-row assistant");
  const avatar = makeElement("div", "message-avatar");
  avatar.setAttribute("aria-hidden", "true");
  avatar.innerHTML = '<span class="mini-leaf mini-leaf-left"></span><span class="mini-leaf mini-leaf-right"></span>';

  const stack = makeElement("div", "message-stack");
  const bubble = makeElement("div", "bubble", response.text);
  const time = makeElement("time", "", timeNow());
  stack.appendChild(bubble);
  if (response.mediaCards?.length) {
    response.mediaCards.forEach((media) => stack.appendChild(createMediaCard(media)));
  }
  if (response.card) stack.appendChild(createMediaCard(response.card));
  if (response.media) stack.appendChild(createMediaCard(response.media));
  if (response.actions?.length) stack.appendChild(createActionButtons(response.actions));
  const spokenText = response.tts || response.text;
  addSpeakButton(stack, spokenText);
  stack.appendChild(time);
  row.append(avatar, stack);
  messages.appendChild(row);
  scrollToBottom();

  if (autoSpeak) speak(spokenText);
}

function getTopicReply(topic) {
  const replies = topicReplies[topic] || topicReplies.electricity;
  const turn = topicTurns[topic] || 0;
  topicTurns[topic] = turn + 1;
  return replies[turn % replies.length];
}

function getTopicForText(text) {
  if (/冷氣|空調|風扇|濾網/.test(text)) return "cooling";
  if (/冰箱|冷藏|冷凍/.test(text)) return "fridge";
  if (/燈泡|照明|燈|採光/.test(text)) return "lighting";
  if (/待機|插頭|插座|充電器|電源/.test(text)) return "standby";
  if (/洗衣|烘衣/.test(text)) return "laundry";
  if (/煮飯|煮水|料理|爐火|電鍋|烹調|洗碗|廚房/.test(text)) return "cooking";
  if (/洗澡|淋浴|熱水器|熱水/.test(text)) return "waterHeating";
  if (/交通|通勤|捷運|公車|開車|騎車/.test(text)) return "transport";
  if (/外食|餐廳|點餐|打包/.test(text)) return "dining";
  if (/一次性|餐具|保溫杯|購物袋|水壺|杯子|包裝/.test(text)) return "disposable";
  if (/食物|浪費|剩菜|剩飯|吃什麼|食材/.test(text)) return "food";
  if (/節能|節電|省電|用電|電費|耗電/.test(text)) return "electricity";
  return null;
}

function isQuestion(text) {
  return /[?？]|嗎|怎麼|如何|為什麼|哪個|哪一|什麼|多少|可以|請問|想知道/.test(text);
}

function isSmallAchievement(text) {
  return /沒拿|沒有拿|沒用|沒有用|少拿|少用|關(?:了|掉)?(?:燈|電器)(?:了)?|搭(?:了|乘)?(?:公車|捷運|大眾運輸)|自備|帶(?:了|上)(?:水壺|購物袋|餐具|保溫杯)?|完成(?:了)?|做到了|整理(?:好|了)|回收(?:好|了)|晾乾了/.test(text);
}

function getAchievementReply(topic, alsoTired = false) {
  const praise = {
    food: "食材成功出冰箱，今天少了一位失蹤人口，做得好！",
    cooling: "冷氣開得舒服又有留意習慣，這步很實在。",
    lighting: "順手關燈很棒，省電不用穿超人披風。",
    transport: "今天選擇大眾運輸很棒，路上也多一點自己的時間。",
    disposable: "自備用品很棒，包包今天升級成環保隊友。",
    laundry: "洗衣習慣有小調整，衣服和地球都收到你的心意。",
  }[topic] || "你已經把一個小想法變成行動，這就很棒。";
  const text = alsoTired
    ? `辛苦了，還順手做了一件小事，真的很不錯。先休息也可以，地球不會點名。`
    : `${praise}今天做到這裡就很夠了。`;
  const nextTopics = {
    food: [{ value: "food", label: "看看食材保存" }, { value: "dining", label: "聊聊外食減廢" }],
    cooling: [{ value: "lighting", label: "看看照明習慣" }, { value: "fridge", label: "看看冰箱省電" }],
    lighting: [{ value: "standby", label: "看看待機用電" }, { value: "cooling", label: "看看冷氣小撇步" }],
    transport: [{ value: "food", label: "看看食物減廢" }, { value: "electricity", label: "看看居家省電" }],
    disposable: [{ value: "dining", label: "聊聊外食減廢" }, { value: "food", label: "看看食材保存" }],
    laundry: [{ value: "waterHeating", label: "看看熱水習慣" }, { value: "standby", label: "看看待機用電" }],
  }[topic] || [
    { value: "electricity", label: "看看日常省電" },
    { value: "food", label: "看看食物減廢" },
  ];

  return {
    text,
    actions: nextTopics.map((item) => ({ type: "topic", ...item })),
  };
}

function getSortingItemReply(text) {
  let explanation;
  let title;
  let tip;

  if (/果皮|水果皮/.test(text) && /回收|分類|廚餘|垃圾/.test(text)) {
    title = "果皮怎麼分類";
    explanation = "不可以喔，果皮屬於廚餘，不是資源回收物。";
    tip = "各地廚餘收運方式可能不同，丟之前可以看看所在地公告。";
  } else if (/(茶葉|咖啡渣|菜葉|剩菜|剩飯)/.test(text) && /回收|分類|廚餘|垃圾/.test(text)) {
    title = "廚餘怎麼分類";
    explanation = "這類食物剩料通常屬於廚餘，不是一般資源回收物。";
    tip = "各地收運規定可能不同，記得依所在地公告處理。";
  } else if (/沾油|油漬|披薩盒|油污紙盒/.test(text)) {
    title = "沾油紙盒分類圖卡";
    explanation = "這題超多人容易搞混！油污會沾住紙纖維，通常不適合和乾淨紙類一起回收。";
    tip = "下次先看紙盒是否乾淨，再依所在地公告分類。";
  } else if (/面紙|紙巾/.test(text)) {
    title = "用過的面紙分類圖卡";
    explanation = "這個在生活裡真的很常讓人猶豫。用過的面紙通常不屬於乾淨可回收紙類。";
    tip = "先分清楚乾淨紙張和用過的紙巾。";
  } else if (/玻璃瓶|鋁罐|塑膠瓶/.test(text)) {
    title = "容器回收分類圖卡";
    explanation = "倒空、乾淨的容器通常可回收，瓶蓋等細節可能依所在地規定不同。";
    tip = "先倒空容器，再查看所在地的回收指引。";
  } else if (/菜葉|果皮|廚餘/.test(text)) {
    title = "蔬果剩料分類圖卡";
    explanation = "菜葉和果皮通常可依所在地的廚餘規則處理。";
    tip = "各地收運方式可能不同，記得看清潔隊公告。";
  } else {
    return null;
  }

  const isFoodWaste = /果皮|水果皮|茶葉|咖啡渣|菜葉|廚餘/.test(text);
  return {
    text: isFoodWaste
      ? `${explanation} ${tip}你平常還有哪種食材想確認怎麼分類嗎？`
      : `${explanation} ${tip}你還想了解容器回收，還是食物減廢？`,
    tts: `${explanation} ${tip}你還有其他食材想確認嗎？`,
    followUpTopic: isFoodWaste ? "food_waste" : undefined,
    media: infographic("分類解說小卡", title, tip),
    actions: [
      { type: "topic", value: isFoodWaste ? "food_waste" : "disposable", label: isFoodWaste ? "再問一種廚餘" : "容器與重複用品" },
      { type: "topic", value: isFoodWaste ? "recycling" : "food", label: isFoodWaste ? "看看資源回收" : "食材與廚餘" },
    ],
  };
}

function getLocalReply(text) {
  const trimmedText = text.trim();
  const topic = getTopicForText(trimmedText);
  const question = isQuestion(trimmedText);
  const achievement = isSmallAchievement(trimmedText);
  const tired = /累|忙|壓力|做不到|沒精神|不想做|好煩|挫折/.test(trimmedText);
  const sortingItemReply = getSortingItemReply(trimmedText);

  if (sortingItemReply) return sortingItemReply;

  if (/碳排|碳足跡|排放量|幾克|幾公斤|多少.*碳/.test(trimmedText)) {
    return {
      text: "我目前沒有可核對的排放資料，先不編精確數字。你想先聊省電，還是減少食物浪費？",
      actions: [
        { type: "topic", value: "electricity", label: "日常省電" },
        { type: "topic", value: "food", label: "食物減廢" },
      ],
    };
  }

  if (/回收|分類|材質/.test(trimmedText)) {
    return {
      text: "這題值得先確認所在地和物品材質。回收規定可能不同，我不想亂猜；你想補充材質，還是所在地？",
      actions: [
        { type: "input", value: "物品材質是：", label: "補充物品材質" },
        { type: "input", value: "我的所在地是：", label: "補充所在地" },
      ],
    };
  }

  if (tired) {
    if (achievement && !question) return getAchievementReply(topic, true);
    if (topic && question) {
      const topicReply = getTopicReply(topic);
      return {
        ...topicReply,
        text: `聽起來最近有點累，先照顧好自己也很重要。${topicReply.text}`,
      };
    }
    return {
      text: "聽起來最近有點累，先照顧好自己也很重要。永續不用硬撐，今天先休息也完全可以。",
      actions: [
        { type: "topic", value: "food", label: "看個輕鬆食材點子" },
        { type: "topic", value: "electricity", label: "看個省電小知識" },
      ],
    };
  }

  if (achievement && !question) return getAchievementReply(topic);
  if (achievement && question && topic) {
    const topicReply = getTopicReply(topic);
    return {
      ...topicReply,
      text: `${getAchievementReply(topic).text} ${topicReply.text}`,
    };
  }

  if (/^(嗨|哈囉|你好|您好|早安|午安|晚安|hello|hi)[！!。,. ]*$/i.test(trimmedText)) {
    return {
      text: "嗨，歡迎來聊天！我不考試，地球也不會點名。你今天想聊省電，還是食物減廢？",
      actions: [
        { type: "topic", value: "electricity", label: "日常省電" },
        { type: "topic", value: "food", label: "食物減廢" },
      ],
    };
  }

  if (/謝謝|感謝|多謝/.test(trimmedText) && !topic) {
    const nextTopic = pendingQuestionTopic || "electricity";
    return {
      text: "不客氣，能陪你找到順手的小改變就很好！想再看一個小撇步，還是先聊別的？",
      actions: [
        { type: "topic", value: nextTopic, label: "再看一個小撇步" },
        { type: "topic", value: "food", label: "換聊食物減廢" },
      ],
    };
  }

  if (/笑話|講笑話|笑一下/.test(trimmedText)) {
    return {
      text: "冰箱最怕什麼？門一直開著。它想說：我正在努力冷靜，快讓我關門！",
      actions: [
        { type: "topic", value: "fridge", label: "冰箱省電小知識" },
        { type: "topic", value: "cooling", label: "冷氣小撇步" },
      ],
    };
  }

  if (/你是誰|你叫什麼|你是做什麼/.test(trimmedText)) {
    return {
      text: "我是綠芽，陪你用輕鬆的方式聊永續生活。你想先聊居家省電，還是食材保存？",
      actions: [
        { type: "topic", value: "electricity", label: "居家省電" },
        { type: "topic", value: "food", label: "食材保存" },
      ],
    };
  }

  if (/心情好|好開心|很開心|今天開心/.test(trimmedText)) {
    return {
      text: "聽起來今天有好事，替你開心！想分享發生什麼，還是聊個輕鬆的生活小知識？",
      actions: [
        { type: "topic", value: "cooling", label: "來個省電小知識" },
        { type: "topic", value: "food", label: "聊聊食材保存" },
      ],
    };
  }

  if (/好熱|天氣熱|天氣悶/.test(trimmedText)) {
    return {
      text: "天氣熱真的很耗精神，先喝水休息。若開冷氣，關好門窗、搭配電風扇就很實用。你想看冷氣設定，還是遮陽小技巧？",
      actions: [
        { type: "topic", value: "cooling", label: "冷氣設定" },
        { type: "topic", value: "lighting", label: "遮陽與採光" },
      ],
    };
  }

  if (/下雨|雨天|晾衣/.test(trimmedText)) {
    return {
      text: "下雨天晾衣確實不方便，先用自己順手的方式就好。想減少烘衣，可以看看通風和衣物間距。你平常會用烘衣機嗎？",
      actions: [
        { type: "topic", value: "laundry", label: "洗衣省電" },
        { type: "topic", value: "waterHeating", label: "居家節能" },
      ],
    };
  }

  if (/好餓|肚子餓|想吃東西/.test(trimmedText)) {
    return {
      text: "先吃飽最重要！若家裡有快熟的食材，煮一份簡單料理也能順手用掉。想看剩菜料理，還是冰箱保存？",
      actions: [
        { type: "topic", value: "food", label: "剩菜料理點子" },
        { type: "topic", value: "fridge", label: "冰箱保存方法" },
      ],
    };
  }

  if (/無聊|想玩|玩遊戲/.test(trimmedText)) {
    return {
      text: "想找點輕鬆的嗎？可以玩一輪分類挑戰，或聽個省電小知識。你想先玩，還是先聊？",
      actions: [
        { type: "game", value: "regular", label: "進入分類遊戲" },
        { type: "topic", value: "electricity", label: "聽省電小知識" },
      ],
    };
  }

  if (/想吃什麼|你喜歡吃什麼/.test(trimmedText)) {
    return {
      text: "我不能真的吃東西，不過很會陪你想一餐！冰箱裡有什麼食材？我們來想個簡單又不浪費的搭配。",
      actions: [
        { type: "topic", value: "food", label: "食材保存" },
        { type: "topic", value: "dining", label: "外食減廢" },
      ],
    };
  }

  if (/減碳|永續|環保|節能/.test(trimmedText) && !topic) {
    return {
      text: "不用一次改變全部。從居家用電、日常交通或減少食物浪費，挑一件容易做的就好。你最想先聊哪個？",
      actions: [
        { type: "topic", value: "electricity", label: "居家用電" },
        { type: "topic", value: "transport", label: "日常交通" },
        { type: "topic", value: "food", label: "食物減廢" },
      ],
    };
  }

  if (topic) return getTopicReply(topic);

  if (/電影|追劇|看劇|音樂|運動|寵物|旅遊/.test(trimmedText)) {
    return {
      text: "聽起來你想聊聊日常，我可以陪你聊。你想分享最近的興趣，還是順便聽個生活節能小知識？",
      actions: [
        { type: "topic", value: "electricity", label: "生活節能小知識" },
        { type: "topic", value: "food", label: "食材保存小知識" },
      ],
    };
  }

  if (/你喜歡|你最愛|你覺得/.test(trimmedText)) {
    return {
      text: "我沒有自己的生活經驗，不過很樂意陪你一起想。你想聊日常習慣，還是找個輕鬆的減碳點子？",
      actions: [
        { type: "topic", value: "electricity", label: "找個省電點子" },
        { type: "topic", value: "food", label: "聊聊食材保存" },
      ],
    };
  }

  if (pendingQuestionTopic && followUpReplies[pendingQuestionTopic]) {
    return followUpReplies[pendingQuestionTopic];
  }

  return {
    text: "我怕猜錯你的意思，能再給我一點線索嗎？我可以陪你聊生活，也能一起找個簡單的永續小知識。",
    actions: [
      { type: "topic", value: "electricity", label: "日常省電" },
      { type: "topic", value: "food", label: "食材保存" },
    ],
  };
}

function retrieveFromKnowledgeBase(query, limit = 3) {
  const text = query.trim().toLowerCase();
  if (!text) return [];

  const exactId = KNOWLEDGE_BASE.find((doc) => text.includes(doc.id.toLowerCase()));
  return KNOWLEDGE_BASE
    .map((doc) => {
      const score = doc.keywords.reduce(
        (total, keyword) => total + (text.includes(keyword.toLowerCase()) ? keyword.length + 2 : 0),
        0,
      ) + (doc === exactId ? 100 : 0);
      return { doc, score };
    })
    .filter((match) => match.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map((match) => match.doc);
}

function withKnowledgeAssets(reply, references, text, tts) {
  const cards = [
    ...(reply.mediaCards || []),
    ...(references.length
      ? references.map((doc) => doc.card).filter(Boolean)
      : reply.media
        ? [reply.media]
        : []),
  ];
  const uniqueCards = [...new Map(
    cards.map((card) => [`${card.label}:${card.title}`, card]),
  ).values()];
  const { media, mediaCards, ...replyWithoutMedia } = reply;
  return {
    ...replyWithoutMedia,
    text,
    tts,
    actions: reply.actions || references[0]?.actions,
    mediaCards: uniqueCards,
  };
}

function getReply(text, selectedDoc = null) {
  const references = selectedDoc ? [selectedDoc] : retrieveFromKnowledgeBase(text);
  const localReply = selectedDoc
    ? {
      text: selectedDoc.content,
      tts: selectedDoc.tts,
      actions: selectedDoc.actions,
      followUpTopic: selectedDoc.id,
    }
    : getLocalReply(text);
  if (!references.length) return localReply;

  const document = references[0];
  return withKnowledgeAssets(
    localReply,
    references,
    localReply.text || document.content,
    localReply.tts || (selectedDoc ? selectedDoc.tts : document.tts),
  );
}

function askGreenBud(text, selectedDoc = null, delay = 240) {
  addUserMessage(text);
  window.setTimeout(() => {
    addAssistantMessage(getReply(text, selectedDoc));
  }, delay);
}

function launchGame(mode = "regular") {
  const gameQuestions = KNOWLEDGE_BASE.flatMap((doc) => (
    Array.isArray(doc.game) ? doc.game : []
  ));
  if (!gameQuestions.length) {
    gameStatus.textContent = "目前沒有可用的遊戲題目，請稍後再試。";
    return;
  }
  try {
    window.sessionStorage.setItem(gameKnowledgeStorageKey, JSON.stringify(gameQuestions));
  } catch (error) {
    console.error("Could not share the knowledge-base game questions.", error);
    gameStatus.textContent = "遊戲題庫無法載入，請重新整理頁面後再試。";
    return;
  }

  const gameUrl = new URL("game.html", window.location.href);
  if (mode === "advanced") gameUrl.searchParams.set("mode", "advanced");
  const gameTab = window.open(gameUrl.href, "_blank");
  if (gameTab) {
    gameInvite.hidden = true;
    gameStatus.textContent = "遊戲已開啟，完成後成績會回到聊天。";
  } else {
    gameStatus.textContent = "瀏覽器封鎖了新分頁，請允許彈出視窗後再試。";
  }
}

function isValidGameResultMessage(data) {
  if (data?.type !== "green-sorting-game-result") return false;
  const result = data.result;
  if (
    !result
    || !Number.isInteger(result.score)
    || result.score < 0
    || result.score > 10
    || result.total !== 10
    || !Array.isArray(result.answers)
    || result.answers.length !== 5
  ) {
    return false;
  }

  return result.answers.every((answer) => (
    answer
    && typeof answer.item === "string"
    && typeof answer.selectedCategory === "string"
    && typeof answer.correctCategory === "string"
    && typeof answer.selectedAction === "string"
    && typeof answer.correctAction === "string"
    && typeof answer.categoryCorrect === "boolean"
    && typeof answer.actionCorrect === "boolean"
    && typeof answer.reason === "string"
    && typeof answer.tip === "string"
  ));
}

function createGameResultReply(result) {
  const ratio = result.score / result.total;
  const title = ratio >= 0.9
    ? "分類減碳小達人"
    : ratio >= 0.6
      ? "綠色生活好夥伴"
      : "永續探索新芽";
  const incorrect = result.answers.filter(
    (answer) => !answer.categoryCorrect || !answer.actionCorrect,
  );
  const correctCount = result.answers.length - incorrect.length;
  const text = incorrect.length
    ? `謝謝你完成挑戰！你得到${result.score}分，稱號是「${title}」。我把${incorrect.length}題的小撇步整理在下方。你想再挑戰進階題，還是看看日常減碳？`
    : `太棒了！你得到${result.score}分，稱號是「${title}」，${correctCount}題都配對成功。你想再挑戰進階題，還是看看日常減碳？`;

  const mediaCards = incorrect.map((answer) => {
    const details = [];
    if (!answer.categoryCorrect) {
      details.push(`你選了${answer.selectedCategory}，參考分類是${answer.correctCategory}。`);
    }
    if (!answer.actionCorrect) {
      details.push(`減碳配對可選「${answer.correctAction}」。`);
    }
    details.push(answer.reason, `下次小撇步：${answer.tip}`);
    return {
      type: "infographic",
      label: "分類與減碳解說圖卡",
      title: answer.item,
      description: details.join(" "),
    };
  });

  return {
    text,
    mediaCards,
    actions: [
      { type: "game", value: "advanced", label: "再挑戰進階題" },
      { type: "topic", value: "electricity", label: "看看日常減碳" },
    ],
  };
}

function handleAction(button) {
  const actionType = button.dataset.actionType;
  const actionValue = button.dataset.actionValue;
  const label = button.textContent;

  if (actionType === "game") {
    addUserMessage(label);
    launchGame(actionValue === "advanced" ? "advanced" : "regular");
    return;
  }

  if (actionType === "input") {
    input.value = actionValue;
    input.focus();
    setVoiceStatus("補上資訊後送出，我再接著幫你看。");
    return;
  }

  const selectedDoc = actionType === "topic"
    ? KNOWLEDGE_BASE.find((doc) => doc.id === actionValue)
    : null;
  askGreenBud(label, selectedDoc || null);
}

document.getElementById("enterGame").addEventListener("click", () => launchGame());

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin || event.source === window) return;
  if (!isValidGameResultMessage(event.data)) return;

  gameInvite.hidden = true;
  gameStatus.textContent = "遊戲成績回來囉，綠芽已整理好鼓勵和錯題提示。";
  addAssistantMessage(createGameResultReply(event.data.result));
});

function setVoiceStatus(text) {
  voiceStatus.textContent = text;
}

function updateVoiceButton() {
  voiceButton.classList.toggle("is-recording", listening);
  voiceButton.setAttribute("aria-pressed", String(listening));
  voiceButton.title = listening ? "正在聆聽，放開結束" : "按住說話";
}

function startVoiceInput() {
  if (!recognition) {
    setVoiceStatus("此瀏覽器不支援語音輸入，請直接打字。");
    return;
  }
  if (listening) return;

  voicePrefix = input.value.trim();
  voiceTranscript = "";
  voiceConfidence = null;
  voiceHadError = false;
  try {
    recognition.start();
    listening = true;
    updateVoiceButton();
    setVoiceStatus("正在聆聽，說完後放開麥克風。");
  } catch (error) {
    if (error instanceof DOMException && error.name === "InvalidStateError") {
      setVoiceStatus("語音輸入正在啟動，請稍後再試。");
      return;
    }
    setVoiceStatus("無法啟動麥克風，請檢查權限或改用文字輸入。");
  }
}

function stopVoiceInput() {
  if (recognition && listening) recognition.stop();
}

function setupSpeechRecognition() {
  if (!speechRecognition) return;

  recognition = new speechRecognition();
  recognition.lang = "zh-TW";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onresult = (event) => {
    let transcript = "";
    for (let index = 0; index < event.results.length; index += 1) {
      const result = event.results[index];
      transcript += result[0].transcript;
      if (result.isFinal) {
        voiceTranscript = result[0].transcript.trim();
        voiceConfidence = result[0].confidence;
      }
    }

    input.value = [voicePrefix, transcript.trim()].filter(Boolean).join(" ");
    setVoiceStatus("已轉成文字，可以檢查或修改後送出。");
  };

  recognition.onerror = (event) => {
    voiceHadError = true;
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      setVoiceStatus("麥克風未獲得許可，請檢查瀏覽器設定。");
    } else if (event.error === "no-speech") {
      setVoiceStatus("沒有聽到語音，再試一次或直接打字。");
    } else {
      setVoiceStatus("語音輸入暫時無法使用，請改用文字輸入。");
    }
  };

  recognition.onend = () => {
    listening = false;
    updateVoiceButton();
    if (voiceHadError) return;

    if (voiceTranscript && Number.isFinite(voiceConfidence) && voiceConfidence < 0.5) {
      setVoiceStatus("這段語音可能不太清楚，請選一個方向確認。");
      addAssistantMessage({
        text: "我可能沒有聽清楚。你想問食材保存，還是居家省電呢？",
        actions: [
          { type: "topic", value: "food", label: "食材保存" },
          { type: "topic", value: "electricity", label: "居家省電" },
        ],
      });
    } else if (voiceTranscript) {
      setVoiceStatus("語音已轉成文字，可以檢查或修改後送出。");
    } else {
      setVoiceStatus("按住麥克風說話；聚焦後按 Enter 開關語音");
    }
  };
}

document.querySelectorAll(".quick-chips button").forEach((button) => {
  button.addEventListener("click", () => {
    const doc = KNOWLEDGE_BASE.find((entry) => entry.id === button.dataset.topic);
    if (!doc) {
      setVoiceStatus("這個主題找不到對應資料，請重新整理後再試。");
      return;
    }
    askGreenBud(button.textContent, doc);
  });
});

messages.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action-type]");
  if (button) handleAction(button);
});

document.getElementById("messageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addUserMessage(text);
  input.value = "";
  input.focus();
  window.setTimeout(() => addAssistantMessage(getReply(text)), 320);
});

const voicePointer = { id: null };
voiceButton.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  event.preventDefault();
  voicePointer.id = event.pointerId;
  voiceButton.setPointerCapture(event.pointerId);
  startVoiceInput();
});

function releaseVoicePointer(event) {
  if (voicePointer.id !== event.pointerId) return;
  voicePointer.id = null;
  stopVoiceInput();
}

voiceButton.addEventListener("pointerup", releaseVoicePointer);
voiceButton.addEventListener("pointercancel", releaseVoicePointer);
voiceButton.addEventListener("lostpointercapture", releaseVoicePointer);
voiceButton.addEventListener("click", (event) => {
  if (event.detail !== 0) return;
  if (listening) stopVoiceInput();
  else startVoiceInput();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") stopVoiceInput();
});

document.getElementById("fontSmaller").addEventListener("click", () => {
  textSize = Math.max(-1, textSize - 1);
  document.body.style.setProperty("--chat-font-size", `${14 + textSize * 2}px`);
});

document.getElementById("fontLarger").addEventListener("click", () => {
  textSize = Math.min(2, textSize + 1);
  document.body.style.setProperty("--chat-font-size", `${14 + textSize * 2}px`);
});

document.getElementById("contrastToggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const enabled = document.body.classList.toggle("high-contrast");
  button.setAttribute("aria-pressed", String(enabled));
});

autoSpeakToggle.addEventListener("click", () => {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    setVoiceStatus("此瀏覽器不支援語音朗讀，可以繼續閱讀文字。");
    return;
  }

  autoSpeak = !autoSpeak;
  autoSpeakToggle.setAttribute("aria-pressed", String(autoSpeak));
  autoSpeakToggle.title = autoSpeak ? "已開啟自動朗讀" : "自動朗讀";
  if (!autoSpeak) window.speechSynthesis.cancel();
});

document.querySelectorAll(".message-row.assistant").forEach((row) => {
  const bubble = row.querySelector(".bubble");
  addSpeakButton(row.querySelector(".message-stack"), bubble.textContent.trim());
});

setupSpeechRecognition();

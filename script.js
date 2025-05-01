// 道歉文句庫
const apologyPhrases = {
    opening: [
        "對不起，",
        "很抱歉，",
        "非常抱歉，",
        "真的非常對不起，",
        "請原諒我，",
        "萬分抱歉，",
        "請容我深深地道歉，",
        "我誠摯地道歉，",
        "我必須為此鄭重道歉，",
        "請讓我向您致上最深的歉意，"
    ],
    explanation: [
        "因為我的疏忽，",
        "由於我的不小心，",
        "因為我考慮不周，",
        "由於我的過失，",
        "因為我的輕率行為，",
        "由於我的判斷失誤，",
        "因為我一時的衝動，",
        "由於我的思慮不夠周全，",
        "因為我沒有站在您的角度思考，",
        "由於我的專業不足，",
        "因為我的溝通不夠清楚，",
        "由於我工作態度不夠謹慎，"
    ],
    consequence: [
        "這導致了不良的後果，",
        "造成了無法挽回的損失，",
        "引發了諸多不便，",
        "帶來了困擾，",
        "產生了負面影響，",
        "讓大家陷入了困境，",
        "造成了嚴重的誤解，",
        "使工作進度受到影響，",
        "讓團隊蒙受損失，",
        "影響了公司的聲譽，"
    ],
    emotion: {
        light: [
            "我感到有些歉意。",
            "希望您能諒解。",
            "下次我會更加注意。",
            "我理解這可能造成您的不便。",
            "我認識到自己的不足之處。",
            "這確實是我需要改進的地方。",
            "我會認真檢討這個問題。"
        ],
        medium: [
            "我感到十分愧疚。",
            "我真的感到非常抱歉。",
            "我會記取這次的教訓。",
            "這件事讓我深感自責。",
            "我為自己的行為感到慚愧。",
            "我完全理解您的失望之處。",
            "這次的經驗讓我深刻反省。",
            "我明白自己犯了重大的錯誤。"
        ],
        heavy: [
            "我為此感到萬分羞愧。",
            "我深感自責和懊悔。",
            "這件事讓我徹夜難眠。",
            "我對自己的行為感到極度痛心。",
            "這是我職業生涯中最大的恥辱。",
            "我完全無法原諒自己的過失。",
            "這個錯誤讓我感到無地自容。",
            "我願意承擔一切後果。"
        ],
        extreme: [
            "我願意負起所有責任。",
            "這是我一生中最後悔的事情。",
            "我發誓這種事情絕對不會再發生。",
            "我願意付出任何代價來彌補。",
            "如果可以重來，我一定會做出不同的選擇。",
            "這個錯誤將永遠刻印在我的記憶中。",
            "我已經深深認識到自己的重大過失。",
            "這件事將成為我人生中最慘痛的教訓。"
        ]
    },
    promise: {
        light: [
            "我會改進的。",
            "希望能給我一個改過的機會。",
            "我會努力避免類似事情發生。",
            "這將成為我成長的機會。",
            "我會以此為戒，謹慎行事。"
        ],
        medium: [
            "我保證會改善這個問題。",
            "我一定會檢討並改進。",
            "我會制定具體的改進計畫。",
            "我承諾會做出實質的改變。",
            "我會加強相關領域的學習和訓練。",
            "我會建立更好的工作流程。"
        ],
        heavy: [
            "我會痛定思痛，徹底改變。",
            "我發誓會用行動來彌補這個錯誤。",
            "我將投入加倍的努力來重建信任。",
            "我會完全改變自己的工作方式。",
            "我願意接受任何形式的懲處。",
            "我會以百分之兩百的努力來彌補。"
        ],
        extreme: [
            "我願意付出任何代價來彌補這個過失。",
            "從今以後，我將徹底改變自己。",
            "我發誓這將是最後一次犯這樣的錯誤。",
            "我會用餘生的時間來彌補這個過失。",
            "我願意承擔一切可能的後果。",
            "我保證將徹底革新自己的一切。"
        ]
    },
    closing: {
        light: [
            "再次為此表示歉意。",
            "希望您能給予寬恕。",
            "期待能有改過的機會。"
        ],
        medium: [
            "請給我一個改過自新的機會。",
            "懇請您的原諒與理解。",
            "希望能獲得您的諒解。"
        ],
        heavy: [
            "請讓我有機會彌補這個錯誤。",
            "懇請給予改過的機會。",
            "期待能重新獲得您的信任。"
        ],
        extreme: [
            "懇請給予一次贖罪的機會。",
            "願以實際行動證明我的悔意。",
            "懇求您的原諒與指導。"
        ]
    },
    emotional_blackmail: {
        light: [
            "我知道您一直都是個寬容的人 (｡•́︿•̀｡)",
            "想到您可能會因此不開心，我心裡非常難過 (╥﹏╥)",
            "您一直都那麼信任我，我卻讓您失望了 ˚‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚",
            "我真的不想失去您的友誼 (◞‸◟)",
            "希望您不會因此而討厭我 ( ͒˃̩̩⌂˂̩̩ ͒)",
            "每次想到這件事就覺得自己很沒用 (｡•́︿•̀｡)",
            "我真的很害怕您會生氣 (＞人＜;)"
        ],
        medium: [
            "每當想到這件事，我就徹夜難眠，胃口全無 (︶︹︺)",
            "我真的很珍惜我們之間的關係，請不要因此而疏遠我 (╥_╥)",
            "想到您可能會因此對我改觀，我就感到無比痛苦 ( ˃̣̣̥ω˂̣̣̥ )",
            "我已經好幾天吃不下飯，睡不好覺了 (｡•́︿•̀｡)",
            "這幾天我的身體狀況都不太好，都是因為太過自責 ( ⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)",
            "想到自己的過錯，我就忍不住淚流滿面 (╥﹏╥)",
            "我真的很害怕失去您這個重要的人 (˚ ˃̣̣̥⌓˂̣̣̥ )"
        ],
        heavy: [
            "我已經連續幾天都在為這件事痛哭，無法原諒自己 (;´༎ຶД༎ຶ`)",
            "如果您無法原諒我，我真的不知道該如何繼續下去 ( ˃̣̣̥᷄⌓˂̣̣̥᷅ )",
            "這幾天我的身心狀態都非常糟糕，甚至需要尋求醫療協助 (╯︵╰,)",
            "想到可能會失去您的信任，我就感到生不如死 (´;ω;｀)",
            "我寧願承受任何懲罰，也不要失去您的友誼 ( ˃̣̣̥᷄︵˂̣̣̥᷅ )",
            "沒有您的諒解，我可能會一直活在痛苦中 (｡•́︿•̀｡)",
            "這幾天我都無法好好工作，整個人都恍恍惚惚的 (´;︵;`)"
        ],
        extreme: [
            "如果您不能原諒我，我真的不知道自己是否還有活下去的意義 (╯︵〒﹏〒)",
            "這幾天我完全無法正常生活，甚至產生了極端的想法 (´;︵;｀)",
            "沒有您的原諒，我可能會做出一些無法挽回的事 (ㄒ﹏ㄒ)",
            "您的原諒對我來說比生命還重要，請您大發慈悲 (｡•́︿•̀｡)",
            "我已經好幾天沒有好好吃飯睡覺了，整個人都快崩潰了 (╥﹏╥)",
            "我寧願一輩子受苦，也不要失去您的信任 (´;︵;｀)",
            "沒有您的原諒，我的人生就失去了所有色彩 (｡•́︿•̀｡)"
        ]
    },
    self_reflection: {
        light: [
            "這件事讓我深深反省自己的不足 (｡•́︿•̀｡)",
            "我真的很後悔當時的決定 (╥﹏╥)",
            "想到自己的過失，我就感到慚愧 (◞‸◟)",
            "每當回想起來，我就恨不得給自己一巴掌 (｡•́︿•̀｡)",
            "我真的覺得自己很差勁 (╥_╥)"
        ],
        medium: [
            "我完全理解自己犯了多麼嚴重的錯誤 (´;ω;｀)",
            "這幾天我一直在反省自己的所作所為 (｡•́︿•̀｡)",
            "我真的很痛恨這樣不成熟的自己 (╥﹏╥)",
            "我對自己的行為感到無地自容 (´;︵;｀)",
            "每次想起來就覺得自己很沒用 (｡•́︿•̀｡)"
        ],
        heavy: [
            "我恨不得能回到過去阻止自己犯下這個錯誤 (´;︵;｀)",
            "這件事讓我對自己徹底失望 (;´༎ຶД༎ຶ`)",
            "我實在無法原諒這樣失格的自己 (╥﹏╥)",
            "我真的很討厭現在的自己 (｡•́︿•̀｡)",
            "我覺得自己完全不配得到原諒 (´;ω;｀)"
        ],
        extreme: [
            "我對自己的所作所為感到極度厭惡 (╯︵〒﹏〒)",
            "我真的配不上您對我的信任 (´;︵;｀)",
            "我這種人根本不配得到原諒 (｡•́︿•̀｡)",
            "我恨不得能把自己埋起來 (╥﹏╥)",
            "我真的很後悔自己的存在 (;´༎ຶД༎ຶ`)"
        ]
    },
    guilt_trip: {
        light: [
            "我知道您一向都是個善解人意的人 (◕︿◕)",
            "希望您能給我一個贖罪的機會 (｡•́︿•̀｡)",
            "請相信我的悔意是真誠的 (╥﹏╥)",
            "我真的不想失去這份珍貴的情誼 (⋟﹏⋞)",
            "沒有您的諒解，我會很難過的 (｡•́︿•̀｡)"
        ],
        medium: [
            "我知道自己可能永遠無法彌補這個過錯 (｡•́︿•̀｡)",
            "您的原諒對我來說意義重大 ( ˃̣̣̥᷄⌓˂̣̣̥᷅ )",
            "沒有您的諒解，我真的很難繼續前進 (╥﹏╥)",
            "想到您可能會因此討厭我，我就心如刀割 (｡•́︿•̀｡)",
            "您的一句話就能決定我的喜怒哀樂 (╥_╥)"
        ],
        heavy: [
            "您的原諒是我唯一的救贖 (｡•́︿•̀｡)",
            "如果您能原諒我，我願意做任何事 (´;︵;｀)",
            "我知道自己不配，但還是懇請您的原諒 (╥﹏╥)",
            "想到您可能會恨我，我就痛不欲生 (｡•́︿•̀｡)",
            "沒有您的原諒，我會後悔一輩子 (´;ω;｀)"
        ],
        extreme: [
            "沒有您的原諒，我的人生就失去了意義 (╯︵〒﹏〒)",
            "我寧願承受任何懲罰，也不要失去您的信任 (´;︵;｀)",
            "您就當可憐可憐我吧 (｡•́︿•̀｡)",
            "我已經後悔到想要消失了 (╥﹏╥)",
            "沒有您的寬恕，我可能會崩潰的 (;´༎ຶД༎ຶ`)"
        ]
    },
    detailed_explanation: {
        light: [
            "這件事情發生的當下，我就意識到自己犯了一個錯誤。我本應該更加謹慎地處理這個情況，",
            "回想整個事件的經過，我深深地明白到自己的處理方式存在諸多不當之處，",
            "事後仔細思考這整件事情的來龍去脈，我發現自己的決定過於倉促，"
        ],
        medium: [
            "這次的事件讓我深刻體會到自己在專業判斷上的不足。在經過深入的反省後，我發現，",
            "整件事情的發展遠超出我的預期，而這完全是因為我的判斷失誤所致。現在回想起來，",
            "這次的錯誤讓我徹底認識到自己的不足。經過這幾天的深刻反思，我明白，"
        ],
        heavy: [
            "這個重大的過失讓我徹底認識到自己的無知與魯莽。經過這幾天的痛苦反省，我不得不承認，",
            "這次的嚴重失誤，讓我完全看清了自己的不足與短處。經過日日夜夜的自責與懺悔，",
            "這個錯誤的嚴重性遠超出我最初的認知。經過深刻的自我審視與反省，"
        ],
        extreme: [
            "這個無可原諒的過失，讓我陷入了前所未有的自責與懊悔之中。經過日日夜夜的懺悔與反省，",
            "這次的重大事故，徹底摧毀了我一直以來努力建立的一切。在無數個輾轉難眠的夜晚後，",
            "這個嚴重的錯誤幾乎讓我崩潰。在經過漫長的自我譴責與深刻反省之後，"
        ]
    },
    impact_description: {
        light: [
            "這不僅影響了工作的進度，更讓團隊的其他成員必須額外付出心力來彌補。",
            "這樣的疏忽不只造成了時間的浪費，還讓其他同仁必須重新安排工作計畫。",
            "這個失誤不僅延誤了原定的時程，還增加了團隊的工作負擔。"
        ],
        medium: [
            "這樣的錯誤不僅嚴重影響了專案的進展，更讓團隊的聲譽受到了質疑，同時也讓客戶對我們的專業能力產生了懷疑。",
            "這個疏失不只造成了重大的時間浪費，更讓公司必須投入額外的人力物力來進行補救，這完全是我的責任。",
            "這次的失誤不僅讓專案進度大幅落後，更讓團隊必須承受巨大的壓力，這些都是因為我的不負責任所造成的。"
        ],
        heavy: [
            "這個重大過失不僅造成了難以估計的損失，更嚴重影響了公司的商譽，讓多年來建立的信任在一夕之間化為烏有。",
            "這次的嚴重失誤不只帶來了巨大的經濟損失，更讓公司在業界的地位受到嚴重打擊，這一切都是我咎由自取。",
            "這樣的錯誤不僅造成了無法挽回的損失，更讓公司在客戶心中的形象嚴重受損，這完全是我的過錯。"
        ],
        extreme: [
            "這個致命的錯誤不僅造成了前所未有的巨大損失，更讓公司陷入了創立以來最嚴峻的信任危機，這一切都是我無可推卸的責任。",
            "這次的重大過失不只讓公司蒙受了難以估計的損失，更讓多年來辛苦建立的品牌形象毀於一旦，我對此深感痛心與自責。",
            "這個不可原諒的錯誤不僅帶來了災難性的後果，更讓公司在業界的聲譽受到了致命的打擊，我願意承擔一切後果。"
        ]
    }
};

// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', () => {
    // DOM 元素
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resultDiv = document.getElementById('result');
    const nameInput = document.getElementById('name');
    const reasonInput = document.getElementById('reason');
    const incidentInput = document.getElementById('incident');
    const levelSelect = document.getElementById('level');

    // 隨機選擇陣列中的一個元素
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // 計算字數的函數
    function countWords(text) {
        // 移除空白字符和標點符號後計算字數
        const cleanText = text.replace(/[，。、！？：；「」『』（）\s]/g, '');
        return cleanText.length;
    }

    // 生成道歉文
    function generateApology() {
        const name = nameInput.value.trim() || '我';
        const reason = reasonInput.value.trim() || '的疏忽';
        const incident = incidentInput.value.trim() || '這件事';
        const level = levelSelect.value;

        // 確保每次生成的文字都超過 250 字
        let attempts = 0;
        let apology = '';
        
        do {
            apology = `${getRandomElement(apologyPhrases.opening)}

因為我${name}${reason}，${getRandomElement(apologyPhrases.consequence)}造成了${incident}。

${getRandomElement(apologyPhrases.detailed_explanation[level])}${getRandomElement(apologyPhrases.impact_description[level])}

${getRandomElement(apologyPhrases.emotion[level])}
${getRandomElement(apologyPhrases.emotional_blackmail[level])}
${getRandomElement(apologyPhrases.self_reflection[level])}

${getRandomElement(apologyPhrases.promise[level])}
${getRandomElement(apologyPhrases.guilt_trip[level])}

${getRandomElement(apologyPhrases.closing[level])}

此致
敬上

${name}
${new Date().toLocaleDateString('zh-TW')}`;

            attempts++;
        } while (countWords(apology) < 250 && attempts < 5);

        // 顯示結果和字數
        resultDiv.style.display = 'block';
        resultDiv.classList.add('animated');
        resultDiv.textContent = apology;
        
        const wordCountDiv = document.getElementById('wordCount');
        const wordCountNumber = document.getElementById('wordCountNumber');
        wordCountDiv.style.display = 'block';
        wordCountNumber.textContent = countWords(apology);
        
        copyBtn.style.display = 'inline-block';
    }

    // 複製文字功能
    async function copyText() {
        try {
            await navigator.clipboard.writeText(resultDiv.textContent);
            showCopySuccess();
        } catch (err) {
            alert('複製失敗，請手動複製');
        }
    }

    // 顯示複製成功提示
    function showCopySuccess() {
        const notification = document.createElement('div');
        notification.className = 'copy-success';
        notification.textContent = '複製成功！';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    // 事件監聽
    generateBtn.addEventListener('click', generateApology);
    copyBtn.addEventListener('click', copyText);

    // 按 Enter 鍵也可以生成
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateApology();
        }
    });
});
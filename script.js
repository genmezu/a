const apologyPhrases = {
    opening: [
        "親愛的，",
        "寶貝，對不起，",
        "亲爱的，真的很抱歉，",
        "我最親愛的朋友，",
        "我最重要的人，",
        "最親愛的你，",
        "亲愛的，請原諒我，",
        "我最摯愛的人，",
        "我最在乎的你，",
        "摯友，請聽我說，"
    ],
    explanation: [
        "因為我的任性，",
        "因為我的固執，",
        "因為我的不體貼，",
        "因為我沒有顧及你的感受，",
        "因為我的自私，",
        "因為我太過衝動，",
        "因為我的不成熟，",
        "因為我的誤解，",
        "因為我的口無遮攔，",
        "因為我沒有站在你的角度想，",
        "因為我的不懂事，",
        "因為我的情緒化，"
    ],
    consequence: [
        "傷害了你的心，",
        "讓你傷心難過了，",
        "讓你感到失望，",
        "破壞了我們之間的信任，",
        "讓你感到被背叛，",
        "讓你一個人承受這些，",
        "讓你承受了這麼多委屈，",
        "讓你感到不被重視，",
        "讓你感到被忽視，",
        "讓你感到寂寞了，"
    ],
    emotion: {
        light: [
            "我真的很想好好補償你 (｡•́︿•̀｡)",
            "希望你能給我一個機會說明 (╥﹏╥)",
            "我真的不想失去你 (｡•́︿•̀｡)",
            "我保證不會再犯同樣的錯誤了 (◞‸◟)",
            "沒有你我真的不行 (╥_╥)",
            "你對我來說真的很重要 (｡•́︿•̀｡)"
        ],
        medium: [
            "想到你因為我而哭泣，我的心都碎了 (´;ω;｀)",
            "沒有你的日子，我真的很難熬 (╥﹏╥)",
            "我知道我很笨，但請給我一個機會 (｡•́︿•̀｡)",
            "我真的很後悔傷害了你的心 (´;︵;｀)",
            "你的眼淚就像刀子一樣刺痛我的心 (╥﹏╥)",
            "我發誓再也不會讓你難過了 (｡•́︿•̀｡)"
        ],
        heavy: [
            "失去你的感覺比失去生命還痛苦 (;´༎ຶД༎ຶ`)",
            "沒有你的世界對我來說沒有任何意義 (╥﹏╥)",
            "我寧願承受一切痛苦，也不要失去你 (´;ω;｀)",
            "這幾天我一直以淚洗面 (｡•́︿•̀｡)",
            "想到你可能會離開我，我就痛不欲生 (╯︵╰,)",
            "我真的很害怕會永遠失去你 (´;︵;｀)"
        ],
        extreme: [
            "沒有你，我的人生就像失去了靈魂 (;´༎ຶД༎ຶ`)",
            "我願意用餘生來彌補你 (╥﹏╥)",
            "失去你的愛，我寧願消失在這個世界上 (｡•́︿•̀｡)",
            "我發誓這輩子都不會再讓你掉一滴眼淚 (´;ω;｀)",
            "我願意付出一切代價換取你的原諒 (;´༎ຶД༎ຶ`)",
            "沒有你的原諒，我的生命就沒有了色彩 (╥﹏╥)"
        ]
    },
    self_reflection: {
        light: [
            "我知道我很幼稚 (｡•́︿•̀｡)",
            "我承認我太衝動了 (╥﹏╥)",
            "我真的很懊悔自己的行為 (◞‸◟)",
            "我應該更成熟一點的 (｡•́︿•̀｡)",
            "我知道我做錯了 (╥_╥)"
        ],
        medium: [
            "我真的很討厭這樣的自己 (´;ω;｀)",
            "我恨不得給自己一巴掌 (｡•́︿•̀｡)",
            "我真的為自己的行為感到羞愧 (╥﹏╥)",
            "我知道我很笨，但我真的很愛你 (´;︵;｀)",
            "我不應該這樣傷害你的心 (｡•́︿•̀｡)"
        ],
        heavy: [
            "我真的很恨這樣不懂事的自己 (´;︵;｀)",
            "我對自己的所作所為感到噁心 (;´༎ຶД༎ຶ`)",
            "我真的配不上你的愛 (╥﹏╥)",
            "我是個不稱職的戀人/朋友 (｡•́︿•̀｡)",
            "我真的很痛恨現在的自己 (´;ω;｀)"
        ],
        extreme: [
            "我真的不配擁有你的愛 (╯︵〒﹏〒)",
            "我是世界上最糟糕的人 (´;︵;｀)",
            "我真的很後悔傷害了最愛的你 (｡•́︿•̀｡)",
            "我這種人根本不配得到幸福 (╥﹏╥)",
            "沒有你的原諒，我會後悔一輩子 (;´༎ຶД༎ຶ`)"
        ]
    },
    promise: {
        light: [
            "我答應你會改變的 (｡•́︿•̀｡)",
            "我會努力成為更好的人 (╥﹏╥)",
            "請給我一個證明自己的機會 (◞‸◟)",
            "我保證會好好珍惜你 (｡•́︿•̀｡)",
            "我會更加關心你的感受 (╥_╥)"
        ],
        medium: [
            "我發誓再也不會讓你傷心 (´;ω;｀)",
            "我願意改變一切來挽回你 (｡•́︿•̀｡)",
            "我保證會成為一個更好的人 (╥﹏╥)",
            "這次你原諒我，我一定會加倍對你好 (´;︵;｀)",
            "我會用行動證明我的心意 (｡•́︿•̀｡)"
        ],
        heavy: [
            "從今以後我的人生只為你而活 (´;︵;｀)",
            "我願意用一生的時間來彌補你 (;´༎ຶД༎ຶ`)",
            "沒有什麼比你更重要了 (╥﹏╥)",
            "我發誓這是最後一次讓你傷心 (｡•́︿•̀｡)",
            "我會用盡一切方法讓你重新信任我 (´;ω;｀)"
        ],
        extreme: [
            "你就是我的全世界，沒有你我活不下去 (╯︵〒﹏〒)",
            "我願意付出所有，只求你的原諒 (´;︵;｀)",
            "這輩子我只想好好愛你一個人 (｡•́︿•̀｡)",
            "我發誓這是我這輩子最後一次傷害你 (╥﹏╥)",
            "如果你願意原諒我，我願意為你做任何事 (;´༎ຶД༎ຶ`)"
        ]
    },
    guilt_trip: {
        light: [
            "我知道你最善良了 (◕︿◕)",
            "你一向都最疼我了，對吧？ (｡•́︿•̀｡)",
            "你不會真的捨得離開我吧？ (╥﹏╥)",
            "沒有你，我真的不知道該怎麼辦 (⋟﹏⋞)",
            "你是我最重要的人啊 (｡•́︿•̀｡)"
        ],
        medium: [
            "這幾天我都睡不著、吃不下 (｡•́︿•̀｡)",
            "我的心好痛，感覺快要窒息了 ( ˃̣̣̥᷄⌓˂̣̣̥᷅ )",
            "沒有你的日子，我過得好辛苦 (╥﹏╥)",
            "我真的好想你，每分每秒都在想你 (｡•́︿•̀｡)",
            "我現在的樣子好可憐，你捨得嗎？ (╥_╥)"
        ],
        heavy: [
            "沒有你，我的世界就失去了所有顏色 (｡•́︿•̀｡)",
            "我感覺自己快要崩潰了 (´;︵;｀)",
            "我真的好痛苦，求求你原諒我 (╥﹏╥)",
            "你的冷漠快要把我逼瘋了 (｡•́︿•̀｡)",
            "我寧願你打我罵我，也不要這樣對我 (´;ω;｀)"
        ],
        extreme: [
            "如果你真的離開我，我真的會瘋掉的 (╯︵〒﹏〒)",
            "沒有你，我寧願選擇離開這個世界 (´;︵;｀)",
            "我已經快要撐不下去了，求求你 (｡•́︿•̀｡)",
            "你忍心看著我這樣痛苦嗎？ (╥﹏╥)",
            "如果你不原諒我，我真的不知道自己會做出什麼事 (;´༎ຶД༎ຶ`)"
        ]
    },
    closing: {
        light: [
            "我真的很愛你 (｡•́︿•̀｡)",
            "請你再信任我一次好嗎？ (╥﹏╥)",
            "給我一個機會好嗎？ (◞‸◟)"
        ],
        medium: [
            "我的心裡永遠只有你一個 (｡•́︿•̀｡)",
            "沒有你我真的不行 (╥﹏╥)",
            "請不要離開我好嗎？ (´;ω;｀)"
        ],
        heavy: [
            "你是我生命中最重要的人 (;´༎ຶД༎ຶ`)",
            "我願意用一切換取你的原諒 (╥﹏╥)",
            "求求你再給我一次機會 (｡•́︿•̀｡)"
        ],
        extreme: [
            "我的生命因你而完整 (╯︵〒﹏〒)",
            "沒有了你，我就像行屍走肉 (´;︵;｀)",
            "我發誓這輩子只愛你一個 (｡•́︿•̀｡)"
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
        const name = nameInput.value.trim() || '親愛的';
        const reason = reasonInput.value.trim() || '的不體貼';
        const incident = incidentInput.value.trim() || '這件事';
        const level = levelSelect.value;

        // 確保每次生成的文字都超過 250 字
        let attempts = 0;
        let apology = '';
        
        do {
            apology = `${getRandomElement(apologyPhrases.opening)}

因為我${name}${reason}，${getRandomElement(apologyPhrases.consequence)}造成了${incident}。

${getRandomElement(apologyPhrases.emotion[level])}
${getRandomElement(apologyPhrases.self_reflection[level])}

${getRandomElement(apologyPhrases.promise[level])}
${getRandomElement(apologyPhrases.guilt_trip[level])}

${getRandomElement(apologyPhrases.closing[level])}

永遠愛你的
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
// 週間カレンダーを生成
const Table = document.getElementById('week');
const Thead = document.createElement('thead');
const Htr = document.createElement('tr');
const thContents = ['時', '日', '月', '火', '水', '木', '金', '土'];

// 曜日の行
for (let i = 0; i < 8; i++) {
    const Htd = document.createElement('td');

    // 曜日と日付の文字列を表示
    const day = i + 26;
    const nextDay = i + -4;
    if (i == 0) {
        Htd.textContent = thContents[i];
    } else if (day <= 30) {
        Htd.textContent = day + '(' + thContents[i] + ')';
    } else {
        Htd.textContent = nextDay + '(' + thContents[i] + ')';
    }

    Htr.appendChild(Htd);
}
Thead.appendChild(Htr);
Table.appendChild(Thead);

// メインの行
const Tbody = document.createElement('tbody');

// 列ループ
for (let j = 0; j < 24; j++) {
    const Tr = document.createElement('tr');

    if (j % 2 === 0) {
        // 偶数の横列にクラスを追加
        Tr.classList.add('row-line');
    }

    // セルループ
    for (let k = 0; k < 8; k++) {
        const Td = document.createElement('td');

        // 表の座標
        // Td.textContent = j + ':' + k;
        if (k === 0) {
            Td.classList.add('time');
            if (j % 2 === 0) {
                // 偶数の時間の数字を表示
                Td.textContent = j + 4;
            }
        } else {
            Td.classList.add('contents');
        }

        // 表のテキストを表示
        if (j === 0 && k === 1) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'イタリア';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 1 && k === 1) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'オーストリア';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }
        if (j === 21 && k === 1) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'オランダ';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 22 && k === 1) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'チェコ';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }
        if (j === 0 && k === 2) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'ベルギー';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 1 && k === 2) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'ポルトガル';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }
        if (j === 2 && k === 2) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'ブラジル';
            TdContent.classList.add('copa-america', 'home', 'same-time-item');
            Td.appendChild(TdContent);
        }
        if (j === 3 && k === 2) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'エクアドル';
            TdContent.classList.add('copa-america', 'away', 'same-time-item');
            Td.appendChild(TdContent);
        }
        if (j === 2 && k === 2) {
            Td.classList.add('same-time');
            const TdContent = document.createElement('div');
            TdContent.textContent = 'ベネズエラ';
            TdContent.classList.add('copa-america', 'home', 'same-time-item');
            Td.appendChild(TdContent);
        }
        if (j === 3 && k === 2) {
            Td.classList.add('same-time');
            const TdContent = document.createElement('div');
            TdContent.textContent = 'ペルー';
            TdContent.classList.add('copa-america', 'away', 'same-time-item');
            Td.appendChild(TdContent);
        }
        if (j === 21 && k === 2) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'クロアチア';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 22 && k === 2) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'スペイン';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }
        if (j === 0 && k === 3) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'フランス';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 1 && k === 3) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'スイス';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }
        if (j === 21 && k === 3) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'イングランド';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 22 && k === 3) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'ドイツ';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }
        if (j === 0 && k === 4) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'スウェーデン';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 1 && k === 4) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'ウクライナ';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }
        if (j === 21 && k === 6) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'スイス';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 22 && k === 6) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'スペイン';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }
        if (j === 0 && k === 7) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'ベルギー';
            TdContent.classList.add('euro', 'home');
            Td.appendChild(TdContent);
        }
        if (j === 1 && k === 7) {
            const TdContent = document.createElement('div');
            TdContent.textContent = 'イタリア';
            TdContent.classList.add('euro', 'away');
            Td.appendChild(TdContent);
        }

        Tr.appendChild(Td);
    }
    Tbody.appendChild(Tr);
}
Table.appendChild(Tbody);

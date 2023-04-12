let Data = {
    "流動比率": {
        "公式": "流動資產 / 流動負債",
        "分類": "流動性",
        "講解": "流動比率是衡量企業短期償債能力的指標，其計算方式是將企業的流動資產除以流動負債，若比率越高，代表企業的短期償債能力越強。",
        "提醒": ""
    },
    "速動比率": {
        "公式": "(流動資產-存貨) / 流動負債",
        "分類": "流動性",
        "講解": "速動比率是衡量企業短期償債能力的指標，與流動比率相比較更加嚴格，因為速動比率排除了存貨，而存貨較難轉換成現金，其計算方式是將企業的速動資產除以流動負債，若比率越高，代表企業的短期償債能力越強。",
        "提醒": ""
    },
    "存貨週轉率": {
        "公式": "銷貨收入 / 存貨",
        "分類": "資產管理",
        "講解": "存貨週轉率是衡量企業存貨管理效率的指標，其計算方式是將企業的銷貨收入除以存貨，若比率越高，代表企業的存貨管理效率越好。",
        "提醒": "分母要平均"
    },
    "流動資產週轉率":{
        "公式": "銷貨收入 / 流動資產",
        "分類": "資產管理",
        "講解": "",
        "提醒": "分母要平均"
    }
    ,
    "銷貨流通在外天數": {
        "公式": "應收帳款 / (年銷收入 / 365) 或 應收帳款 / 每日平均銷貨收入",
        "分類": "資產管理",
        "講解": "銷貨流通在外天數是衡量企業應收帳款收回速度的指標，其計算方式是將企業的應收帳款除以年銷售額，再乘以365天，或是將企業的應收帳款除以每日平均銷貨收入，若天數越短，代表企業的應收帳款收回速度越快。",
        "提醒": ""
    },
    "固定資產週轉率": {
        "公式": "銷貨收入 / 固定資產淨額",
        "分類": "資產管理",
        "講解": "固定資產週轉率是用來評估公司固定資產使用效率的指標。透過計算公司在一定期間內的銷貨收入與固定資產淨額的比率，可以了解公司固定資產的使用效率及其產出貢獻。",
        "提醒": "分母要平均"
    },
    "總資產週轉率": {
        "公式": "銷貨收入 / 總資產",
        "分類": "資產管理",
        "講解": "總資產週轉率是用來評估公司總資產使用效率的指標。透過計算公司在一定期間內的銷貨收入與總資產的比率，可以了解公司總資產的使用效率及其產出貢獻。",
        "提醒": "分母要平均"
    },
    "存貨週轉率": {
        "公式": "銷貨收入 / 存貨",
        "分類": "資產管理",
        "講解": "",
        "提醒": "分母要平均"
    },
    "應收帳款週轉率": {
        "公式": "銷貨收入 / 應收帳款",
        "分類": "資產管理",
        "講解": "",
        "提醒": "分母要平均"
    },
    "總負債對總資產": {
        "公式": "總負債 / 總資本",
        "分類": "負債管理",
        "講解": "總負債對總資產比率是用來評估公司負債比例的指標。透過計算公司總負債與總資本的比率，可以了解公司負債佔總資本的比例，進而評估公司償債能力及風險水平。",
        "提醒": ""
    },
    "利息保障倍數(TIE)": {
        "公式": "息前稅前盈餘(EBIT) / 利息費用",
        "分類": "負債管理",
        "講解": "利息保障倍數是用來評估公司支付利息能力的指標。透過計算公司息前稅前盈餘與利息費用的比率，可以了解公司每一元的息前稅前盈餘可以支付多少元的利息費用，進而評估公司的支付能力及風險水平。",
        "提醒": ""
    },
    "營業邊際": {
        "公式": "營業所得(EBIT) / 銷貨收入",
        "分類": "獲利能力",
        "講解": "營業邊際反映了一家公司的經營管理效率，即每售出1元商品或提供1元服務後，企業有多少收入可以轉化為營業利潤。高營業邊際意味著企業的經營效率好，其每一元的銷售收入可以轉化為更多的利潤。",
        "提醒": ""
    },
    "利潤邊際": {
        "公式": "淨利 / 銷貨收入",
        "分類": "獲利能力",
        "講解": "利潤邊際顯示了每售出1元商品或提供1元服務後，企業有多少收入可以轉化為淨利。利潤邊際越高，表示企業的經營效率越好，每一元的銷售收入可以轉化為更多的利潤。",
        "提醒": ""
    },
    "總資產報酬率(ROA)": {
        "公式": "淨利 / 總資產",
        "分類": "獲利能力",
        "講解": "總資產報酬率（ROA）是一個衡量企業利潤與總資產投入的指標。它可以幫助投資者評估企業如何利用其資產獲得收益。ROA越高，代表企業在資產利用上越有效率。",
        "提醒": "分母要平均"
    },
    "普通股權益報酬率(ROE)": {
        "公式": "淨利 / 普通股權益",
        "分類": "獲利能力",
        "講解": "普通股權益報酬率（ROE）衡量了一家公司所獲得的凈利潤與股東權益之間的比率。ROE越高，代表一家公司有效地將投資轉化為凈利潤，這對股東是有利的。",
        "提醒": "分母要平均"
    },
    "投入資本報酬率(ROIC)": {
        "公式": "EBIT(1-T) / 總投入資本",
        "分類": "獲利能力",
        "講解": "投入資本報酬率是衡量企業資本使用效率的指標，計算企業將資本投入營運所獲得的獲利能力。透過此指標可以評估企業營運績效的優劣，數值越高表示企業每單位投入的資本可以帶來更高的獲利。",
        "提醒": "分母要平均(懷疑狀態，並且懷疑不會考)"
    },
    "基本獲利能力(BEP)": {
        "公式": "息前稅前盈餘(EBIT) / 總資產",
        "分類": "獲利能力",
        "講解": "基本獲利能力是衡量企業經營績效的指標，計算企業每一元總資產能帶來多少息前稅前盈餘。透過此指標可以評估企業是否能有效運用資產，提高企業的經營績效，數值越高表示企業每單位資產可以帶來更高的利潤。",
        "提醒": "分母要平均"
    },
    "本益比(P/E)": {
        "公式": "每股市價 / 每股盈餘",
        "分類": "市場價值",
        "講解": "本益比是衡量股票投資風險和報酬的重要指標，計算每股市價相對於每股盈餘的比率。透過此指標可以評估企業股票的投資價值，數值越高表示股票被高估，數值越低表示股票被低估。",
        "提醒": ""
    },
    "市價/淨值比(M/B)": {
        "公式": "每股市價 / 每股淨值",
        "分類": "市場價值",
        "講解": "市價淨值比是衡量企業價值與股價關係的指標，計算每股市價相對於每股淨值的比率。透過此指標可以評估企業股票的投資價值，數值越高表示股票被高估，數值越低表示股票被低估。",
        "提醒": ""
    }
}
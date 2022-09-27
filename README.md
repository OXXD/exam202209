# 202209Web 前端笔试题 tidy.js 代码

## 前置

```sh
# 安装依赖
npm install
```

## 命令

```sh
# 在终端中输出所有问题结果
npm start
# 运行问题1代码并在终端中输出结果
npm run q1
# 运行问题2代码并在终端中输出结果
npm run q2
# 运行问题3代码并在终端中输出结果
npm run q3
# 运行问题4代码并在终端中输出结果
npm run q4
```

## 问题1结果

```javascript
[
  {
    Site: 'site44',
    'Page views': 3,
    'Ad requests': 15,
    Coverage: 1,
    Impressions: 8,
    Clicks: 1,
    'Active View Viewable': 0.8333,
    CTR: 0.125 // 每个⽹站的点击率CTR
  },
  {
    Site: 'site09',
    'Page views': 35796,
    'Ad requests': 103777,
    Coverage: 0.929,
    Impressions: 38074,
    Clicks: 4611,
    'Active View Viewable': 0.676,
    CTR: 0.12110626674370961
  },
  {
    Site: 'site18',
    'Page views': 9750,
    'Ad requests': 43497,
    Coverage: 0.9334,
    Impressions: 26001,
    Clicks: 2597,
    'Active View Viewable': 0.8138,
    CTR: 0.09988077381639168
  },
  {
    Site: 'site13',
    'Page views': 26332,
    'Ad requests': 48784,
    Coverage: 0.899,
    Impressions: 24264,
    Clicks: 2409,
    'Active View Viewable': 0.6266,
    CTR: 0.09928288822947577
  },
  {
    Site: 'site03',
    'Page views': 620536,
    'Ad requests': 2410173,
    Coverage: 0.9207,
    Impressions: 1285456,
    Clicks: 119433,
    'Active View Viewable': 0.8088,
    CTR: 0.09291099812051132
  },
  {
    Site: 'site24',
    'Page views': 377,
    'Ad requests': 573,
    Coverage: 0.9668,
    Impressions: 345,
    Clicks: 28,
    'Active View Viewable': 0.5354,
    CTR: 0.08115942028985507
  },
  {
    Site: 'site17',
    'Page views': 15256,
    'Ad requests': 22733,
    Coverage: 0.9879,
    Impressions: 18334,
    Clicks: 1417,
    'Active View Viewable': 0.8254,
    CTR: 0.07728809861459583
  },
  {
    Site: 'site12',
    'Page views': 31938,
    'Ad requests': 64810,
    Coverage: 0.9698,
    Impressions: 41737,
    Clicks: 2817,
    'Active View Viewable': 0.6463,
    CTR: 0.06749407000982342
  },
  {
    Site: 'site01',
    'Page views': 4778643,
    'Ad requests': 16173124,
    Coverage: 0.962,
    Impressions: 8006116,
    Clicks: 457338,
    'Active View Viewable': 0.6722,
    CTR: 0.057123579023836274
  },
  {
    Site: 'site16',
    'Page views': 16280,
    'Ad requests': 24319,
    Coverage: 0.8904,
    Impressions: 13416,
    Clicks: 759,
    'Active View Viewable': 0.5996,
    CTR: 0.0565742397137746
  },
  {
    Site: 'site04',
    'Page views': 295071,
    'Ad requests': 718069,
    Coverage: 0.9638,
    Impressions: 504392,
    Clicks: 27711,
    'Active View Viewable': 0.8154,
    CTR: 0.05493941220320703
  },
  {
    Site: 'site20',
    'Page views': 4221,
    'Ad requests': 16988,
    Coverage: 0.69,
    Impressions: 7166,
    Clicks: 367,
    'Active View Viewable': 0.7426,
    CTR: 0.051214066424783704
  },
  {
    Site: 'site14',
    'Page views': 24831,
    'Ad requests': 179843,
    Coverage: 0.968,
    Impressions: 130481,
    Clicks: 6337,
    'Active View Viewable': 0.9107,
    CTR: 0.048566457951732436
  },
  {
    Site: 'site21',
    'Page views': 3574,
    'Ad requests': 5909,
    Coverage: 0.9809,
    Impressions: 3917,
    Clicks: 181,
    'Active View Viewable': 0.6206,
    CTR: 0.04620883329078376
  },
  {
    Site: 'site15',
    'Page views': 18524,
    'Ad requests': 27532,
    Coverage: 0.9971,
    Impressions: 19318,
    Clicks: 843,
    'Active View Viewable': 0.6436,
    CTR: 0.04363805776995548
  },
  {
    Site: 'site05',
    'Page views': 142343,
    'Ad requests': 456157,
    Coverage: 0.8775,
    Impressions: 313660,
    Clicks: 12053,
    'Active View Viewable': 0.7851,
    CTR: 0.03842695912771791
  },
  {
    Site: 'site29',
    'Page views': 35,
    'Ad requests': 305,
    Coverage: 0.9967,
    Impressions: 270,
    Clicks: 10,
    'Active View Viewable': 0.8854,
    CTR: 0.037037037037037035
  },
  {
    Site: 'site22',
    'Page views': 1666,
    'Ad requests': 11269,
    Coverage: 0.8162,
    Impressions: 6867,
    Clicks: 235,
    'Active View Viewable': 0.8906,
    CTR: 0.03422163972622688
  },
  {
    Site: 'site08',
    'Page views': 36229,
    'Ad requests': 102256,
    Coverage: 0.9923,
    Impressions: 75968,
    Clicks: 2590,
    'Active View Viewable': 0.7608,
    CTR: 0.03409330244313395
  },
  {
    Site: 'site10',
    'Page views': 32426,
    'Ad requests': 88923,
    Coverage: 0.995,
    Impressions: 63800,
    Clicks: 2147,
    'Active View Viewable': 0.7877,
    CTR: 0.03365203761755486
  },
  {
    Site: 'site07',
    'Page views': 83643,
    'Ad requests': 362745,
    Coverage: 0.9884,
    Impressions: 218580,
    Clicks: 6320,
    'Active View Viewable': 0.8128,
    CTR: 0.028913898801354195
  },
  {
    Site: 'site28',
    'Page views': 36,
    'Ad requests': 95,
    Coverage: 0.9895,
    Impressions: 80,
    Clicks: 2,
    'Active View Viewable': 0.7625,
    CTR: 0.025
  },
  {
    Site: 'site11',
    'Page views': 32355,
    'Ad requests': 106362,
    Coverage: 0.996,
    Impressions: 83028,
    Clicks: 2037,
    'Active View Viewable': 0.7591,
    CTR: 0.024533892180951006
  },
  {
    Site: 'site06',
    'Page views': 89297,
    'Ad requests': 317386,
    Coverage: 0.8543,
    Impressions: 204943,
    Clicks: 4405,
    'Active View Viewable': 0.7682,
    CTR: 0.02149378119769887
  },
  {
    Site: 'site02',
    'Page views': 1076232,
    'Ad requests': 7360127,
    Coverage: 0.9775,
    Impressions: 5371104,
    Clicks: 99516,
    'Active View Viewable': 0.9093,
    CTR: 0.0185280344599546
  },
  {
    Site: 'site26',
    'Page views': 60,
    'Ad requests': 371,
    Coverage: 0.965,
    Impressions: 258,
    Clicks: 4,
    'Active View Viewable': 0.9426,
    CTR: 0.015503875968992248
  },
  {
    Site: 'site19',
    'Page views': 4760,
    'Ad requests': 30694,
    Coverage: 0.9707,
    Impressions: 23924,
    Clicks: 363,
    'Active View Viewable': 0.7674,
    CTR: 0.015173047985286741
  },
  {
    Site: 'site27',
    'Page views': 38,
    'Ad requests': 124,
    Coverage: 0.9919,
    Impressions: 68,
    Clicks: 1,
    'Active View Viewable': 0.7931,
    CTR: 0.014705882352941176
  },
  {
    Site: 'site23',
    'Page views': 589,
    'Ad requests': 6042,
    Coverage: 0.995,
    Impressions: 5033,
    Clicks: 41,
    'Active View Viewable': 0.8979,
    CTR: 0.008146234849990065
  },
  {
    Site: 'site25',
    'Page views': 119,
    'Ad requests': 1381,
    Coverage: 1,
    Impressions: 1189,
    Clicks: 7,
    'Active View Viewable': 0.9398,
    CTR: 0.005887300252312868
  },
  {
    Site: 'site30',
    'Page views': 31,
    'Ad requests': 73,
    Coverage: 0.8767,
    Impressions: 62,
    Clicks: 0,
    'Active View Viewable': 1,
    CTR: 0
  },
  {
    Site: 'site31',
    'Page views': 24,
    'Ad requests': 76,
    Coverage: 0.3553,
    Impressions: 25,
    Clicks: 0,
    'Active View Viewable': 0.6,
    CTR: 0
  },
  {
    Site: 'site32',
    'Page views': 24,
    'Ad requests': 15,
    Coverage: 1,
    Impressions: 14,
    Clicks: 0,
    'Active View Viewable': 1,
    CTR: 0
  },
  {
    Site: 'site33',
    'Page views': 22,
    'Ad requests': 77,
    Coverage: 0.9091,
    Impressions: 36,
    Clicks: 0,
    'Active View Viewable': 1,
    CTR: 0
  },
  {
    Site: 'site34',
    'Page views': 12,
    'Ad requests': 30,
    Coverage: 1,
    Impressions: 24,
    Clicks: 0,
    'Active View Viewable': 0.4583,
    CTR: 0
  },
  {
    Site: 'site35',
    'Page views': 10,
    'Ad requests': 25,
    Coverage: 1,
    Impressions: 18,
    Clicks: 0,
    'Active View Viewable': 1,
    CTR: 0
  },
  {
    Site: 'site36',
    'Page views': 10,
    'Ad requests': 32,
    Coverage: 0.8125,
    Impressions: 22,
    Clicks: 0,
    'Active View Viewable': 0.8182,
    CTR: 0
  },
  {
    Site: 'site37',
    'Page views': 10,
    'Ad requests': 48,
    Coverage: 1,
    Impressions: 30,
    Clicks: 0,
    'Active View Viewable': 1,
    CTR: 0
  },
  {
    Site: 'site38',
    'Page views': 9,
    'Ad requests': 14,
    Coverage: 1,
    Impressions: 14,
    Clicks: 0,
    'Active View Viewable': 0.9286,
    CTR: 0
  },
  {
    Site: 'site39',
    'Page views': 8,
    'Ad requests': 26,
    Coverage: 1,
    Impressions: 19,
    Clicks: 0,
    'Active View Viewable': 0.5263,
    CTR: 0
  },
  {
    Site: 'site40',
    'Page views': 7,
    'Ad requests': 22,
    Coverage: 1,
    Impressions: 21,
    Clicks: 0,
    'Active View Viewable': 0.4762,
    CTR: 0
  },
  {
    Site: 'site41',
    'Page views': 5,
    'Ad requests': 25,
    Coverage: 0.64,
    Impressions: 16,
    Clicks: 0,
    'Active View Viewable': 0.1875,
    CTR: 0
  },
  {
    Site: 'site42',
    'Page views': 4,
    'Ad requests': 0,
    Impressions: 0,
    Clicks: 0,
    CTR: 0
  },
  {
    Site: 'site43',
    'Page views': 3,
    'Ad requests': 5,
    Coverage: 1,
    Impressions: 4,
    Clicks: 0,
    'Active View Viewable': 1,
    CTR: 0
  },
  {
    Site: 'site45',
    'Page views': 2,
    'Ad requests': 23,
    Coverage: 1,
    Impressions: 18,
    Clicks: 0,
    'Active View Viewable': 0.8235,
    CTR: 0
  },
  {
    Site: 'site46',
    'Page views': 2,
    'Ad requests': 2,
    Coverage: 1,
    Impressions: 2,
    Clicks: 0,
    'Active View Viewable': 1,
    CTR: 0
  },
  {
    Site: 'site47',
    'Page views': 2,
    'Ad requests': 7,
    Coverage: 1,
    Impressions: 6,
    Clicks: 0,
    'Active View Viewable': 1,
    CTR: 0
  },
  {
    Site: 'site48',
    'Page views': 2,
    'Ad requests': 1,
    Coverage: 0,
    Impressions: 0,
    Clicks: 0,
    CTR: 0
  },
  {
    Site: 'site49',
    'Page views': 1,
    'Ad requests': 2,
    Coverage: 0.5,
    Impressions: 1,
    Clicks: 0,
    'Active View Viewable': 0,
    CTR: 0
  },
  {
    Site: 'site50',
    'Page views': 1,
    'Ad requests': 1,
    Coverage: 0,
    Impressions: 0,
    Clicks: 0,
    CTR: 0
  },
  {
    Site: 'site51',
    'Page views': 1,
    'Ad requests': 5,
    Coverage: 1,
    Impressions: 6,
    Clicks: 0,
    'Active View Viewable': 0.6667,
    CTR: 0
  },
  {
    Site: 'site52',
    'Page views': 1,
    'Ad requests': 2,
    Coverage: 1,
    Impressions: 2,
    Clicks: 0,
    'Active View Viewable': 0.5,
    CTR: 0
  },
  {
    Site: 'site53',
    'Page views': 0,
    'Ad requests': 20,
    Coverage: 0.15,
    Impressions: 3,
    Clicks: 0,
    'Active View Viewable': 0,
    CTR: 0
  },
  {
    Site: 'site54',
    'Page views': 0,
    'Ad requests': 1,
    Coverage: 0,
    Impressions: 0,
    Clicks: 0,
    CTR: 0
  }
]
```

## 问题2结果

```javascript
[
  {
    totalPV: 7380788, // 总PV
    totalAdRequests: 28683473, // 总⼴告展示次数
    totalClicks: 756562, // 总点击，用于计算总⼴告点击率
    totalImpressions: 16487113, // 总展示次数，用于计算总⼴告点击率
    medianCTR: 0.050418291633784716, // 综合⼴告点击率
    totalCTR: 0.04588808240715036 // 总⼴告点击率
  }
]
```

## 问题3结果

```javascript
[] // 有效访问⽹站中没有⼴告可⻅率低于50%的⽹站
```

## 问题4结果

```javascript
[
  {
    Site: 'site01',
    'Page views': 4778643,
    'Ad requests': 16173124,
    Coverage: 0.962,
    Impressions: 8006116,
    Clicks: 457338,
    'Active View Viewable': 0.6722,
    totalPV: 7380788, // 总PV
    pv_percent: 0.6474434708055563 // 各个⽹站的PV在总PV中的占⽐ pv_percent
  },
  {
    Site: 'site02',
    'Page views': 1076232,
    'Ad requests': 7360127,
    Coverage: 0.9775,
    Impressions: 5371104,
    Clicks: 99516,
    'Active View Viewable': 0.9093,
    totalPV: 7380788,
    pv_percent: 0.14581532486775126
  },
  {
    Site: 'site03',
    'Page views': 620536,
    'Ad requests': 2410173,
    Coverage: 0.9207,
    Impressions: 1285456,
    Clicks: 119433,
    'Active View Viewable': 0.8088,
    totalPV: 7380788,
    pv_percent: 0.08407449177513296
  },
  {
    Site: 'site04',
    'Page views': 295071,
    'Ad requests': 718069,
    Coverage: 0.9638,
    Impressions: 504392,
    Clicks: 27711,
    'Active View Viewable': 0.8154,
    totalPV: 7380788,
    pv_percent: 0.03997825164467534
  },
  {
    Site: 'site05',
    'Page views': 142343,
    'Ad requests': 456157,
    Coverage: 0.8775,
    Impressions: 313660,
    Clicks: 12053,
    'Active View Viewable': 0.7851,
    totalPV: 7380788,
    pv_percent: 0.019285610154362923
  },
  {
    Site: 'site06',
    'Page views': 89297,
    'Ad requests': 317386,
    Coverage: 0.8543,
    Impressions: 204943,
    Clicks: 4405,
    'Active View Viewable': 0.7682,
    totalPV: 7380788,
    pv_percent: 0.01209857267272817
  },
  {
    Site: 'site07',
    'Page views': 83643,
    'Ad requests': 362745,
    Coverage: 0.9884,
    Impressions: 218580,
    Clicks: 6320,
    'Active View Viewable': 0.8128,
    totalPV: 7380788,
    pv_percent: 0.011332529805760577
  },
  {
    Site: 'site08',
    'Page views': 36229,
    'Ad requests': 102256,
    Coverage: 0.9923,
    Impressions: 75968,
    Clicks: 2590,
    'Active View Viewable': 0.7608,
    totalPV: 7380788,
    pv_percent: 0.004908554479548796
  },
  {
    Site: 'site09',
    'Page views': 35796,
    'Ad requests': 103777,
    Coverage: 0.929,
    Impressions: 38074,
    Clicks: 4611,
    'Active View Viewable': 0.676,
    totalPV: 7380788,
    pv_percent: 0.0048498886568751195
  },
  {
    Site: 'site10',
    'Page views': 32426,
    'Ad requests': 88923,
    Coverage: 0.995,
    Impressions: 63800,
    Clicks: 2147,
    'Active View Viewable': 0.7877,
    totalPV: 7380788,
    pv_percent: 0.004393297842994542
  },
  {
    Site: 'site11',
    'Page views': 32355,
    'Ad requests': 106362,
    Coverage: 0.996,
    Impressions: 83028,
    Clicks: 2037,
    'Active View Viewable': 0.7591,
    totalPV: 7380788,
    pv_percent: 0.0043836782739187195
  },
  {
    Site: 'site12',
    'Page views': 31938,
    'Ad requests': 64810,
    Coverage: 0.9698,
    Impressions: 41737,
    Clicks: 2817,
    'Active View Viewable': 0.6463,
    totalPV: 7380788,
    pv_percent: 0.004327180241459313
  },
  {
    Site: 'site13',
    'Page views': 26332,
    'Ad requests': 48784,
    Coverage: 0.899,
    Impressions: 24264,
    Clicks: 2409,
    'Active View Viewable': 0.6266,
    totalPV: 7380788,
    pv_percent: 0.0035676407451345304
  },
  {
    Site: 'site14',
    'Page views': 24831,
    'Ad requests': 179843,
    Coverage: 0.968,
    Impressions: 130481,
    Clicks: 6337,
    'Active View Viewable': 0.9107,
    totalPV: 7380788,
    pv_percent: 0.0033642749256583442
  },
  {
    Site: 'site15',
    'Page views': 18524,
    'Ad requests': 27532,
    Coverage: 0.9971,
    Impressions: 19318,
    Clicks: 843,
    'Active View Viewable': 0.6436,
    totalPV: 7380788,
    pv_percent: 0.002509759120570866
  },
  {
    Site: 'site16',
    'Page views': 16280,
    'Ad requests': 24319,
    Coverage: 0.8904,
    Impressions: 13416,
    Clicks: 759,
    'Active View Viewable': 0.5996,
    totalPV: 7380788,
    pv_percent: 0.002205726543019526
  },
  {
    Site: 'site17',
    'Page views': 15256,
    'Ad requests': 22733,
    Coverage: 0.9879,
    Impressions: 18334,
    Clicks: 1417,
    'Active View Viewable': 0.8254,
    totalPV: 7380788,
    pv_percent: 0.0020669879693062583
  },
  {
    Site: 'site18',
    'Page views': 9750,
    'Ad requests': 43497,
    Coverage: 0.9334,
    Impressions: 26001,
    Clicks: 2597,
    'Active View Viewable': 0.8138,
    totalPV: 7380788,
    pv_percent: 0.0013209971618206619
  },
  {
    Site: 'site19',
    'Page views': 4760,
    'Ad requests': 30694,
    Coverage: 0.9707,
    Impressions: 23924,
    Clicks: 363,
    'Active View Viewable': 0.7674,
    totalPV: 7380788,
    pv_percent: 0.0006449175887452668
  },
  {
    Site: 'site20',
    'Page views': 4221,
    'Ad requests': 16988,
    Coverage: 0.69,
    Impressions: 7166,
    Clicks: 367,
    'Active View Viewable': 0.7426,
    totalPV: 7380788,
    pv_percent: 0.0005718901559020527
  },
  {
    Site: 'site21',
    'Page views': 3574,
    'Ad requests': 5909,
    Coverage: 0.9809,
    Impressions: 3917,
    Clicks: 181,
    'Active View Viewable': 0.6206,
    totalPV: 7380788,
    pv_percent: 0.0004842301391125175
  },
  {
    Site: 'site22',
    'Page views': 1666,
    'Ad requests': 11269,
    Coverage: 0.8162,
    Impressions: 6867,
    Clicks: 235,
    'Active View Viewable': 0.8906,
    totalPV: 7380788,
    pv_percent: 0.00022572115606084336
  },
  {
    Site: 'site23',
    'Page views': 589,
    'Ad requests': 6042,
    Coverage: 0.995,
    Impressions: 5033,
    Clicks: 41,
    'Active View Viewable': 0.8979,
    totalPV: 7380788,
    pv_percent: 0.00007980177726280717
  },
  {
    Site: 'site24',
    'Page views': 377,
    'Ad requests': 573,
    Coverage: 0.9668,
    Impressions: 345,
    Clicks: 28,
    'Active View Viewable': 0.5354,
    totalPV: 7380788,
    pv_percent: 0.000051078556923732264
  },
  {
    Site: 'site25',
    'Page views': 119,
    'Ad requests': 1381,
    Coverage: 1,
    Impressions: 1189,
    Clicks: 7,
    'Active View Viewable': 0.9398,
    totalPV: 7380788,
    pv_percent: 0.000016122939718631668
  }
]

```
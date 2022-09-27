const {
  tidy,
  mutate,
  filter,
  summarize,
  sum,
  mean,
} = require("@tidyjs/tidy");
const data = require("./data/data.json");

// 2). 计算所有有效访问⽹站的总PV，总⼴告展示次数，总⼴告点击率，综合点击率CTR
// 有效访问⽹站 = ⽹⻚访问量⼤于等于100的⽹站
const results = tidy(
  data,
  filter((d) => d["Page views"] >= 100), // 过滤有效访问网站
  mutate({
    CTR: (d) => {
      if (d.Clicks && d.Impressions) {
        return d.Clicks / d.Impressions; // 计算点击率CTR
      }
      return 0;
    },
  }),
  summarize({
    totalPV: sum("Page views"), // 总PV
    totalAdRequests: sum("Ad requests"), // 总⼴告展示次数
    totalClicks: sum("Clicks"), // 总点击，用于计算总⼴告点击率
    totalImpressions: sum("Impressions"), // 总展示次数，用于计算总⼴告点击率
    medianCTR: mean("CTR"), // 综合⼴告点击率
  }),
  mutate({
    totalCTR: (d) => d.totalClicks / d.totalImpressions, // 总广告点击率
  })
);
console.log("答案2: ", results);

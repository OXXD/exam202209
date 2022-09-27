const {
  tidy,
  mutate,
  arrange,
  desc,
} = require("@tidyjs/tidy");
const data = require("./data/data.json");

// 1). 计算出每个⽹站的点击率CTR，并按照CTR从⾼到底排序。
// CTR的计算公式是: CTR = Clicks/Impressions
const results = tidy(
  data,
  mutate({
    CTR: (d) => {
      if (d.Clicks && d.Impressions) {
        return d.Clicks / d.Impressions;
      }
      return 0;
    },
  }),
  arrange(desc("CTR"))
);
console.log("答案1: ", results);


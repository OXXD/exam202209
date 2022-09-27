const {
  tidy,
  mutate,
  filter,
  sum,
  mutateWithSummary,
} = require("@tidyjs/tidy");
const data = require("./data/data.json");

// 4). [可选] 计算所有有效⽹站中，各个⽹站的PV在总PV中的占⽐ pv_percent。
const results = tidy(
  data,
  filter((d) => d["Page views"] >= 100), // 过滤有效访问网站
  mutateWithSummary({
    totalPV: sum("Page views"), // 总PV
  }),
  mutate({
    pv_percent: (d) => d["Page views"] / d.totalPV, // 各个⽹站的PV在总PV中的占⽐ pv_percent
  })
);
console.log("答案4: ", results);

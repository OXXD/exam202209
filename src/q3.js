const {
  tidy,
  filter,
} = require("@tidyjs/tidy");
const data = require("./data/data.json");

// 3). 找出有效访问⽹站中，⼴告可⻅率低于50%的⽹站，这些⽹站的⼴告可能存在问题。
const results = tidy(
  data,
  filter((d) => d["Page views"] >= 100 && d["Active View Viewable"] < 0.5) // 过滤有效访问网站
);
console.log("答案3: ", results);

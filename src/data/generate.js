const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");

const workbook = XLSX.readFile(
  path.join(__dirname, "../assets/AdSenseReport.xlsx")
);
const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

fs.writeFileSync(
  path.join(__dirname, "data.json"),
  JSON.stringify(data, null, 2)
);

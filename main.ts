// The Best Meal You Ever Had — one sentence, 163 chars.
// Debt-book beat: three years of credit, crossed off in one line — the meal is the receipt.
import { writeFileSync, chmodSync } from "node:fs";

const entry = "After three years, the warung owner crossed my name off the debt book when I paid for the nasi uduk, and it tasted like the first morning I could afford breakfast.";
const target = "/output/entry.txt";
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);

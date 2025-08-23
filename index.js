import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const git = simpleGit();




// Things to Edit
const Day = 100;   // Day 1 to 365 
const year = "2025-01-01";  //Year
const No_of_contributions = 5; 






function getRandomDatesInYear(count) {
  const dates = new Set();
  while (dates.size < count) {
    const randomDay = Math.floor(Math.random() * Day) + 1; 
    const date = moment(year).add(randomDay - 1, 'days').format(); // Year
    dates.add(date);
  }
  return Array.from(dates).sort();  // Sorted for cleaner commit history
}
async function commitRandomDaysInYear() {
  const randomDates = getRandomDatesInYear(No_of_contributions);
  for (const date of randomDates) {
    const data = { date: date };
    await jsonfile.writeFile(path, data).catch((err) => {
      console.error(`Error writing file for ${date}:`, err);
      return;
    });
    await git.add([path])
      .then(() => git.commit(`Backdated commit for ${date}`, [path], { '--date': date }))
      .then(() => console.log(`Committed for ${date}`))
      .catch((err) => console.error(`Git commit failed for ${date}:`, err));
  }
  await git.push().then(() => {
    console.log("All random backdated commits pushed to the repository.");
  }).catch((err) => console.error("Git push failed:", err));
}
commitRandomDaysInYear();

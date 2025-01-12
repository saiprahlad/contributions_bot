# 📦 Git Contribution Bot Setup Documentation

This guide explains how to set up a simple Node.js script that automatically creates backdated commits to simulate GitHub contributions.

---

## 📝 Prerequisites

- **Node.js** and **npm** installed
- **Git** installed
- A **GitHub account** with a **private repository** created

---

## 🚀 Step-by-Step Setup

### 1. **Create a Private Repository**
- Go to GitHub and create a new **private repository**.

### 2. **Clone the Repository Locally**
- Open **Command Prompt (CMD)** and create a folder for the project:
  ```bash
  mkdir contributions_bot
  cd contributions_bot
  ```
- Open VS Code from the folder:
  ```bash
  code .
  ```
- Clone the repository:
  ```bash
  git clone https://github.com/your-username/your-repo-name.git
  cd your-repo-name
  ```

### 3. **Initialize Node.js Project**
- Run the following command to create a `package.json` file:
  ```bash
  npm init -y
  ```

### 4. **Install Required Dependencies**
- Install the necessary packages:
  ```bash
  npm install jsonfile moment simple-git
  ```

### 5. **Update `package.json` Configuration**
- Open `package.json` and add the following under the main section:
  ```json
  "name": "contributions_bot",
  "version": "1.0.0",
  "description": "Snake food",
  "main": "index.js",
  "type": "module"
  ```

### 6. **Create Required Files**
- In the project folder, create two files:
  - `index.js`  → Main script file
  - `data.json` → Data storage file (leave it empty for now)

### 7. **Add the Script to `index.js`**
```javascript
import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const git = simpleGit();

function getRandomDatesIn2024(count) {
  const dates = new Set();

  while (dates.size < count) {
    const randomDay = Math.floor(Math.random() * 365) + 1;
    const date = moment("2024-01-01").add(randomDay - 1, 'days').format();
    dates.add(date);
  }

  return Array.from(dates).sort();
}

async function commitRandomDaysIn2024() {
  const randomDates = getRandomDatesIn2024(10);

  for (const date of randomDates) {
    const data = { date: date };
    await jsonfile.writeFile(path, data);
    await git.add([path]);
    await git.commit(`Backdated commit for ${date}`, [path], { '--date': date });
    console.log(`Committed for ${date}`);
  }
  await git.push();
  console.log("All backdated commits pushed.");
}

commitRandomDaysIn2024();
```

### 8. **Run the Script**
- Execute the script with:
  ```bash
  node index.js
  ```

### 9. **Verify Commits**
- Check your GitHub repository to see the new commits with random dates in **2024**.

---

## 🎉 You're Done!
Congratulations! Your bot now generates random backdated commits to simulate activity on GitHub.

---

## 🔧 Optional Improvements
- Customize the number of commits.
- Adjust the year range.
- Automate with **cron jobs** for continuous contributions.

---

## The error you're encountering is:
```planetext
error: failed to push some refs to 'https://github.com/Bhanutejagiddaluru/contributions_bot.git'
hint: Updates were rejected because the remote contains work that you do not have locally.
hint: This is usually caused by another repository pushing to the same ref.
```

- ⚠ Reason: Your local repository is behind the remote repository. This means there are new commits on GitHub that you haven't fetched yet.
- Solution 1: Pull and Push
  - Run these commands in the terminal to sync your local and remote repositories:
    1. Pull the latest changes from the remote
       ```plane text
      - git pull origin main --rebase
       ```
    2. Push your commits after syncing
       ```plane text
      - git push origin main
       ```

- Solution 2: Force Push (⚠ Use with Caution)
- git push origin main --force
  

Happy Coding! 🚀

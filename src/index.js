#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: chalk.magentaBright.bold("What do you want to groove to?"),
    choices: [
      {
        name: `💌  Send me a funky ${chalk.magentaBright.bold("email")}?`,
        value: () => {
          open("mailto:linus.frosteryd@gmail.com");
          console.log(chalk.green("\n💌  Groovy! See you soon.\n"));
        }
      },
      {
        name: `☕  Buy me a coffee at ${chalk.magentaBright.bold("BuyMeACoffee")}!`,
        value: () => {
          open("https://buymeacoffee.com/frosteryd");
          console.log(chalk.yellow("\n☕  Thanks for the coffee! ☕\n"));
        }
      },
      {
        name: `📞  Book a call at ${chalk.magentaBright.bold("Cal.com")}`,
        value: () => {
          open("https://cal.com/frosteryd/15");
          console.log(chalk.cyan("\n📞  Looking forward to our call! 📞\n"));
        }
      },
      {
        name: "💃  Just dance away.",
        value: () => {
          console.log(chalk.blue("💃  Alright, keep on groovin'.\n"));
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.magentaBright("🍋 ...and then i decided i was a lemon for a couple of weeks."),
  handle: chalk.yellow("@frosteryd"),
  work: `${chalk.white("Tech Lead at")} ${chalk.hex("#ff5733").bold("EQT Ventures.")}`,
  blog: chalk.gray("https://medium.com/") + chalk.whiteBright("@frosteryd"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("frosteryd"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~frosteryd"),
  github: chalk.gray("https://github.com/") + chalk.green("frosteryd"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("linusfrosteryd"),
  web: chalk.cyan("https://frosteryd.com"),
  npx: chalk.red("npx") + " " + chalk.white("frosteryd"),

  labelWork: chalk.yellowBright.bold("       Work:"),
  labelBlog: chalk.yellowBright.bold("     Medium:"),
  labelTwitter: chalk.yellowBright.bold("    Twitter:"),
  labelnpm: chalk.yellowBright.bold("        npm:"),
  labelGitHub: chalk.yellowBright.bold("     GitHub:"),
  labelLinkedIn: chalk.yellowBright.bold("   LinkedIn:"),
  labelWeb: chalk.yellowBright.bold("        Web:"),
  labelCard: chalk.yellowBright.bold("       Card:")
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("Stay funky, stay curious, and keep on coding!")}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "round",
    borderColor: "magentaBright",
    backgroundColor: "#222222"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + 2x click")} on the links above`,
  '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());

const lessons = [
  {
    title: "In the beginning: Setup your environment",
    desc: 'In this class, you will setup a modern JavaScript environment on your computer. You will install NodeJS, Git Bash, VS Code, and configure your work station. You will write and run "Hello World" in JavaScript. You will know the basic data types, objects, methods, and the 3 types of apps by complexity.',
    links: {
      youtube: [
        {
          title: "VS Code Editor for JavaScript Coding জাভাস্ক্রিপ্ট কোড এডিটর",
          url: "https://youtu.be/u7W55OQuh10?si=IBDcqutbIVjLiKSq",
        },
        {
          title: "NodeJS Installation for JavaScript নোড সেটাপ",
          url: "https://www.youtube.com/watch?v=GYtwKR81WB8",
        },
        {
          title: "Git Bash Setup গিট ব্যাশ সেটাপ",
          url: "https://www.youtube.com/watch?v=oxTBgCgFN6U",
        },
        {
          title: "Write Hello World in Node JS",
          url: "https://www.youtube.com/watch?v=LTWSrPwaCOg",
        },
        {
          title: "Write Hello World in Browser Console",
          url: "https://www.youtube.com/watch?v=xQL2-SPOORs",
        },
        {
          title: "Variables in JavaScript let জাভাস্ক্রিপ্ট ভেরিয়েবল",
          url: "https://www.youtube.com/watch?v=IJrqoSBdxXs",
        },
        {
          title: "Integer - Number Data Type in JavaScript",
          url: "https://www.youtube.com/watch?v=sg6CNyScT8o",
        },
        {
          title: "Real Numbers, Float, Decimal Number Data Type in JavaScript",
          url: "https://www.youtube.com/watch?v=lli9QMOeGns",
        },
      ],
      others: [],
    },
  },

  {
    title: "Guardian Angels: Troubleshooting JavaScript",
    desc: "In this class, you will troubleshoot and debug your JavaScript project. You will link and verify HTML, CSS, and JavaScript files. You will learn ways to troubleshoot common programming errors and how to find solutions on the internet. You will write effective help-wanted posts to get timely answers. You will write code following the Google styling guide.",
    links: {
      youtube: [],
      others: [
        {
          title: "Class link",
          url: "https://drive.google.com/drive/folders/1kcdqh33Z1iafoYKLboS8gi_RmQbqelqw",
        },
        {
          title: "Github Source Code",
          url: "https://github.com/tamalchowdhury/burgerclass2",
        },
      ],
    },
  },

  {
    title: "Sir, Yes Sir: Build a Calculator App",
    desc: "In this class you will build a simple calculator app with HTML, CSS, and Vanilla JavaScript. You will write modular code using functions. You will know the core use of functions in programming. You will know event handlers, and work with DOM. You will find formulas for various calculators and create a variety of apps. You will learn basic CSS styling. You will deploy this app to GitHub.",
  },

  {
    title: "Riot: Build a ToDo List App",
    desc: "In this class, you will build a To Do list app. You will learn JavaScript Array, and ES6 Array methods by building the app. You will practice the core CRUD (Create, Read, Update, & Delete) actions. You will build a laundry list app using vanilla JS with the previous learnings. You will deploy this app to Netlify.",
  },

  {
    title: "Shakedown: Build a Weather API App",
    desc: "In this class, you will build a weather app by connecting to a 3rd party weather API. You will know how to work and configure an API key in your application. You will work with the JavaScript Object Notation JSON and objects. You will deploy this app to Netlify and troubleshoot common CORS permission issues. You will learn the fetch browser API to make REST calls. You will debug this app with the Chrome network tab.",
  },
  {
    title: "Supply and Demand: Build a Meme Generator App",
    desc: "In this class, you will create your own meme generator. You will work with a 3rd party package to draw the image canvas. You will work with the localStorage API to save user info. You will learn the git workflow by committing to the source couple of times. Finally, you will deploy this app to Netlify and configure a custom domain name.",
  },

  {
    title: "Publicity Tour: Write Documentation for Your Code",
    desc: "In this class, you will write documentation for your code. You will write comments for your code with JS Doc. You will write a Readme file with the Markdown language. You will create blog documentation using images, and GIFs. You will learn the tone for writing technical documentation. You will do SEO, add open graph tags, and on-page optimization for your web apps.",
  },

  {
    title: "Keep Your Friends Close: How to Open Source on Git & GitHub",

    desc: "In this class, you will contribute to open-source software. You will clone a project from GitHub and make your own changes with a new branch. You will create a pull request and commit to a project of the teacher. You will optimize your GitHub profile and work with the GitHub UI and Command Line Interface. You will know the code of conduct, and how to properly discuss issues in GitHub.",
  },

  {
    title: "Stunt Boat Challenge: Testing Your JavaScript Functions",
    desc: "In this class, you will test your code for accuracy. You will write static tests using JS Doc and TypeScript. You will then write tests for your functions using the JEST testing library. You will get an overview about the 4 types of tests in software.",
  },
  {
    title: "The Party: How to Get Involved in Tech",
    desc: "In this class, you will get involved in tech. You will create and optimize your public profiles to build and grow your network. You will write a blog post sharing your journey and publish it online. You will prepare a 5-minute lightning talk to speak in an upcoming online meetup. You will create your portfolio and resume to showcase all the projects you have built.",
  },
];

const catalogue = document.querySelector(".catalogue");
const element = document.createElement("section");

/* <div class="class">
            <h3 class="class__title">Class title</h3>
            <p class="class__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              ipsum assumenda beatae minima tenetur corrupti ut minus similique
              voluptatum, aut, aliquam odit cumque inventore molestiae vitae
              voluptates quod quis culpa.
            </p>
          </div> */

let content = ``;

lessons.forEach((lesson, i) => {
  content += `<div class="class">
  <h3 class="class__title">Live Class #${i + 1} ${lesson.title}</h3>
  <p class="class__desc">
  ${lesson.desc}
  </p>
</div> `;
});

catalogue.innerHTML = content;

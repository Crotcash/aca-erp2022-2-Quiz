
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_uipaK7UiXOCy9Aq2hDY76p1gmUZZjz8",
  authDomain: "quiz-app-9de5f.firebaseapp.com",
  projectId: "quiz-app-9de5f",
  storageBucket: "quiz-app-9de5f.firebasestorage.app",
  messagingSenderId: "445968049498",
  appId: "1:445968049498:web:ec342760e8df25964fbf63",
  measurementId: "G-PLYLXFF7B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const questions = [
  {
    question: "What command downloads a repo from GitHub to your computer?",
    options: ["git push", "git commit", "git fork", "git clone"],
    answerIndex: 3,
    explanation: "git clone copies a repo from GitHub to your machine."
  },
  {
    question: "Which command starts the Vite development server?",
    options: ["npm install", "npm run dev", "npm build", "npm test"],
    answerIndex: 1,
    explanation: "`npm run dev` starts the Vite dev server."
  },
  {
    id: 3,
    question: "What React hook is used to manage component state?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answerIndex: 2,
    explanation: "`useState` is used to declare state variables in a functional component."
  },
  {
    question: "Which file typically contains the root component in a React app?",
    options: ["App.tsx", "main.tsx", "index.html", "vite.config.ts"],
    answerIndex: 2,
    explanation: "`main.tsx` is the entry point where React renders the root component (`<App />`)."
  },
  {
    question: "Which npm command installs dependencies?",
    options: ["npm init", "npm install", "npm build", "npm serve"],
    answerIndex: 2,
    explanation: "`npm install` installs all dependencies listed in `package.json`."
  },
  {
    question: "What does HMR stand for in Vite?",
    options: ["Hot Mode Reloading", "Hot Module Replacement", "High Memory Runtime", "Host Module Resolution"],
    answerIndex: 2,
    explanation: "Hot Module Replacement lets Vite update modules instantly in the browser without a full reload."
  },
  {
    question: "What file declares project dependencies in a Node.js project?",
    options: ["vite.config.ts", "tsconfig.json", "package.json", "index.ts"],
    answerIndex: 3,
    explanation: "`package.json` lists the project's dependencies, scripts, and metadata."
  },
  {
    question: "Which language adds static types to JavaScript in this project?",
    options: ["JavaScript", "TypeScript", "JSON", "JSX"],
    answerIndex: 2,
    explanation: "TypeScript is a typed superset of JavaScript used here for better type safety."
  },
  {
    question: "What JSX tag can group multiple elements without adding extra nodes?",
    options: ["<div>", "<group>", "<React.Fragment>", "<main>"],
    answerIndex: 3,
    explanation: "<React.Fragment> (or <>...</>) lets you group elements without adding extra DOM nodes."
  },
  {
    question: "How do you declare a functional React component?",
    options: ["function Component() {}", "new Component()", "defineComponent()", "class Component"],
    answerIndex: 1,
    explanation: "React functional components are simple JavaScript functions returning JSX."
  },
  {
    question: "Which file stores custom TypeScript types like interfaces?",
    options: ["App.tsx", "types/index.ts", "main.tsx", "vite.config.ts"],
    answerIndex: 2,
    explanation: "Custom TypeScript types are usually placed in types/index.ts."
  },
  {
    question: "How do you type React component props in TypeScript?",
    options: [
      "function MyComponent(props: any) {}",
      "function MyComponent(props: object) {}",
      "function MyComponent(props: Props) {}",
      "function MyComponent() {}"
    ],
    answerIndex: 3,
    explanation: "Define a Props interface and use it to type the component props."
  },
  {
    question: "How is data passed from a parent to child React component?",
    options: ["State", "Hooks", "Props", "Context"],
    answerIndex: 3,
    explanation: "Props are used to pass data downward in React component trees."
  },
  {
    question: "What React hook runs code after the component renders?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answerIndex: 1,
    explanation: "useEffect runs side effects after rendering."
  },
  {
    question: "Which hook lets you keep track of mutable values without causing re-renders?",
    options: ["useEffect", "useState", "useRef", "useReducer"],
    answerIndex: 3,
    explanation: "useRef holds mutable values that persist across renders without triggering updates."
  },
  {
    question: "How do you create a new branch in Git?",
    options: ["git checkout branch-name", "git branch branch-name", "git commit branch-name", "git clone branch-name"],
    answerIndex: 2,
    explanation: "git branch creates a new branch locally."
  },
  {
    question: "What command switches to another branch in Git?",
    options: ["git switch branch-name", "git checkout branch-name", "git branch branch-name", "git clone branch-name"],
    answerIndex: 2,
    explanation: "git checkout changes the current working branch."
  },
  {
    question: "What is the purpose of a pull request on GitHub?",
    options: ["Delete a branch", "Merge changes from one branch to another", "Clone a repo", "Commit changes"],
    answerIndex: 2,
    explanation: "Pull requests propose merging code changes for review."
  },
  {
    question: "What npm command updates packages to the latest versions?",
    options: ["npm update", "npm upgrade", "npm install", "npm run dev"],
    answerIndex: 1,
    explanation: "npm update updates packages within allowed version ranges."
  },
  {
    question: "How do you run unit tests in a React project with Jest?",
    options: ["npm test", "npm run test", "npm start", "npm run build"],
    answerIndex: 2,
    explanation: "npm run test executes the testing suite."
  },
  {
    question: "What is the purpose of the tsconfig.json file?",
    options: ["Declare project dependencies", "Configure TypeScript compiler options", "Store environment variables", "Manage npm scripts"],
    answerIndex: 2,
    explanation: "tsconfig.json sets TypeScript compiler behavior."
  },
  {
    question: "What is a React key used for in lists?",
    options: ["Styling", "Identifying list items uniquely for efficient re-rendering", "Adding event listeners", "Declaring state"],
    answerIndex: 2,
    explanation: "Keys help React identify which items changed in lists."
  },
  {
    question: "What is the command to build a production-ready React app using Vite?",
    options: ["npm run dev", "npm run build", "npm start", "npm test"],
    answerIndex: 2,
    explanation: "npm run build generates optimized production files."
  },
  {
    question: "Where does Vite serve your static files from?",
    options: ["public folder", "src folder", "dist folder", "node_modules folder"],
    answerIndex: 1,
    explanation: "Vite serves assets placed in the public folder as-is."
  },
  {
    question: "How do you persist data across browser reloads in your quiz app?",
    options: ["useState", "localStorage", "useEffect", "useContext"],
    answerIndex: 2,
    explanation: "localStorage saves data in the browser persistently."
  },
  {
    question: "Which React method triggers a re-render of the component?",
    options: ["Direct DOM manipulation", "Updating state with useState", "useRef change", "console.log"],
    answerIndex: 2,
    explanation: "Updating state triggers React to re-render the component."
  },
  {
    question: "What tool do you use to check for syntax and style errors in JavaScript/TypeScript?",
    options: ["Prettier", "ESLint", "Babel", "Webpack"],
    answerIndex: 2,
    explanation: "ESLint analyzes code for errors and style issues."
  },
  {
    question: "Which command initializes a new npm project?",
    options: ["npm init", "npm install", "npm start", "npm run dev"],
    answerIndex: 1,
    explanation: "npm init creates a new package.json."
  },
  {
    question: "What is JSX?",
    options: ["JavaScript XML syntax extension", "JavaScript extension for server-side rendering", "JSON syntax", "JavaScript style sheets"],
    answerIndex: 1,
    explanation: "JSX lets you write HTML-like syntax in JavaScript."
  },
  {
    question: "How do you prevent an event from bubbling up in React?",
    options: ["event.stopPropagation()", "event.preventDefault()", "event.block()", "event.cancel()"],
    answerIndex: 1,
    explanation: "stopPropagation() stops the event from propagating up the DOM."
  },
  {
    question: "Which Vite config file is used to customize the build?",
    options: ["vite.config.ts", "package.json", "tsconfig.json", ".env"],
    answerIndex: 1,
    explanation: "vite.config.ts configures Vite's build and dev server."
  },
  {
    question: "What React feature lets you avoid 'prop drilling'?",
    options: ["Context API", "useState", "useEffect", "JSX"],
    answerIndex: 1,
    explanation: "Context API shares data across components without passing props manually."
  },
  {
    question: "What is the command to push commits to GitHub?",
    options: ["git push origin branch-name", "git commit origin branch-name", "git clone origin branch-name", "git pull origin branch-name"],
    answerIndex: 1,
    explanation: "git push origin branch-name uploads your commits to the remote."
  },
  {
    question: "Which file defines environment variables in a Vite project?",
    options: [".env", "package.json", "vite.config.ts", "tsconfig.json"],
    answerIndex: 1,
    explanation: ".env files store environment variables used by Vite."
  },
  {
    question: "What is the TypeScript type for an array of strings?",
    options: ["string[]", "Array<string>", "Both A and B", "string"],
    answerIndex: 3,
    explanation: "Both string[] and Array<string> are valid TypeScript array types."
  },
  {
    question: "How do you prevent a form from submitting and refreshing the page in React?",
    options: ["event.preventDefault()", "event.stopPropagation()", "return false", "event.cancel()"],
    answerIndex: 1,
    explanation: "preventDefault() stops the default form submission behavior."
  },
  {
    question: "What does the npm script 'npm run build' do?",
    options: ["Starts the development server", "Compiles and bundles code for production", "Runs tests", "Installs dependencies"],
    answerIndex: 2,
    explanation: "It builds optimized production files."
  },
  {
    question: "What React hook can you use to memoize expensive calculations?",
    options: ["useMemo", "useEffect", "useState", "useContext"],
    answerIndex: 1,
    explanation: "useMemo caches expensive calculations to optimize performance."
  },
  {
    question: "What command lists all branches in your Git repo?",
    options: ["git branch", "git checkout", "git status", "git log"],
    answerIndex: 1,
    explanation: "git branch lists all local branches."
  },
  {
    question: "How do you import a CSS file into a React component?",
    options: ["import './styles.css';", "require('styles.css');", "<link> tag", "Use inline styles only"],
    answerIndex: 1,
    explanation: "You import CSS files directly in JS files for bundling."
  },
  {
    question: "What is a React controlled component?",
    options: [
      "Component with internal state only",
      "Component whose input value is controlled by React state",
      "Component controlled by CSS",
      "Component that does not update"
    ],
    answerIndex: 2,
    explanation: "Controlled components receive their value from React state and notify changes via callbacks."
  },
  {
    question: "How can you run a React app on a different port with Vite?",
    options: [
      "Modify vite.config.ts server port",
      "Use npm run dev --port 3001",
      "Edit package.json scripts",
      "You cannot change the port"
    ],
    answerIndex: 1,
    explanation: "You configure the dev server port in vite.config.ts."
  },
  {
    question: "Which of these is NOT a valid React hook?",
    options: ["useState", "useEffect", "useFetch", "useContext"],
    answerIndex: 3,
    explanation: "useFetch is not a built-in React hook."
  },
  {
    question: "What is the correct syntax for an arrow function returning JSX?",
    options: [
      "const Comp = () => <div>Hello</div>;",
      "const Comp = () => {<div>Hello</div>};",
      "const Comp = () => { return <div>Hello</div> };",
      "Both A and C"
    ],
    answerIndex: 4,
    explanation: "Both are correct ways to return JSX from arrow functions."
  },
  {
    question: "What is a fragment used for in React?",
    options: [
      "Styling components",
      "Grouping elements without adding extra nodes",
      "Creating portals",
      "Handling events"
    ],
    answerIndex: 2,
    explanation: "Fragments group multiple elements without extra DOM wrappers."
  },
  {
    question: "Which npm package manager is an alternative to npm?",
    options: ["Yarn", "Bower", "Webpack", "Rollup"],
    answerIndex: 1,
    explanation: "Yarn is a popular alternative package manager."
  },
  {
    question: "What does npm run dev typically do in a Vite project?",
    options: ["Runs tests", "Starts the development server", "Builds production files", "Updates packages"],
    answerIndex: 2,
    explanation: "It runs the dev server with live reloading."
  },
  {
    question: "What is the purpose of eslint in a project?",
    options: ["Manage dependencies", "Run tests", "Lint and enforce code style", "Bundle code"],
    answerIndex: 3,
    explanation: "ESLint analyzes code for style and potential errors."
  },
  {
    question: "Which React concept allows state to persist across components without props?",
    options: ["Hooks", "Context API", "Redux", "Component State"],
    answerIndex: 2,
    explanation: "Context API shares state globally without props drilling."
  },
  {
    question: "What command installs a package and adds it to dependencies?",
    options: ["npm install package-name", "npm update package-name", "npm run package-name", "npm start package-name"],
    answerIndex: 1,
    explanation: "Installs and saves the package to package.json."
  },

];

const importQuestions = async () => {
  const collectionRef = collection(db, "questions");

  for (const q of questions) {
    await addDoc(collectionRef, q);
    console.log(`Imported: ${q.question}`);
  }

  console.log("All questions imported successfully!");
};

importQuestions();
<p align="center"><img src="react.png" width="150"></p>

<h1 align="center">The React Laboratory</h1>
<h3 align="center">Anything that needs exploring, experimenting and modulising in React</h2>

<br/>

<details open="open">
  <summary></summary>
  <ol>
    <li>
      <a href="#guideline">Guideline</a>
      <ul>
        <li>
          <a href="#use-of-create-react-app">Use of Create React App</a>
        </li>
        <li>
          <a href="#use-of-typescript">Use of Typescript</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#get-started">Get Started</a>
      <ul>
        <li>
          <a href="#customised-template">Customised template</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#structure">Structure</a>
      <ul>
        <li>
          <a href="#usage-as-submodule">Usage as submodule</a>
        </li>
      </ul>
    </li>
  </ol>
</details>

<br/>

# Guideline

## Use of [Create React App](https://create-react-app.dev/)

CRA provides the most simplest and minimal setup to create an environment for demonstrating an React component within a single page app. Hence it is mostly used within this workspace without concerns for bundling or other irrelevant background setups.

## Use of [Typescript](https://www.typescriptlang.org/)

Typescript provides static typing to Javascript to ensure types without additional code. This is useful especially for parameters passed into functions and components. Hence it is best to include it within the modulisation.

<br/>

# Get started

To start off, simply use the following command:

```
npx create-react-app <name> --template typescript
```

as per the offical website suggested to quickly setup a runnable environment.

## Customised template

A template is also provided [here](/template). It consists of a customised list of files generated from the above command. Copy these files into your new repository and proceed with the following:

- Rename all `<name>` and `<Full Name>` according to your needs.
- Install all the required dependencies by running the following command:
  ```
  npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/node @types/react @types/react-dom react react-dom react-scripts typescript --save-dev
  ```
  This will install the latest versions of all dependencies.

# Structure

Although each individual React component can have specific setups to cater various requirements, it is recommanded to follow a similar structure generated from `create-react-app`:

```
React Component
 ├─ public
 │   ├─ index.html
 │   └─ robot.txt
 ├─ src
 │   ├─ tests
 │   │   ├─ app.test.tsx
 │   │   └ ... other tests ...
 │   ├─ component.tsx
 │   ├─ index.tsx
 │   └ ... other helper files ...
 ├─ .gitignore
 ├─ package.json
 ├─ README.md
 └─ tsconfig.json
```

This setup acts as a demonstration of the React component implemented in `component.tsx` and demonstrated within `index.tsx`. Tests can also be implemented under the `tests` folder, and run by running `npm run test`.

## Usage as `submodule`

In order to use the React component as sub-module, the following setting must retain within `package.json`:

```json
  "main": "src/component.tsx",
```

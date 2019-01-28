# starter-react-components

## Installation

This module is installable through **npm**:

```sh
npm install starter-react-components
```

However, it is meant as a boilerplate repo for starting React components library projects:

```sh
git clone git@github.com:ravihamsa/react-starter-components.git
cd react-starter-components
rm -rf .git package-lock.json
# Now make it your own by replacing package.json and README.md
```

## Features

- Dev server (webpack)
- TypeScript
- CSS modules
- PostCSS
- React

## Usage

```jsx
import { Button } from "starter-react-components";

function App() {
  return <Button onClick={() => alert("Hi!")}>Say hi</Button>;
}
```

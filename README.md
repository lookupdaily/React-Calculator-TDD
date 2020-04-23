# React Calculator

A simple tutorial to introduce myself to test driven development in React.
Created following [this tutorial](https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/) from [testdriven.io](https://testdriven.io/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation instructions

1. Clone this repository
2. You can run using yarn or node. To set this up run either `brew install yarn` or `brew install node`

In the project directory, you can run: `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Testing

Testing is in Jest with Enzyme.

To run tests:

```shell
brew install node
brew install watchman
npm test
```


## Requirements

1. Can do four basic operations with keys for each (operator keys): addition, subtraction, multiplication, division
2. Has 12 keys that update the display: `0` through `9` (numbers), `.` (decimals), `ce` (backspace)
3. Has an `=` key to close an operation

## Functionality

1. When a number key is clicked, the calculator updates display to reflect the new value.
2. When an operator is clicked, the calculator saves the selected operator & and the current display value to memory and then updates the display with the new value entered
3. When `=` is clicked, the calculator takes the stored value, operator and current value and creates an output using these inputs

## App design

### Methods
|Function name    |Input       |Behaviour  |
|------------|-------------|-----------|
|updateDisplay|Number key  |Updates and renders the display value to the DOM|
|setOperator  |Operator key|Saves the chosen operator to the component state object|
|callOperator |Submit key  |Handles maths   |

### Attributes
|Variable name|Type|Purpose|
|---|---|---|
|displayValue |integer|input or computed value to be displayed|
|numbers|array of strings|stored values to be used for keys|
|operators|array of strings|stored values to be used for operator keys|
|selectedOperator|string|selected operation|
|storedValue|integer|input or computed value held in memory|

### Components
|Component name|Type |Renders |Receives (props) | 
|---|---|---|---|
|Calculator|Stateful|`Display`, `Keypad`| - |
|Display| Stateless| - |`displayValue`|
|Keypad|Stateless| - |`numbers`, `operators`, `setOperator`, `callOperator`, `updateDisplay`|
|Key|Stateless| - |`keyAction`|`keyType`|`keyValue`|



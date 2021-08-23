console.log("App is Running!!!");
const appRoot = document.getElementById('app');

let count = 0;

const reset = () => {
    count = 0;
    console.log("\tReset...");
    renderCounterApp();
};

const plusOne = () => {
    count += 1;
    console.log("\tplusOne...");
    renderCounterApp();
};

const minusOne = () => {
    count--;
    console.log("\tminusOne...");
    renderCounterApp();
}

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={plusOne}>+1</button><br></br>
            <button onClick={minusOne}>-1</button><br></br>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderCounterApp();

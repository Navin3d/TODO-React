console.log("built it.jsx is runnning");
const appRoot = document.getElementById('app');

let visiblity = false;

let handler = (() => {
    visiblity = !visiblity;
    console.log(visiblity);
    console.log("Button pressed...");

    renderApp();
});

const renderApp = (() => {
    const template = (
        <div>
            <h1>Sample App</h1>
            <button onClick={handler}>{visiblity ? "Hide details" : "Show details"}</button>
            {visiblity ? <p>You can see mee...</p> : ""}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
});

renderApp();

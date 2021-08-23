console.log("app is running!!!");
const appRoot = document.getElementById('app');

let user = {
    name: "Navin",
    city: ["London", "Australia"],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const opt = e.target.elements.option.value;
    
    if(opt) {
        user.city.push(opt);
        e.target.elements.option.value = "";

        console.log("\t",opt, "is added.");

        renderApp();
    }
};

const removeLast = () => {
    user.city.pop();
    console.log("\tThe last city is removed...");

    renderApp();
};

const removeAll = () => {
    user.city = [];
    console.log("\tAll the cities are removed...");

    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>Indecision App</h1>
            <p><b>User : </b>{user.name}</p>
            <p><b>{(user.city.length != 0) ? "The Favorite cities are :" : "There are no favorite cities." }</b></p>
            <ol>
                {user.city.map((option) =>
                <li key={option}>{option}</li>
                )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add a city</button>
                <button style={{display: (user.city.length === 0 || user.city.length === 1) ? "none" : ""}} onClick={removeLast}>Remove Last</button>
                <button style={{display: (user.city.length === 0 ) ? "none" : ""}} onClick={removeAll}>Remove All</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();

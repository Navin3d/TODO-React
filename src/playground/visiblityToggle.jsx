class VisiblityToggle extends React.Component {
    constructor() {
        super();
        this.details = this.details.bind(this);
        this.state = {
            visiblity: false,
        };
    }
    details() {
        this.setState((prevstate) => {
            return {
                visiblity: !(prevstate.visiblity),
            };
        });
        console.log("Details...", this.state.visiblity);
    }
    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.details}>{this.state.visiblity ? "Hide Details" : "Show Details"}</button>
                {this.state.visiblity && <p>You can see me...</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById('app'))

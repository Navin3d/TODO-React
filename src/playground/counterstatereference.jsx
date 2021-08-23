class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        console.log("Component did Mount...");
        try {
            const json = localStorage.getItem("count")
            const count = JSON.parse(json)
            if(count) 
                if(!isNaN(count))
                    this.setState(() => ({count}));
        } catch (e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevProps, previousState) {
        console.log("Component did Update...");
        if(previousState.count != this.state.count)
            localStorage.setItem("count", this.state.count)
    }
    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1,
            };
        });
        console.log(this.state.count);
    }
    minusOne() {
        this.setState((prevstate) => {
            return {
                count: prevstate.count-1,
            }
        })
        console.log(this.state.count);
    }
    reset() {
        this.setState(() => {
            return {
                count: 0,
            }
        });
        ///////WORST PRACTICE///////
            // this.setState({
            //     count: 0,
            // });
            // this.setState({
            //     count: this.state.count +1,
            // });
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}


// Counter.defaultProps = {
//     count: 10,
// };

ReactDOM.render(<Counter />, document.getElementById('app'));

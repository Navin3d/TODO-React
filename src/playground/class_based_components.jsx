console.log("app.jsx is running...")



class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{ this.props.title }</h1>
                <h3>{ this.props.subtitle }</h3>
            </header>
        );
    }
}



class Action extends React.Component { 
    constructor() {
        super();
        this.onWhattodo = this.onWhattodo.bind(this)
    }   
    onWhattodo() {
        console.log(this.props.notes[Math.floor(Math.random() * this.props.notes.length)]);
        return (this.props.notes) ? <p>{this.props.notes[Math.floor(Math.random() * this.props.notes.length)]}</p> : <p>Spend ur time Happy</p>;
    };
    render() {
        return (
            <div>
                <button onClick={this.onWhattodo}>{(this.props.hasNotes) ? "What should i Do?" : "😊 Spend the quality time with ur Family..."}</button>
                {/*(!this.props.hasNotes) ? <React.Fragment><br/><br/></React.Fragment> : ""*/}
            </div>
        );
    }
}



class Options extends React.Component {
    render() {
        return (
            <React.Fragment>
                { this.props.notes.map((note) => <p key={note}>{ note }</p>)}
                <button style={{display: (this.props.hasNotes) ? "" : "none"}}onClick={ this.props.deleteAll }>Remove All</button><br></br>
            </React.Fragment>
        );
    }
}



class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined,
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        const note = e.target.elements.notes.value.trim();
        const error = this.props.addNote(note);
        console.log(error);
        this.setState(() => {
            return {
                error
            }
        });
        console.log(this.state.error);
        e.target.elements.notes.value="";
    };
    render() {
        return (
            <React.Fragment>
                {this.state.error && <p><b>{this.state.error}</b></p>}
                <form onSubmit={ this.onFormSubmit }>
                    <input type="text" name="notes" required/>&nbsp;&nbsp;
                    <input type="submit" value="Add Note..."/>
                </form>
            </React.Fragment>
            
        );
    }
}



class IndecisionApp extends React.Component {
    constructor() {
        super();
        this.deleteAll = this.deleteAll.bind(this);
        this.addNote = this.addNote.bind(this);
        this.hasNotes = this.hasNotes.bind(this);
        this.state = {
            notes: [
                "Love Programming",
                "Love Maths",
            ]
        }
    };
    deleteAll() {
        this.setState(() => {
            return this.state.notes = [];
        });
    }
    addNote(newnote) {
        if(this.state.notes.indexOf(newnote) > -1) {
            return "This Work Already Exists."
        } else if (newnote === "") {
            return "This is Empty.."
        }
        this.setState(() => {
            console.log(newnote);
            return this.state.notes.push(newnote);
        });
    }
    hasNotes() {
        return this.state.notes.length > 0;
    };
    render() {        
        const title = "Indecision App";
        const subtitle = "Give ur life in the hands of Computer...";

        return (
            <div>
                <Header title={ title } subtitle={ subtitle }/>
                <Action notes={this.state.notes} hasNotes={this.hasNotes()}/>
                <Options notes={this.state.notes} hasNotes={this.hasNotes()} deleteAll={this.deleteAll}/>
                <AddOption addNote={this.addNote}/>
            </div>
        );
    }
}



ReactDOM.render(<User name="Navin" age={18}/>, document.getElementById('app'))

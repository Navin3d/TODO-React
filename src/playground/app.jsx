console.log("app.jsx is running...")


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
        </div>
    );
};

// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <h1>{ this.props.title }</h1>
//                 <h3>{ this.props.subtitle }</h3>
//             </header>
//         );
//     }
// }


const Action = (props) => {
    const onWhattodo = () => {
        console.log(props.notes[(Math.floor(Math.random() * props.notes.length))]);
    };
    return (
        <div>
            <button onClick={onWhattodo}>{(props.hasNotes) ? "What should i Do?" : "😊 Spend Time with Your Family."}</button>
        </div>
    );
};

// class Action extends React.Component { 
//     constructor() {
//         super();
//         this.onWhattodo = this.onWhattodo.bind(this)
//     }   
//     onWhattodo() {
//         console.log(this.props.notes[Math.floor(Math.random() * this.props.notes.length)]);
//         return (this.props.notes) ? <p>{this.props.notes[Math.floor(Math.random() * this.props.notes.length)]}</p> : <p>Spend ur time Happy</p>;
//     };
//     render() {
//         return (
//             <div>
//                 <button onClick={this.onWhattodo}>{(this.props.hasNotes) ? "What should i Do?" : "😊 Spend the quality time with ur Family..."}</button>
//                 {/*(!this.props.hasNotes) ? <React.Fragment><br/><br/></React.Fragment> : ""*/}
//             </div>
//         );
//     }
// }


const Notes = (props) => {
    return (
        <React.Fragment>
            <br/><b>{props.note}</b>&nbsp;
            <button
                onClick={() => props.remove(props.note)}
            >remove
            </button><br/>
        </React.Fragment>
    );
};

const ShowNotes = (props) => {
    return (
        <div>
            {props.notes.map((note) =>{
                return (
                <Notes
                    key={note}
                    remove={props.remove}
                    note={note}
                />
            )})}<br/>
            <button 
                style={{display: (props.hasNotes) || "none"}} 
                onClick={props.deleteAll}
            >Remove All
            </button>
        </div>
    );
};

// class Options extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 { this.props.notes.map((note) => <p key={note}>{ note }</p>)}
//                 <button style={{display: (this.props.hasNotes) ? "" : "none"}}onClick={ this.props.deleteAll }>Remove All</button><br></br>
//             </React.Fragment>
//         );
//     }
// }


// const AddNotes = (props) => {
//     let err;
//     let onFormSubmit = (e) => {
//         e.preventDefault();
//         const note = e.target.elements.inputNote.value.trim();
//         const error = props.addNote(note);
//         err = error;
//         console.log(error);
//         e.target.elements.inputNote.value = ""
//     };

//     return (
//         <div>
//             <br/>
//             {err && <p>{err}</p>}
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="inputNote" required/>&nbsp;&nbsp;
//                 <input type="submit" value="Add Note"/>
//             </form>
//             {console.log("hi ",err)}
//         </div>
//     );
// };

class AddNotes extends React.Component {
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
        this.setState(() => ({error}));
        console.log("Error in State : ", this.state.error);
        e.target.elements.notes.value="";
    };
    render() {
        return (
            <React.Fragment>
                <p><b>{this.state.error && this.state.error}</b></p>
                <form onSubmit={ this.onFormSubmit }>
                    <input type="text" name="notes" required/>&nbsp;&nbsp;
                    <input type="submit" value="Add Note..."/>
                </form>
            </React.Fragment>
            
        );
    }
}


// const IndecisionApp = () => {
//     const title = "Indecision App";
//     const subTitle = "Give your life in the hands of Computer.";

//     let notes = [
//         "Love Mathematics.",
//         "Love Engneering."
//     ];

//     const hasNotes = () => {return notes.length > 0};

//     const clearNotes = () => {
//         notes=[];
//         console.log(notes);
//     };

//     const addNote = (newNote) => {
//         if (notes.indexOf(newNote) > -1) {
//             return "This Note Already Exists...";
//         } else if (newNote === "") {
//             return "The Note is empty...";
//         }
//         notes.push(newNote);
//         console.log(newNote);
//         console.log(notes);
//     };

//     return (
//         <React.Fragment>            
//             <Header title={title} subtitle={subTitle}/>
//             <Action notes={notes} hasNotes={hasNotes()}/>
//             <ShowNotes clearNotes={clearNotes} notes={notes} hasNotes={hasNotes()}/>
//             <AddNotes addNote={addNote}/>
//         </React.Fragment>
//     );
// };

 class IndecisionApp extends React.Component {
     constructor() {
         super();
         this.deleteAll = this.deleteAll.bind(this);
         this.addNote = this.addNote.bind(this);
         this.hasNotes = this.hasNotes.bind(this);
         this.remove = this.remove.bind(this);
         this.state = {
             notes: []
         }
     };
     componentDidMount() {
        console.log("componentDidMount...")
        try {
            const json = localStorage.getItem("notes")
            const notes = JSON.parse(json)

            if(notes)
                this.setState(() => ({notes}));
            console.log("Fetching Data...")
            console.log(notes)
        } catch (e) {

        }
     }
     componentDidUpdate(prevProps, previousState) {
        console.log("componentDidUpdate...")
         if(previousState.notes.length != this.state.notes.length) {
             const json = JSON.stringify(this.state.notes);
             localStorage.setItem("notes", json);
             console.log("Saving Data...");
         }
     }
     componentWillUnmount() {
         console.log("componentWillUnmount...")
     }
     deleteAll() {
         this.setState(() => ({notes: []}));
     }
     addNote(newnote) {
         if(this.state.notes.indexOf(newnote) > -1) {
             return "This Work Already Exists."
         } else if (newnote === "") {
             return "This is Empty.."
         }
         this.setState((previousState) => ({notes: previousState.notes.concat(newnote)}));
     }
     hasNotes() {
         return this.state.notes.length > 0;
     };
     remove(removalnote) {
         console.log("delete...", removalnote);
         this.setState((previousState) => ({
            notes: previousState.notes.filter((note) => {
                console.log("Filter", note);
                return removalnote !== note;
            })
         })
         );
     }
     render() {        
         const title = "Indecision App";
         const subtitle = "Give ur life in the hands of Computer...";

         return (
             <div>
                 <Header title={ title } subtitle={ subtitle }/>
                 <Action notes={this.state.notes} hasNotes={this.hasNotes()}/>
                 <ShowNotes notes={this.state.notes} hasNotes={this.hasNotes()} remove={this.remove} deleteAll={this.deleteAll}/>
                 <AddNotes addNote={this.addNote}/>
             </div>
         );
     }
 }


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))

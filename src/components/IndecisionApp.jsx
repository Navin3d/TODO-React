import React from 'react';

import Header from './Header.jsx';
import Action from './Action.jsx';
import ShowNotes from './ShowNotes.jsx';
import AddNotes from './AddNotes.jsx';

export default class IndecisionApp extends React.Component {
    state = {
        notes: []
    }
    
    deleteAll = () => {
        this.setState(() => ({notes: []}));
    }
    addNote = (newnote) => {
        if(this.state.notes.indexOf(newnote) > -1) {
            return "This Work Already Exists."
        } else if (newnote === "") {
            return "This is Empty.."
        }
        this.setState((previousState) => ({notes: previousState.notes.concat(newnote)}));
    }
    hasNotes = () => {
        return this.state.notes.length > 0;
    };
    remove = (removalnote) => {
        console.log("delete...", removalnote);
        this.setState((previousState) => ({
           notes: previousState.notes.filter((note) => {
               console.log("Filter", note);
               return removalnote !== note;
           })
        }));
    }

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

    render() {        
        const title = "Indecision App";
        const subtitle = "Give ur life in the hands of Computer...";

        return (
            <div>
                <div className="container">
                    <Header title={ title } subtitle={ subtitle }/>
                    <Action notes={this.state.notes} hasNotes={this.hasNotes()}/>
                    <div className="widget">
                        <ShowNotes notes={this.state.notes} hasNotes={this.hasNotes()} remove={this.remove} deleteAll={this.deleteAll}/>
                        <AddNotes addNote={this.addNote}/>
                    </div>
                </div>
            </div>
        );
    }
}

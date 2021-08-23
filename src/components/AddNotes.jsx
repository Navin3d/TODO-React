import React from 'react';

export default class AddNotes extends React.Component {
    state = {
        error: undefined,
    }

    onFormSubmit = (e) => {
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
                <p className="add-option-error"><b>{this.state.error && this.state.error}</b></p>
                <form className="add-option" onSubmit={ this.onFormSubmit }>
                    <input className="add-option__input" type="text" name="notes" required/>&nbsp;&nbsp;
                    <input className="button button--add" type="submit" value="Add Note..."/>
                </form>
            </React.Fragment>
            
        );
    }
}

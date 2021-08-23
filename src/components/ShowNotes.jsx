import React from 'react';

import Notes from './Notes.jsx';

const ShowNotes = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__tittle">Your Notes</h3>
                <button 
                    className="button button--link"
                    style={{display: (props.hasNotes) || "none"}} 
                    onClick={props.deleteAll}
                >
                    Remove All
                </button>
            </div>
            {props.hasNotes ? props.notes.map((note, index) =>{
                return (
                    <Notes
                        key={note}
                        count={index + 1}
                        remove={props.remove}
                        note={note}
                    />
                )
            }): <p className="widget__message">Plz Enter a Note Here...</p>}<br/>
        </div>
    );
};

export default ShowNotes;

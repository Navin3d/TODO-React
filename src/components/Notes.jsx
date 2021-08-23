import React from 'react';

const Notes = (props) => {
    return (
        <div className="options">
            <br/><p className="option__text">{props.count} . {props.note}</p>&nbsp;
            <button
                className="button button--link"
                onClick={() => props.remove(props.note)}
            >
                remove
            </button><br/>
        </div>
    );
};

export default Notes;

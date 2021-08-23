import React from 'react';

const Action = (props) => {
    const onWhattodo = () => {
        console.log(props.notes[(Math.floor(Math.random() * props.notes.length))]);
    };
    return (
        <div>
            <button 
                className="big-button"
                onClick={onWhattodo}>{(props.hasNotes) ? "What should i Do?" : "😊 Spend Time with Your Family."}
            </button>
        </div>
    );
};

export default Action;

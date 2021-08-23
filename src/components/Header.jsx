import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__tittle">{props.title}</h1>
                <h2 className="header__subtittle">{props.subtitle}</h2>
            </div>
        </div>
    );
};

export default Header;

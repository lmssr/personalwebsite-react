import React from 'react';

import classes from './Header.module.css';


const header = (props) => {
    return(
        <header className={classes.Header} style={{backgroundColor: props.color}}>
        I am a header
        </header>
    );
}

export default header;

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import classes from './Footer.module.css';

const footer = (props) => {
    return(
        <footer className={classes.Footer}>
            <SocialIcon url="http://twitter.com/jaketrent" />
            <SocialIcon url="http://facebook.com/jaketrent" />
            <SocialIcon url="http://linkedin.com/jaketrent" />
            <SocialIcon url="http://github.com/jaketrent" />
        </footer>
    );
}

export default footer;

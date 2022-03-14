import React from 'react';
import {Link} from "react-router-dom";
import classes from "./BackButton.module.css";
import arrow from "../../images/icon-arrow-right.svg";

const BackButton = () => {

    return (
        <Link to={'/'} className={classes.BackButton}>
            <img src={arrow}  className={classes.Arrow} alt=""/>
            <span>Go back</span>
        </Link>
    );
};

export default BackButton;
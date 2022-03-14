import React from 'react';
import classes from './Header.module.css'

const Header = (props) => {
    const {count} = props;
    return (
        <div className={classes.Header}>
            <div className={classes.Text}>
                <h1 className={classes.Title}>Invoices</h1>
                {count > 0 ? <p className={classes.Subtitle}>There are {count} total invoices.</p> : null}
            </div>
        </div>
    );
};

export default Header;
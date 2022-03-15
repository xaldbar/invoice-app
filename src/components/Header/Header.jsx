import React, {useState} from 'react';
import classes from './Header.module.css'
import {useSelector} from "react-redux";
import {selectInvoicesInfo} from "../../features/invoices/invoices-slice";
import arrowIcon from '../../images/icon-arrow-down.svg';
import plusIcon from '../../images/icon-plus.svg';


const Header = (props) => {
    const {qty: count} = useSelector(selectInvoicesInfo);
    const [opened, setOpened] = useState(false);

    const filterClasses = [classes.Filter];

    if (opened) {
        filterClasses.push(classes.opened);
    }

    const openHandler = () => {
        setOpened(state => !state);
    }

    return (
        <div className={classes.Header}>
            <div className={classes.Text}>
                <h1 className={classes.Title}>Invoices</h1>
                {count > 0 ? <p className={classes.Subtitle}>There are {count} total invoices.</p> : null}
            </div>
            <button className={filterClasses.join(' ')} onClick={openHandler}>
                Filter <span>by status</span>
                <img src={arrowIcon} alt=""/>
            </button>
        </div>
    );
};

export default Header;
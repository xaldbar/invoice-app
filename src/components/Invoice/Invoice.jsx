import React from 'react';
import classes from './Invoice.module.css'
import {Link} from "react-router-dom";
import StatusBage from "../../UI/statusBage/StatusBage";
import {invoiceById} from "../../api/api";
import arrowIcon from "../../images/icon-arrow-right.svg"
import InvoiceId from "../../UI/InvoiceId/InvoiceId";

const Invoice = (params) => {
    const {id, date, name, status, cost} = params;
    return (
        <Link to={`${invoiceById(id)}`} className={classes.Link}>
            <div className={classes.Invoice}>
                <InvoiceId id={id}/>
                <div className={classes.date}>{date}</div>
                <div className={classes.name}>{name}</div>
                <div className={classes.cost}>£{cost}</div>
                <StatusBage status={status}/>
                <img src={arrowIcon} alt=""/>
            </div>
        </Link>
    );
};

export default Invoice;
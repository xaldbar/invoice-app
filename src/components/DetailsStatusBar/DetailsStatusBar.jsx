import React from 'react';
import classes from './DetailsStatusBar.module.css';
import StatusBage from "../../UI/statusBage/StatusBage";
import * as api from '../../api'
import { useNavigate } from "react-router-dom";


const DetailsStatusBar = ({status, id, setPaidStatus}) => {
    let navigate = useNavigate();
    const deleteInvoiceHandler = () => {
        api.client.delete(api.invoiceById(id))
            .then(response => console.log(response))
            .catch(error => console.log(error.message));
        navigate('/');
    };

    const makePaidHandler = () => {
        setPaidStatus();
    }

    return (
        <div className={classes.DetailsStatusBar}>
            <div className={classes.block}>
                <span>Status</span>
                <StatusBage status={status}/>
            </div>
            <div className={classes.block}>
                <button className={classes.edit}>Edit</button>
                <button className={classes.delete} onClick={deleteInvoiceHandler}>Delete</button>
                {status === 'paid' ? null : <button className={classes.paid} onClick={makePaidHandler}>Mark as Paid</button>}
            </div>
        </div>
    );
};

export default DetailsStatusBar;
import React from 'react';
import classes from './DetailsStatusBar.module.css';
import StatusBage from "../../UI/statusBage/StatusBage";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteInvoiceById, setDetailsStatusById} from "./details-silce";


const DetailsStatusBar = ({status, id}) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteInvoiceHandler = () => {
        dispatch(deleteInvoiceById(id));
        navigate('/');
    };

    const makePaidHandler = () => {
        dispatch(setDetailsStatusById({id, status: 'paid'}));
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
                {status === 'paid' ? null :
                    <button className={classes.paid} onClick={makePaidHandler}>Mark as Paid</button>}
            </div>
        </div>
    );
};

export default DetailsStatusBar;
import React from 'react';
import classes from './StatusBage.module.css';

const getStatusClass = (status) => {
    return classes[status] || classes.draft;
}

const StatusBage = ({status} = 'draft') => {
    const statusClass = getStatusClass(status);
    const badgeClasses = [classes.StatusBage, statusClass].join(" ");
    return (
        <div className={badgeClasses}>
            <span className={classes.bullet}></span>
            <div className={classes.status}>{status}</div>
        </div>
    );
};

export default StatusBage;
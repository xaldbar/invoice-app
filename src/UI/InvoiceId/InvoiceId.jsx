import React from 'react';
import classes from "./InvoiceId.module.css";

const InvoiceId = ({id, size='normal'}) => {
    const clsId = [classes.id];
    const clsHash = [classes.idHash];
    clsId.push(classes[size])
    clsHash.push(classes[size])
    return (
        <h2 className={clsId.join(' ')}><span className={clsHash.join(' ')}>#</span>{id}</h2>

    );
};

export default InvoiceId;
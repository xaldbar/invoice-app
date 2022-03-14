import React, {useEffect, useState} from 'react';
import classes from './HomePage.module.css';
import {allInvoices, client} from "../../api";
import InvoicesList from "../../components/InvoicesLIst/InvoicesList";
import Header from "../../components/Header/Header";

const HomePage = () => {
    const [invoices, setInvoices] = useState([]);
    useEffect(() => {
        client.get(allInvoices)
            .then(({data}) => setInvoices(data));
    }, [invoices.length]);



    return (
        <div className={classes.HomePage}>
            <Header count={invoices.length}/>
            <InvoicesList invoices={invoices}/>
        </div>
    );
};

export default HomePage;
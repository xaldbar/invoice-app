import React, {useEffect, useState} from 'react';
import classes from './HomePage.module.css';
import {allInvoices, client} from "../../api";
import InvoicesList from "../../features/invoices/InvoicesList";
import Header from "../../components/Header/Header";

const HomePage = () => {
    return (
        <div className={classes.HomePage}>
            <Header/>
            <InvoicesList/>
        </div>
    );
};

export default HomePage;
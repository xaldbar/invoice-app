import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {client, invoiceById} from "../../api";
import Loader from "../../UI/Loader/Loader";
import Details from "../../components/Details/Details";
import classes from "./InvoicePage.module.css";

const InvoicePage = () => {
    const {id} = useParams();
    const [invoice, setInvoice] = useState(null);

    const setPaidStatus = () => {
        const newInvoice = JSON.parse(JSON.stringify(invoice));
        newInvoice.status = 'paid';
        setInvoice(newInvoice);
        client.patch(invoiceById(id), {status: 'paid'})
    }


    useEffect(() => {
        client.get(invoiceById(id))
            .then(({data}) => setInvoice(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div className={classes.InvoicePage}>
            {invoice === null ? <Loader/> : <Details
                id={invoice.id}
                date={invoice.date}
                name={invoice.name}
                description={invoice.description}
                status={invoice.status}
                address={invoice.address}
                email={invoice.email}
                items={invoice.items}
                setPaidStatus={setPaidStatus}
            />}
        </div>
    );
};

export default InvoicePage;
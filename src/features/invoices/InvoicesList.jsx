import React from 'react';
import Invoice from "../../components/Invoice/Invoice";
import Loader from "../../UI/Loader/Loader";
import {useSelector} from "react-redux";
import {useInvoices} from "./use-invoices";

const InvoicesList = () => {
    const [invoices, {error, status}] = useInvoices();
    console.log('render invoices lsit');
    return (
        <>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <Loader/>}

            {status === 'received' && invoices.map((invoice) =>
                <Invoice
                    key={invoice.id}
                    id={invoice.id}
                    date={invoice.date.payment}
                    name={invoice.name}
                    cost={invoice.items.total}
                    status={invoice.status}
                />
            )}
        </>
    );
};

export default InvoicesList;
import React from 'react';
import Invoice from "../Invoice/Invoice";
import Loader from "../../UI/Loader/Loader";

const InvoicesList = ({invoices}) => {
    return (
        <>
            {invoices.length === 0 && <Loader/>}
            {invoices.map((invoice) =>
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
import React from 'react';

import BackButton from "../../UI/BackButton/BackButton";

import {useDetails} from "./use-details";
import DetailsBody from "./DetailsBody";
import Loader from "../../UI/Loader/Loader";


const InvoiceDetails = (props) => {
    const {status, error, currentInvoice} = useDetails(props.id);


    return (
        <>
            {status === 'loading' && <Loader/>}
            {error && <h2>{error}</h2>}
            {currentInvoice &&
                <>
                    <BackButton/>
                    <DetailsBody
                        id={currentInvoice.id}
                        date={currentInvoice.date}
                        name={currentInvoice.name}
                        description={currentInvoice.description}
                        address={currentInvoice.address}
                        status={currentInvoice.status}
                        email={currentInvoice.email}
                        items={currentInvoice.items}
                    />
                </>}
        </>
    );
};

export default InvoiceDetails;
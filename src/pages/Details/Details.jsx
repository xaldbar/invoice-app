import classes from "./Details.module.css";
import {useParams} from "react-router-dom";
import InvoiceDetails from "../../features/details/InvoiceDetails";

const Details = () => {
    const {id} = useParams();
    return (
        <div className={classes.InvoicePage}>
            <InvoiceDetails id={id}/>
        </div>
    );
};

export default Details;
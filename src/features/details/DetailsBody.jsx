import React from 'react';
import DetailsStatusBar from "./DetailsStatusBar";
import classes from "./InvoiceDetails.module.css";
import InvoiceId from "../../UI/InvoiceId/InvoiceId";

const DetailsBody = (props) => {
    const {
        id,
        date,
        name,
        description,
        address,
        status,
        email,
        items,
    } = props;
    return (
        <>
            <DetailsStatusBar status={status} id={id}/> {/* SET PAID STATUS DELETE */}
            <div className={classes.Details}>
                <div className={classes.idBLock}>
                    <InvoiceId id={id} size={'big'}/>
                    <div className={classes.description}>{description}</div>
                </div>
                <div className={classes.address}>
                    <span>{address.from.street}</span>
                    <span>{address.from.city}</span>
                    <span>{address.from.postCode}</span>
                    <span>{address.from.country}</span>
                </div>

                <div>
                    <div className={classes.dateBlock}>
                        <span className={classes.dateHeader}>Invoice Date</span>
                        <span className={classes.dateContent}>{date.invoice}</span>
                    </div>
                    <div className={classes.dateBlock}>
                        <span className={classes.dateHeader}>Payment Due</span>
                        <span className={classes.dateContent}>{date.payment}</span>
                    </div>
                </div>

                <div className={[classes.address, classes.addressLeft].join(" ")}>
                    <span className={classes.dateHeader}>Bill To</span>
                    <span className={classes.addressName}>Alex Grim</span>
                    <span>{address.from.street}</span>
                    <span>{address.from.city}</span>
                    <span>{address.from.postCode}</span>
                    <span>{address.from.country}</span>
                </div>

                <div>
                    <span className={classes.dateHeader}>Sent to</span>
                    <span className={classes.email}>{email}</span>
                </div>
                <div className={classes.tableWrapper}>
                    <table className={classes.itemsTable}>
                        <thead className={classes.tableHead}>
                        <tr>
                            <th>Item Name</th>
                            <th>QTY.</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody className={classes.tableBody}>
                        {items.list.map((item, index) => <tr className={classes.tableItem} key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>£{item.price}</td>
                                <td>£{item.price * item.qty}</td>
                            </tr>
                        )}
                        </tbody>
                        <tfoot className={classes.tableFooter}>
                        <tr>
                            <td>Amount Due</td>
                            <td></td>
                            <td></td>
                            <td>£{items.total}</td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DetailsBody;
import {useDispatch, useSelector} from "react-redux";
import {clearInvoices, loadInvoices, selectAllInvoices, selectInvoicesInfo} from "./invoices-slice";
import {useEffect} from "react";


export const useInvoices = () => {
    const dispatch = useDispatch();
    // const controls = useSelector(selectControls);
    const invoices = useSelector(selectAllInvoices);
    const {status, error, qty} = useSelector(selectInvoicesInfo);

    useEffect(() => {
        if (!qty) {
            dispatch(loadInvoices());
        }

    }, [qty, dispatch]);

    return [invoices, {status, error, qty}];
}

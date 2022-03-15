import {useDispatch, useSelector} from "react-redux";
import {clearDetails, loadInvoiceById, selectDetails} from "./details-silce";
import {useEffect} from "react";

export const useDetails = (id) => {
    const dispatch = useDispatch();
    const details = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadInvoiceById(id));

        return () => {
            dispatch(clearDetails());
        }
    }, [id, dispatch]);

    return details;
};
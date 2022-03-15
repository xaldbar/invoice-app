import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {deleteInvoiceFromList} from "../invoices/invoices-slice";


const initialState = {
    currentInvoice: null,
    status: 'idle',
    error: null,
};


export const loadInvoiceById = createAsyncThunk(
    '@@details/load-details',
    (id, {extra: {client, api}}) => {
        return client.get(api.invoiceById(id));
    }
);

export const setDetailsStatusById = createAsyncThunk(
    '@@details/set-details-status',
    ({id, status}, {extra: {client, api}}) => {
        return client.patch(api.invoiceById(id), {status});
    }
);

export const deleteInvoiceById = createAsyncThunk(
    '@@details/delete-invoice',
    (id, {extra: {client, api}, dispatch}) => {
        console.log('deleteinvoicebyid')
        dispatch(deleteInvoiceFromList(id));
        return client.delete(api.invoiceById(id));
    }
);


const detailsSlice = createSlice({
    name: '@@details',
    initialState,
    reducers: {
        clearDetails: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadInvoiceById.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadInvoiceById.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error;
            })
            .addCase(loadInvoiceById.fulfilled, (state, action) => {
                state.status = 'idle';
                state.currentInvoice = action.payload.data;
            })
            .addCase(setDetailsStatusById.fulfilled, (state, action) => {
                state.currentInvoice.status = action.payload.data.status;
            })
    },
});

export const detailsReducer = detailsSlice.reducer;
export const {clearDetails} = detailsSlice.actions;

export const selectDetails = (state) => state.details;

export const selectDetailsInfo = (state) => ({
    status: state.details.status,
    error: state.details.error,
});
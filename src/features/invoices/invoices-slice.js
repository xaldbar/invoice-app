import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadInvoices = createAsyncThunk(
    '@@invoices/load-invoices',
    (_, {
        extra: {client, api},
    }) => {
        return client.get(api.allInvoices);
    }
);


const initialState = {
    list: [],
    status: 'idle',
    error: null,
};

const invoicesSlice = createSlice({
        name: '@@invoices',
    initialState,
    reducers: {
        deleteInvoiceFromList: (state, action) => {
            state.list = state.list.filter(invoice => invoice.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadInvoices.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadInvoices.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error;
            })
            .addCase(loadInvoices.fulfilled, (state, action) => {
                state.status = 'received';
                state.list = action.payload.data;
                state.error = null;
            })
    }
});

export const invoicesReducer = invoicesSlice.reducer;
export const {deleteInvoiceFromList} = invoicesSlice.actions;
// selectors
export const selectInvoicesInfo = (state) => ({
    status: state.invoices.status,
    error: state.invoices.error,
    qty: state.invoices.list.length
})

export const selectAllInvoices = (state) => state.invoices.list;


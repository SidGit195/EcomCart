import { createSlice } from '@reduxjs/toolkit'


const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,           // false: 'PENDING' and true: 'DONE'  || server call karega agar successfully data aagya to true kar dega
        currentlyFetching: false,   // when call start then true or when ends false
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true;
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true;
        },
        markFetchingFinished: (state) => {
            state.currentlyFetching = false;
        }
    }
});


export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from 'react-toastify'

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}


const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id == action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id != action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state, action) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast: () => {
            toast('Added to Collection ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        },
        removeToast: () => {
            toast.error('Removed from collection', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        },


    }
})

export const {removeToast, addedToast, addCollection, removeCollection, clearCollection } = collectionSlice.actions;

export default collectionSlice.reducer;
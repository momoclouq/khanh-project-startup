import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount : 0,
};

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers:{
//         addToCart(state, action) {
//             state.cartItem.push(action.payload);
//         },
//     }
// })

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action) {
            const itemIndex = state.cartItem.findIndex(
                (item) => item.courseId === action.payload.courseId
            );
            if (itemIndex >= 0 ) {
                toast.info(` ${action.payload.name} already in cart`, {
                    position: "bottom-left",
                })
            } else{
                let tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItem.push(tempProduct);
                toast.success(`added ${action.payload.name} course to cart`, {
                    position: "bottom-left",
                })
            }

            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));

        },
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer
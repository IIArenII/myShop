import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items : [],
    cartTab : true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }else{
                state.items.push({productId, quantity});
            }
            
        },
        changeQ(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (quantity > 0){
                state.items[indexProductId].quantity = quantity;
            }else{
                state.items = state.items.filter(item => item.productId !== productId)
            }
        },
        openCartTab(state) {
            state.cartTab = !state.cartTab;
        } 
        

    }
})
export const {addToCart, openCartTab, changeQ} = cartSlice.actions;
export default cartSlice.reducer;
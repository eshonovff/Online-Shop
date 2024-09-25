import { createSlice } from "@reduxjs/toolkit"
import { GetCategory, getCategoryById, getProducts,GetProductsbyId, getProductsCart } from "../Api/products/product"

const initialState = {
    data:[],
    cart:[],
    cnt:null,
    byID:[],
    category:[],
    wishlist:[]

}

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: { 
        setWishList: (state, action) =>
        {
            state.wishlist = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(GetProductsbyId.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getProductsCart.fulfilled, (state, action) => {
            state.cart = action.payload
            state.cnt = action.payload.length
        })
        builder.addCase(getCategoryById.fulfilled, (state, action)=> {
            state.byID = action.payload
        } )
        builder.addCase(GetCategory.fulfilled, (state, action)=> {
            state.category = action.payload
        } )
    }
})
 
export const {setWishList} = counterSlice.actions
export default counterSlice.reducer
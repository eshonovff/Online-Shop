import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
 
 

export const getProducts = createAsyncThunk("counterSlice/getProducts", async () => {
    try {
        let {data} = await axiosRequest.get("/Product/get-products")
        return data.data.products;
        
    } catch (error) {
        console.error(error);
        
    }
})








//    get PRoduct by id

export const GetProductsbyId = createAsyncThunk("counterSlice/GetProductsbyID", async(id)=>{
    try {
        const { data } = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`);   
        console.log(data)
        return data
        // return data.data.products;   
    } catch (error) {
        console.error(error);
    }
})


//  CART 


//  data Product Cart
 

export const getProductsCart = createAsyncThunk(
    "counterSlice/getProductsCart",async()=>{
        try {
            const {data} = await axiosRequest.get("/Cart/get-products-from-cart")            
            return data?.data[0]?.productsInCart
        } catch (error) {
            console.error(error);
            
        }
    }
)


//  add to cart Product  

export const addCartProducts = createAsyncThunk(
    "counter/addCartProducts",
    async (id, { dispatch }) => {
      try {
        const { data } = await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`);
  
        dispatch(getProducts());
        return data;
      } catch (error) {
        
        console.error(error);
      }
    }
  );

  

//    delete product from cart

  export const deleteTodo = createAsyncThunk(
    "counterSlice/deleteTodo",
      async (id, { dispatch }) => {
          try {
          const{data}= await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`);
   
              dispatch(getProductsCart());
              return data;
          } catch (error) {
           
              console.error("Error deleting data:", error);
              throw error;
          }
      }
  );


//    delete all product in cart 



export const deleteAllProducts = createAsyncThunk("counterSlice/deleteAllProducts", async ( _, {dispatch}) => {
    try {
      const { data } = await axiosRequest.delete(`/Cart/clear-cart`);
      dispatch(getProductsCart());
     
      return data;
    } catch (error) {
      console.error(error);
     
      throw error;
    }
  }
);



//  increase product 
export const increaseProductQuantity = createAsyncThunk("counterSlice/increaseProductQuantity", async (id, { dispatch }) => {
    try {
        const {data} = await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`);
        dispatch(getProductsCart());
        return data
    } catch (error) {
        console.error(error);
    }
})

export const reduceProductQuatity = createAsyncThunk ("counterSlice/reduceProductQuatity", async (id, { dispatch }) => {
    try {
        const {data} = await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`);
        dispatch(getProductsCart())
        return data
    } catch (error) {
        console.error(error);
        
    }
})

//  get Category 

export const GetCategory = createAsyncThunk('counterSlice/GetCategory',async()=>{
  try {
      const {data} = await axiosRequest('/Category/get-categories')
      return data.data
  } catch (error) {
      console.error(error)
  }
})






//  getpriduct by id 

export const getCategoryById = createAsyncThunk("counterSlice/getCategoryById", async ( id ) => {
  try {
    const { data } = await axiosRequest.get(`/Category/get-category-by-id?id=${id}`)
    console.log("GETBYID",data.data);
    return data.data
  } catch (error) {
    console.error(error);
  }
})

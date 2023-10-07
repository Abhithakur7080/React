//GETTING @reactjs/toolkit COMPONENTS
import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

//GETTING TOAST
import { toast } from 'react-toastify';

//MAKING INITIAL STATE
const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: false,
  filteredProducts: [],
  searchQuery: "",
  pricefilter: 1000,
  selectedCatagories: []
};

// define and export products using async thunk API below
export const getItems = createAsyncThunk(
  "products/getItems",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products.");
      }
      const data = await response.json();
      thunkAPI.dispatch(fetchSuccess(data));
    } catch (error) {
      thunkAPI.dispatch(fetchError());
      toast.error("Product Fetch error. Please check your API");
    }
  }
)

//making product reducer
const productSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart: (state, action) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    fetchError: (state, action) => {
      state.error = true;
      state.isLoading = false;
    },
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setPricefilter: (state, action) => {
      state.pricefilter = action.payload
    },
    setSelectedCatagories: (state, action) => {
      state.selectedCatagories = action.payload
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = state.products.filter((product) => {
        //filtered products
        const matchSearch = product.title.toLowerCase().includes(state.searchQuery.toLowerCase());
        const matchPrice = product.price <= state.pricefilter;

        const matchCategory = state.selectedCatagories.length === 0 || state.selectedCatagories.some((category) => product.category.toLowerCase() === category.toLowerCase());
        return matchCategory && matchSearch && matchPrice;
      })
    }
  }
});
//export reducer
export const productReducer = productSlice.reducer;
//export actions
export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  setSearchQuery,
  setPricefilter,
  setSelectedCatagories,
  setFilteredProducts
} = productSlice.actions;
//export selector(states)
export const productSelector = (state) => state.productReducer;
import cogoToast from 'cogo-toast';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, WishlistState } from '../../types/RootStateTypes';

const initialState: WishlistState = {
  wishlistItems: []
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      const isInWishlist = state.wishlistItems.findIndex(item => item.id === action.payload.id);
      if (isInWishlist > -1) {
        cogoToast.info("Product already in wishlist", { position: "bottom-left" });
      } else {
        state.wishlistItems.push(action.payload);
        cogoToast.success("Added To Wishlist", { position: "bottom-left" });
      }
    },
    deleteFromWishlist(state, action: PayloadAction<string>) {
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
      cogoToast.error("Removed From Wishlist", { position: "bottom-left" });
    },
    deleteAllFromWishlist(state) {
      state.wishlistItems = [];
    }
  },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

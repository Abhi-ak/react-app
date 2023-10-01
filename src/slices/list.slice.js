import { createSlice } from "@reduxjs/toolkit";

import api, { LIST_API } from "../utils/axios";

const initialState = {
  loading: true,
  list: {},
};

const session = createSlice({
  name: "list",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setListData: (state, action) => {
      state.list = action.payload.data;
    },
  },
});

export const { setLoading, setListData } = session.actions;
export default session.reducer;

export const fetchList = () => async (dispatch) => {
  try {
    dispatch(setLoading({ loading: true }));
    const response = await api.get(LIST_API);
    if (response) {
      dispatch(setListData({ data: response.data }));
      dispatch(setLoading({ loading: false }));
    }
  } catch (error) {
    dispatch(setLoading({ loading: false }));
  }
};

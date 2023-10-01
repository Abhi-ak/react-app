import { combineReducers } from '@reduxjs/toolkit'

import listReducer from '../slices/list.slice'

const reducerList = {
  list: listReducer
}

export default combineReducers(reducerList)

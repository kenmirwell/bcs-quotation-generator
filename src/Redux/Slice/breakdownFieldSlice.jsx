import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const fieldItem = {
  id: null,
  package: null,
  type: null,
  amount: null,
  totalPrice: null,
  additionals: [],
  remarks: null
}

export const breakdownFieldSlice = createSlice({
  name: 'breakdownField',
  initialState: {
    breakdownItem: {
      package: {title: null, value: null},
      type: {title: null, value: null},
    }
  },
  reducers: {
    selectedPackage: (state, action) => {
      // state.breakdownItem[action.payload.key] = {
      //   title: action.payload.title,
      //   value: action.payload.value,
      // }
      // state.breakdownItem.type = {title: null, value: null}
    },
    setFieldsData: (state, action) => {
      console.log("state", state)
      state.breakdownItem[action.payload.key] = {
        title: action.payload.title,
        value: action.payload.value,
      };

      // create another action for this one
      // state.breakdownItem = {
      //   ...state.breakdownItem,         
      //   package: {                     
      //     title: action.payload.title,
      //     value: action.payload.value,
      //   }
      // };
    }
  },
})

export const { selectedPackage, setData, setFieldsData } = breakdownFieldSlice.actions

export default breakdownFieldSlice.reducer
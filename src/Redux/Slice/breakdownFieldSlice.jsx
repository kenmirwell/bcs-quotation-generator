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
      title: null,
      value: null
    }
  },
  reducers: {
    selectedPackage: (state, action) => {
      
    },
    setData: (state, action) => {
      state.breakdownItem = action.payload;
    }
  },
})

export const { selectedPackage, setData } = breakdownFieldSlice.actions

export default breakdownFieldSlice.reducer
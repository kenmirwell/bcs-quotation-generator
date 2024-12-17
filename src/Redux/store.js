import { configureStore } from '@reduxjs/toolkit'
import breakdownFieldSlice from './Slice/breakdownFieldSlice'


const store = configureStore({
    reducer: {
      breakdownField: breakdownFieldSlice,
    },
  })

export default store;

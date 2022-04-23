import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   dataForm: []
}


const bankSlice = createSlice({
   name: 'bank',
   initialState,
   reducers: {
      addData(state, action) {
         state.dataForm = [action.payload, ...state.dataForm];
      },
      deleteBank(state, {payload}) {
        state.dataForm = state.dataForm.filter(({id}) => id !== payload)
      }
   }
});


export default bankSlice.reducer;
export const { addData, deleteBank } = bankSlice.actions;



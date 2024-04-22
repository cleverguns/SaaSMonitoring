import { createSlice } from '@reduxjs/toolkit';

const INITIAL_INTEGRATION_LIST = [
  {
    id: 1,
    name: 'Slack',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png',
    isActive: true,
    description: 'slack datas',
    contracts: [], // Array to hold contracts or additional documents
    attachments: [], // Array to hold attachments
    pictureLogo: '', // URL for picture logo
    billedTo: '', // Varchar
    modeOfPayment: '', // Varchar
    expirationDate: null, // Date
    contractRenewal: null, // Date
    amount: 0, // Currency
  },

];

const saasSlice = createSlice({
  name: 'saas',
  initialState: {
    integrationList: INITIAL_INTEGRATION_LIST,
    isLoading: false,
  },
  reducers: {
    addSaaS: (state, action) => {
      state.integrationList.push(action.payload);
    },
    editSaaS: (state, action) => {
      const { id, updatedFields } = action.payload;
      const saasIndex = state.integrationList.findIndex(saas => saas.id === id);
      state.integrationList[saasIndex] = { ...state.integrationList[saasIndex], ...updatedFields };
    },
    deleteSaaS: (state, action) => {
      state.integrationList = state.integrationList.filter(saas => saas.id !== action.payload);
    },
  },
});

// Export actions
export const { addSaaS, editSaaS, deleteSaaS } = saasSlice.actions;

export default saasSlice.reducer;

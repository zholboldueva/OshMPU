import { configureStore } from '@reduxjs/toolkit';

// Define your initial state and reducer
const initialState = {
  formData: {
    name: '',
    // Add more form fields as needed
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    // Add more cases as needed
    default:
      return state;
  }
};

// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer,
});

export default store;

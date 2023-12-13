import { ADDCONTACTS, DELETECONTACTS } from './types';

const intitialStateContact = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
};

export const contactsReducer = (state = intitialStateContact, action) => {
  // action -> { type: "products/deleteProduct", payload: "w1231" }
  // action -> { type: "products/addProduct", payload: { id: "w1231", price: 10, title: "Samsung", ... } }
  switch (action.type) {
    case DELETECONTACTS: {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case ADDCONTACTS: {
      // state.products = [...state.products, action.payload];❌
      return {
        ...state,
        contacts: [...state.contacts, action.payload], // ✅
      };
    }
    default:
      return state;
  }
};

import { ADDCONTACTS, DELETECONTACTS } from './types';

const intitialStateContact = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
};

export const contactsReducer = (state = intitialStateContact, action) => {
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
     
      return {
        ...state,
        contacts: [...state.contacts, action.payload], // ✅
      };
    }
    default:
      return state;
  }
};

import { ADDCONTACTS, DELETECONTACTS, FILTERVALUE } from './types';

export const setFilter = value => ({ type: FILTERVALUE, payload: value });

export const addContact = contact => ({
  type: ADDCONTACTS,
  payload: contact,
});

export const deleteContact = idContact => ({
  type: DELETECONTACTS,
  payload: idContact,
});

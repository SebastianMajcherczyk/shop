import { createStore } from 'redux';

const initialState = [];

const ACTIONS = {
	ADD_CONTACT: 'ADD_CONTACT',
	DELETE_CONTACT: 'DELETE_CONTACT',
	EDIT_CONTACT: 'EDIT_CONTACT',
};

const addNewContact = contact => ({
	type: ACTIONS.ADD_CONTACT,
	payload: contact,
});

const deleteContact = id => ({
	type: ACTIONS.DELETE_CONTACT,
	payload: id,
});

const editContact = id => ({
	type: ACTIONS.EDIT_CONTACT,
	payload: id,
});
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.ADD_CONTACT:
			return [...state, action.payload];
		case ACTIONS.DELETE_CONTACT:
			return state.filter(contact => contact.id !== action.payload);
		case ACTIONS.EDIT_CONTACT:
			return state.map(contact => {
				if (contact.id === action.payload.id) {
					return action.payload;
				}
				return contact;
			});
		default:
			return state;
	}
};

const store = createStore(reducer);

console.log("Initial state: ", store.getState())
store.dispatch(addNewContact({ id: 1, name: 'John Doe', phone: '1234567890' }));
store.dispatch(addNewContact({ id: 2, name: 'Jane Dan', phone: '1234456890' }));
store.dispatch(addNewContact({ id: 3, name: 'Mick Smith', phone: '1234567678' }));


console.log("State after adding 3 contacts: ",store.getState())

store.dispatch(deleteContact(2));

console.log("State after deleting contact with id = 2", store.getState())

store.dispatch(editContact({ id: 3, name: 'Mick Smithowski', phone: '1234567678' }));
console.log("State after edit contact id = 3" , store.getState())
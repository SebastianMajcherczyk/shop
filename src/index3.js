import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
	list: []

};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialState,
	reducers: {
		addContact: (state, action) => {
		state.list=[...state.list, action.payload]
			// state.push(action.payload);
		},
		deleteContact: (state, action) => {
			return state.filter(contact => contact.id !== action.payload);
		},
		editContact: (state, action) => {
			return state.map(contact => {
				if (contact.id === action.payload.id) {
					return action.payload;
				}
				return contact;
			});
		},
	},
});

const store = configureStore({ reducer: contactsSlice.reducer });

console.log(store.getState());

store.dispatch(contactsSlice.actions.addContact({ id: 1, name: 'John Doe', phone: '1234567890' }));

store.dispatch(contactsSlice.actions.addContact({ id: 2, name: 'Jane Dan', phone: '1234456890' }))
store.dispatch(contactsSlice.actions.addContact({ id: 3, name: 'Mick Smith', phone: '1234567678' }))


console.log(store.getState());

store.dispatch(contactsSlice.actions.deleteContact(2));

console.log(store.getState());

store.dispatch(contactsSlice.actions.editContact({ id: 3, name: 'Mick Smithowski', phone: '1234567678' }));

console.log(store.getState());
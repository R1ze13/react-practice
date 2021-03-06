import { EDIT_ITEM, ADD_ITEM, REMOVE_ITEM  } from './actions';

const initialState = {
	items: [
		{
			id: 1,
			name: 'Space Doggo',
			yb: 'iC1PLC6ljJc'
		},
		{
			id: 2,
			name: 'Play so hard you get banned mid game',
			yb: 'rypQfjuE0BE'
		},
		{
			id: 3,
			name: 'Awoo~',
			yb: '3j1_Ey-qIVE'
		},
		{
			id: 4,
			name: 'Nani?!',
			yb: 'jwAxc56Xz_c'
		},
		{
			id: 5,
			name: 'Duck Running in the 90',
			yb: '9rtCibtplsw'
		}
	]
};

function listReducer(state = initialState, action) {
	switch (action.type) {
		case EDIT_ITEM:
			const idx = state.items.findIndex(item => item.id === action.id);
			state.items[idx].name = action.name;
			state.items[idx].yb = action.yb;
			return Object.assign({}, state, {
				items: state.items
			});
		case ADD_ITEM:
			const { id, name, yb } = action;
			state.items.push({id, name, yb});
			return Object.assign({}, state, {
				items: state.items
			});
		case REMOVE_ITEM:
			const itemId = action.id;
			const items = state.items.filter(item => item.id !== itemId);
			return Object.assign({}, state, {items});
		default:
			return state;
	}
}

const ListReducer = {
	list: listReducer
};

export default ListReducer;

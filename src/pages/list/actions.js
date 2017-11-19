export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';


export function editItem(item) {
	const { id, name, yb } = item;
	return {
		type: EDIT_ITEM,
		id, name, yb
	};
}

export function addItem(item) {
	const { id, name, yb } = item;
	return {
		type: ADD_ITEM,
		id, name, yb
	};
}

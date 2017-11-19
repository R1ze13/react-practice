export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(options) {
	const { title, content } = options;

	return {
		type: OPEN_MODAL,
		title, content
	};
}

export function closeModal() {
	return {
		type: CLOSE_MODAL
	};
}

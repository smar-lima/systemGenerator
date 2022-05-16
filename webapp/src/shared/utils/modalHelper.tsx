import ReactDOM from 'react-dom';

let node: any;
const modals: any = [];

const renderModal = () => {
	if (modals.length == 0) return;

	const component = modals.shift();
	if (!node) {
		node = document.createElement('div');
		document.body.appendChild(node);
	}
	ReactDOM.render(component, node);
};

export const ModalManager = {
	open(component: any) {
		modals.push(component);
		if (modals.length == 1) {
			renderModal();
		}
	},
	close() {
		ReactDOM.unmountComponentAtNode(node);
		renderModal();
	}
};

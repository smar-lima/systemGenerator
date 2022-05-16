import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ToastHelper {
	static create() {
		/*toast.configure({ position: toast.POSITION.TOP_RIGHT, autoClose: 6000, newestOnTop: true });*/
	}

	static success(mensagem: any, configuracao: any) {
		toast.success('✔ ' + mensagem, configuracao || {});
	}

	static error(mensagem: any, configuracao: any) {
		toast.error('❌ ' + mensagem, configuracao || {});
	}

	static warn(mensagem: any, configuracao: any) {
		toast.warn('⚠ ' + mensagem, configuracao || {});
	}

	static info(mensagem: any, configuracao: any) {
		toast.info( mensagem, configuracao || {});
	}

	static default(mensagem: any, configuracao: any) {
		toast(mensagem, configuracao || {});
	}
}

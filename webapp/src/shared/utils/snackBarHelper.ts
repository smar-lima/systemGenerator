import { VariantType, useSnackbar } from 'notistack';

const { enqueueSnackbar } = useSnackbar();

export default class SnackBarHelper {

	static success(mensagem: string) {
		const variant: VariantType = 'success';
		enqueueSnackbar(mensagem, {variant});
	}

	static error(mensagem: string) {
		const variant: VariantType = 'error';
		enqueueSnackbar(mensagem, {variant});
	}

	static warn(mensagem: string) {
		const variant: VariantType = 'warning';
		enqueueSnackbar(mensagem, {variant});
	}

	static info(mensagem: string) {
		const variant: VariantType = 'info';
		enqueueSnackbar(mensagem, {variant});
	}

	static default(mensagem: string, variant: VariantType) {
		enqueueSnackbar(mensagem, {variant});
	}
}

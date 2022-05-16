import { useSnackbar, VariantType } from 'notistack';



export async function SnackBarSuccess(mensagem: string) {
	const { enqueueSnackbar } = await useSnackbar();
	const variant: VariantType = 'success';
	await enqueueSnackbar(mensagem, {variant});
}

export async function SnackBarError(mensagem: string) {
	const { enqueueSnackbar } = await useSnackbar();
	const variant: VariantType = 'error';
	await enqueueSnackbar(mensagem, {variant});
}


/*export const SnackBarHelper = (mensagem: string) => {
	const variant: VariantType = 'success';
	enqueueSnackbar(mensagem, {variant});
	/*static success(mensagem: string) {
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
	}*/


import * as Yup from 'yup';

export const produtoEsquemaValidate: any = Yup.object({
	name: Yup.string().required('Campo Obrigatório'),
	location: Yup.string().required('Campo Obrigatório')
});
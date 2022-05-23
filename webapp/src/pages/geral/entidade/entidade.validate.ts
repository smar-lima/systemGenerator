import * as Yup from 'yup';

export const entidadeEsquemaValidate: any = Yup.object({
	entidade: Yup.string().required('Campo Obrigatório'),
	feature: Yup.string().required('Campo Obrigatório'),
	projeto: Yup.string().required('Campo Obrigatório'),
	acoes: Yup.array().required('Campo Obrigatório'),
});
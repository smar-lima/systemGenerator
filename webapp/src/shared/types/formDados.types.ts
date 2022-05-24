export interface IFerramentasDeDetalhesProps {
	textoBotaoNovo?: string;
	textoBotaoEditar?: string;
	exibeBotaoNovo?: boolean;
	exibeBotaoExcluir?: boolean;
	exibeBotaoVoltar?: boolean;
	exibeBotaoEditar?: boolean;
	onClickNovo?: () => void;
	onClickVoltar?: () => void;
	onClickEditar?: () => void;
	onClickExcluir?: any;
	loading?: boolean;
	prefix?: string;
	urlListagem?: string;
}
export interface IPropsForm {
	onSubmit?: any;
	prefix: string;
}
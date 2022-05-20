export interface IFerramentasDeDetalhesProps {
	textoBotaoNovo?: string;
	textoBotaoSalvar?: string;
	textoBotaoEditar?: string;
	exibeBotaoNovo?: boolean;
	exibeBotaoSalvar?: boolean;
	exibeBotaoExcluir?: boolean;
	exibeBotaoVoltar?: boolean;
	exibeBotaoEditar?: boolean;
	onClickNovo?: () => void;
	onClickSalvar?: () => void;
	onClickVoltar?: () => void;
	onClickEditar?: () => void;
	onClickExcluir?: any;
	loading?: boolean;
	prefix?: string;
	urlListagem?: string;
}
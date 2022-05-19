export interface IFerramentasDeDetalhesProps {
	textoBotaoNovo?: string;
	textoBotaoSalvar?: string;
	exibeBotaoNovo?: boolean;
	exibeBotaoSalvar?: boolean;
	exibeBotaoExcluir?: boolean;
	exibeBotaoVoltar?: boolean;
	onClickNovo?: () => void;
	onClickSalvar?: () => void;
	onClickVoltar?: () => void;
	onClickExcluir?: any;
	loading?: boolean;
	prefix?: string;
}
import HomeIcon from '@mui/icons-material/Home';
import Chart from '@mui/icons-material/ChatRounded';

/*export const MenuList = [
	{
		icon: HomeIcon,
		label: 'Pagina Inicial asdasd asd asd asd asd asd asd asd asd ',
		path: '/home'
	},
	{
		icon: Chart,
		label: 'Dashboard',
		path: '/dashboard'
	},
];*/

export const MenuList = [
	{
		id: 1,
		items: [
			{
				id: 1,
				index: 1,
				label: 'Cadastros',
				icon: HomeIcon,
				subitems: [
					{
						id: 1,
						index: 2,
						path: '/app/camposParcela',
						icon: HomeIcon,
						label: 'Campos da Parcela',
					},
					{
						id: 2,
						index: 3,
						path: '/app/centroCusto',
						icon: HomeIcon,
						label: 'Centro de Custo',
					},
					{
						id: 3,
						index: 4,
						path: '/app/centroNegocio',
						icon: HomeIcon,
						label: 'Centro de Negócio',
					},
					{
						id: 4,
						index: 5,
						path: '/app/contaGerencial',
						icon: HomeIcon,
						label: 'Conta Gerencial',
					},
					{
						id: 5,
						index: 6,
						path: '/app/tipoPagamentoRecebimento',
						icon: HomeIcon,
						label: 'Forma de Pagamento',
					},
					{
						id: 6,
						index: 7,
						path: '/app/fornecedorCliente',
						icon: HomeIcon,
						label: 'Fornecedor/Cliente',
					},
					{
						id: 7,
						index: 8,
						path: '/app/produtosServicos',
						icon: HomeIcon,
						label: 'Produto/Serviço',
					},
					{
						id: 8,
						index: 9,
						path: '/app/tipoDocumento',
						icon: HomeIcon,
						label: 'Tipo de documento',
					},
					{
						id: 7,
						index: 8,
						path: '/app/produtorRural',
						icon: HomeIcon,
						label: 'Produtor rural',
					},
				],
			},
		],
	},
	{
		id: 2,
		items: [
			{
				id: 1,
				index: 10,
				label: 'Contas',
				icon: HomeIcon,
				subitems: [
					{
						id: 1,
						index: 11,
						path: '/app/contaBancaria',
						icon: HomeIcon,
						label: 'Cadastro de Contas',
					},
					{
						id: 2,
						index: 12,
						path: '/app/transferenciaBancaria/',
						icon: HomeIcon,
						label: 'Transferência Bancária',
					},
				],
			},
		],
	},
	{
		id: 3,
		items: [
			{
				id: 1,
				label: 'Despesa/Receita',
				index: 13,
				icon: HomeIcon,
				subitems: [
					{
						id: 2,
						index: 15,
						path: '/app/conta/pagar',
						icon: HomeIcon,
						label: 'Conta a Pagar',
					},
					{
						id: 3,
						index: 16,
						path: '/app/conta/receber',
						icon: HomeIcon,
						label: 'Conta a Receber',
					},
					{
						id: 4,
						index: 17,
						path: '/app/gestaocontrato',
						icon: HomeIcon,
						label: 'Contrato',
					},
					{
						id: 5,
						index: 18,
						path: '/app/importacaoorcamento',
						icon: HomeIcon,
						label: 'Orçamento',
					},
					{
						id: 6,
						index: 19,
						path: '/app/pedidos',
						icon: HomeIcon,
						label: 'Pedido',
					},
				],
			},
		],
	},
	{
		id: 4,
		items: [
			{
				id: 1,
				index: 20,
				label: 'Estoque',
				icon: HomeIcon,
				subitems: [
					{
						id: 1,
						index: 21,
						path: '/app/Estoque',
						icon: HomeIcon,
						label: 'Estoque',
					},
					{
						id: 2,
						index: 22,
						path: '/app/locaisEstoque',
						icon: HomeIcon,
						label: 'Local Estoque',
					},
					{
						id: 3,
						index: 23,
						path: '/app/movimentoEstoque',
						icon: HomeIcon,
						label: 'Movimentar Estoque',
					},
					{
						id: 4,
						index: 24,
						path: '/app/tipoEstoque',
						icon: HomeIcon,
						label: 'Tipo de Estoque',
					},
					{
						id: 5,
						index: 25,
						path: '/app/transferenciaEstoque',
						icon: HomeIcon,
						label: 'Transferência entre Estoques',
					},
				],
			},
		],
	},
	{
		id: 5,
		items: [
			{
				id: 1,
				index: 26,
				label: 'Patrimônio',
				icon: HomeIcon,
				subitems: [
					{
						id: 1,
						index: 27,
						path: '/app/patrimonio',
						icon: HomeIcon,
						label: 'Patrimônio',
					},
					{
						id: 2,
						index: 28,
						path: '/app/tipoPatrimonio',
						icon: HomeIcon,
						label: 'Tipos de Patrimônio',
					},
				],
			},
		],
	},
	{
		id: 6,
		items: [
			{
				id: 1,
				index: 29,
				label: 'Relatório',
				icon: HomeIcon,
				subitems: [
					{
						id: 1,
						index: 30,
						path: '/app/extratoBancario',
						icon: HomeIcon,
						label: 'Extrato Bancário',
						subitems: [
							{
								id: 1,
								index: 30,
								path: '/app/extratoBancario',
								icon: HomeIcon,
								label: 'Extrato Bancário',
							},
							{
								id: 2,
								index: 31,
								path: '/app/ConciliacaoBancaria',
								icon: HomeIcon,
								label: 'Conciliação Bancária',
							},
							{
								id: 3,
								index: 32,
								path: '/app/fluxoCaixa',
								icon: HomeIcon,
								label: 'Fluxo de caixa',
							},
							{
								id: 4,
								index: 32,
								path: '/app/detalhesDeCusto',
								icon: HomeIcon,
								label: 'Detalhes de custo',
							},
						],
					},
					{
						id: 2,
						index: 31,
						path: '/app/ConciliacaoBancaria',
						icon: HomeIcon,
						label: 'Conciliação Bancária',
					},
					{
						id: 3,
						index: 32,
						path: '/app/fluxoCaixa',
						icon: HomeIcon,
						label: 'Fluxo de caixa',
					},
					{
						id: 4,
						index: 32,
						path: '/app/detalhesDeCusto',
						icon: HomeIcon,
						label: 'Detalhes de custo',
					},
				],
			},
		],
	},
];
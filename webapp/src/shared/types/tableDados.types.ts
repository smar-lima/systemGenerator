import { GridColDef, GridColumns, GridFilterItem, GridSortModel } from '@mui/x-data-grid';
import { AxiosPromise } from 'axios';

interface IOrderProps {
	field: string;
	sort: string;
}

interface IColumnsProps {
	field: string;
	label: string;
	width?: number;
	type: string;
}

interface IFilterInitProps {
	columnField: string;
	operatorValue: string;
	value: any;
}

interface IActionsProps {
	getActions?: any;
	field?:any;
	type?: string;
	onClick?: any;
	url?: string;
	icon?: any;
	width?: any;
}

interface IOptionsProps {
	titulo?: string;
	service: any;
	ocultarBarraFerramentas?: boolean;
	buscarAoRenderizar?: boolean;
	loadingSkeleton?: boolean;
	selected?: boolean;
}

interface IBtnFixedToolbarProps {
	onClick: () => void;
	route?: string
}

interface IToolbarProps {
	exibirAtualizar: boolean;
	novo?: IBtnFixedToolbarProps;
}

export interface ITableProps {
	columns: GridColumns;
	order?: GridSortModel;
	filterInit: GridFilterItem[];
	actions?: IActionsProps[];
	options: IOptionsProps;
	toolbar?: IToolbarProps;
}
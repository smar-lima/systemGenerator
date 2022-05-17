import { GridColDef, GridFilterItem, GridSortModel } from '@mui/x-data-grid';
export interface GridDDados {
    order: GridSortModel;
    filterInit: GridFilterItem[];
    columns: GridColDef[];
}
//Modelos
/*export interface DDadosType {
    Titulo: string;
    Campos: Campos;
}

type Campos = {
    [key: string]: Tipo;
};

type Item = {
  Texto: string,
  Valor: string | number | boolean
}

type TiposDeCampo =
    | 'number'
    | 'text'
    | 'combobox'
    | 'date'
    | 'textarea'
    | 'file'
    | 'decimal'
    | 'checkbox'
    | 'mask'
    | 'label'
    | 'radio'
    | 'richtext'
    | 'time'
    | 'suggestion'
    | 'lookup'
    | 'image'
    | 'switch'
    | 'typeahead'
    | 'editor'
    | 'multipleselect'
    | 'multipleselectcombobox'
    | 'porcentagem'
    | 'datetime'
    | 'icongroup'
    | 'icon-group'
    | 'array';

    type FormatosDeHoras =
        | 'HH:mm:ss'
        | 'hh:mm a'
        | 'EHmSs'
        | 'HH:mm'

type Tipo = {
    Tipo: TiposDeCampo;
    Label: string;
    Tooltip: string;
    Tamanho?: number;
    TipoInput?: string;
    Desabilitado?: boolean;
    Obrigatorio?: boolean;
    Linhas?: number;
    Mascara?: string;
    Placeholder?: string;
    extensionsAllowed?: string;
    TipoFileUpload?: string;
    Itens?: Array<Item>;
    itens?: Array<Item>;
    LabelSpace?: boolean;
    LabelSpaceVertical?: boolean;
    DataFutura?: boolean;
    Formato?: FormatosDeHoras;
};

export interface GridDDados {
    Order: Array<Order>;
    Columns: Array<Column>;
}

type Order = {
    fieldName: string;
    dataName: string;
    order: 'A' | 'D';
};

type ArrayType = {
    value: string | number | boolean;
    label: string;
};

type ItemColumn = {
    showColumn: string;
    tooltip: string;
    icon: string;
    css: string;
    text: string;
};

type Column = {
  fieldName: string,
  dataName: string,
  isLong?: boolean,
  show: boolean,
  onlyDate?: boolean,
  type: 'number' | 'text' | 'date' | 'lista' | 'bool' | 'textarea' | 'icongroup' | 'decimal' | 'icon-group' | 'array' | 'cpfCnpj',
  array?: Array<ArrayType>,
  arrayType?: string,
  headerSize?: number
  render?: unknown,
  width?: number,
  Itens?: Array<ItemColumn>,
  isNullable?: boolean,
  isShort?: boolean,
  isByte?: true,
  isDecimal?: true
}*/

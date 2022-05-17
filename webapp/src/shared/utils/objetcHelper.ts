export default class ObjectHelper {
	static clone(object: any) {
		return JSON.parse(JSON.stringify(object));
	}

	static removeInativos(list: any[]) {
		const ativos: any[] = [];
		list.forEach((item) => {
			if (item.ativo !== undefined && item.ativo === true) {
				ativos.push(item);
			}
		});

		return ativos;
	}

	static ordenaLista = async (lista: any[], campo: string, decrescente: boolean) => {
		let newlista = [...lista];
		if (newlista.length > 0) {
			if (!decrescente) {
				newlista = await newlista.sort(function compare(a, b) {
					if (a[campo]?.toLowerCase() < b[campo]?.toLowerCase())
						return -1;
					if (a[campo]?.toLowerCase() > b[campo]?.toLowerCase())
						return 1;
					return 0;
				});
			} else {
				newlista = await newlista.sort(function compare(a, b) {
					if (a[campo]?.toLowerCase() < b[campo]?.toLowerCase())
						return 1;
					if (a[campo]?.toLowerCase() > b[campo]?.toLowerCase())
						return -1;
					return 0;
				});
			}
		}
		return newlista;
	};

	static createParams = async (data: any) => {
		let url = await Object.keys(data)
			.map(function (k) {
				return data[k] !== null && data[k] !== undefined
					? encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
					: '';
			})
			.join('&');

		url = new URLSearchParams(url).toString();
		url = await url.replace('texto', 'filtro');
		return '?' + url;
	};

	static convertCurrencyStringToFloat(string: string) {
		string = string.replace('R$', '');
		string = string.replace('.', '');
		string = string.replace(',', '.');
		const newFloat = parseFloat(string);
		return newFloat;
	}
}

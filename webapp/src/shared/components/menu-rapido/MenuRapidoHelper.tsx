export function getTelasDoMenuRapido(menuAtual: any) {
	const menuRapido: any[] = [];
	const menu = menuAtual;
	menu.forEach((item: any) => {
		if (item) {
			menuRapido.push({
				value: item.path,
				label: item.label,
				icon: item.icon,
			});
		}
	});
	return menuRapido.sort(function (a, b) {
		return a.label > b.label ? 1 : -1;
	});
}

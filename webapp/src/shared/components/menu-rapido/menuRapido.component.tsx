export function getTelasDoMenuRapido(menuAtual: any) {
	const menuRapido: any[] = [];
	const menu = menuAtual;
	menu.forEach((item: any) => {
		if (item.items) {
			item.items.map((subItem1: any) => {
				if(subItem1.subitems && subItem1.subitems.length > 0) {
					subItem1.subitems.map((subItem2: any) =>
						menuRapido.push({
							value: subItem2.path,
							label: subItem2.label,
							id: subItem2.id,
							icon: subItem2.icon,
							index: subItem2.index
						}),
					);
				}else {
					menuRapido.push({
						value: subItem1.path,
						label: subItem1.label,
						id: subItem1.id,
						icon: subItem1.icon,
						index: subItem1.index
					});
				}
			});
		}
	});
	return menuRapido.sort(function (a, b) {
		return a.label > b.label ? 1 : -1;
	});
}
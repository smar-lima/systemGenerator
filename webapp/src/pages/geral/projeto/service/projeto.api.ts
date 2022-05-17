import service from '../../../../shared/api';
import ObjectHelper from '../../../../shared/utils/objetcHelper';

const base = '/project';

export default {
	async getAll(filtro: any) {
		const params = await ObjectHelper.createParams(filtro);
		return service.get(`${base}${params}`);
	},
	getById(id: any) {
		return service.get(`${base}/${id}`);
	},
	create(param: any) {
		return service.post(`${base}`, param);
	},
	update(param: any) {
		return service.put(`${base}`, param);
	},
	ativarDesativar(id: any) {
		return service.put(`${base}/AtivarDesativar`, id);
	},
	delete(id: any) {
		return service.delete(`${base}/${id}`);
	},
};
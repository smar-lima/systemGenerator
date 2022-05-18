import service from '../../../../shared/api';

const base = '/project';

export default {
	async getAll(filtro: any) {
		return service.post(`${base}/filter`,filtro);
	},
	getById(id: any) {
		return service.get(`${base}/${id}`);
	},
	create(dto: any) {
		return service.post(`${base}`, dto);
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
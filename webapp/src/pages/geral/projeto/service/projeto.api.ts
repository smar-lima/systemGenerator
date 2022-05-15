import service from '../../../../shared/api';

const base = '/project';

export default {
	getAll() {
		return service.get(`${base}`);
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
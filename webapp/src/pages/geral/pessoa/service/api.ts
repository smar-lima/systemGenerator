import service from '../../../../shared/api';

const base = '/pessoa';

export default {
	getById(id: any) {
		return service.get(`${base}/${id}`);
	},
	getAll(param: any) {
		return service.get(`${base}${param}`);
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
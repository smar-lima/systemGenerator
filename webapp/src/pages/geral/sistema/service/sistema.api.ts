import axios from 'axios';
import service from '../../../../shared/api';

const base = '/project';

const cancelToken = axios.CancelToken.source();

export default {
	getById(id: any) {
		return service.get(`${base}/${id}`);
	},
	getAll() {
		return service.get(`${base}`, {cancelToken: cancelToken.token});
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
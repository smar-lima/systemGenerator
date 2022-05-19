import { toast } from 'react-toastify';


export const trataErrorInCatch = (error: any) => {
	console.error(error);
	if(error?.response?.status === 400){
		toast.error(error?.response?.data?.message);
	}
};
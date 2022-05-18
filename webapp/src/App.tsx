/* eslint-disable no-mixed-spaces-and-tabs */

import { MenuLateral } from './shared/components';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';
import { Router } from './routes/index.route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
	return (
		<AppThemeProvider>
			<AppDrawerProvider>
				<MenuLateral >
					<Router/>
					<ToastContainer />
				</MenuLateral>
			</AppDrawerProvider>
		</AppThemeProvider>
	);
};

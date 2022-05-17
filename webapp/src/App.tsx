/* eslint-disable no-mixed-spaces-and-tabs */
import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from './shared/components';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';
import { Router } from './routes/index.route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {

	return (
		<AppThemeProvider>
			<BrowserRouter>
				<AppDrawerProvider>
					<MenuLateral >
						<Router />
						<ToastContainer />
					</MenuLateral>
				</AppDrawerProvider>
			</BrowserRouter>
		</AppThemeProvider>
	);
};

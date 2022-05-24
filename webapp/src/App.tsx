
import { MenuLateral } from './shared/components/menu-lateral/menuLateral.component.';
import { AppDrawerProvider } from './shared/contexts/drawerContext';
import { Router } from './routes/index.route';
import { ToastContainer } from 'react-toastify';
import { AppThemeProvider } from './shared/contexts/themeContext';
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

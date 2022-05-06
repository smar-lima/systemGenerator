import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';
import Typography from '@mui/material/Typography';

export const App = () => {
	return (
		<AppThemeProvider>
			<AppDrawerProvider>
				<BrowserRouter>

					<MenuLateral >
						<AppRoutes />
					</MenuLateral>
					
				</BrowserRouter>
			</AppDrawerProvider>
		</AppThemeProvider>
	);
};

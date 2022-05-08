import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';
import { SnackbarProvider } from 'notistack';

export const App = () => {
	return (
		<AppThemeProvider>
			<AppDrawerProvider>
				<BrowserRouter>

					<MenuLateral >
						<SnackbarProvider  maxSnack={3} autoHideDuration={5000}>
							<AppRoutes />
						</SnackbarProvider>
					</MenuLateral>
					
				</BrowserRouter>
			</AppDrawerProvider>
		</AppThemeProvider>
	);
};

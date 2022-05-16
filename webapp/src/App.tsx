/* eslint-disable no-mixed-spaces-and-tabs */
import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from './shared/components';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';
import { Router } from './routes/index.route';

export const App = () => {
	return (
		<AppThemeProvider>
			<BrowserRouter>
				<AppDrawerProvider>
					<MenuLateral >
						<Router />
					</MenuLateral>
				</AppDrawerProvider>
			</BrowserRouter>
		</AppThemeProvider>
	);
};

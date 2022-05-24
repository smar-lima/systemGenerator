import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { LightTheme, DarkTheme } from '../themes';

interface IThemeContextData {
	themeName: 'light' | 'dark';
	toggleTheme: () => void
}

type ThemeProviderProps = {
	children: any;
};

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
	return useContext(ThemeContext);
};

export const AppThemeProvider: any = (props: ThemeProviderProps) => {

	const localStorageTheme: any = localStorage.getItem('theme');
	const [themeName, setThemeName] = useState<any | null>(localStorageTheme ? localStorageTheme : 'light');

	const toggleTheme = useCallback(() => {
		setThemeName((oldThemeName: any) => oldThemeName === 'light' ? 'dark' : 'light');
	},[]);

	const theme = useMemo(() => {
		if(themeName === 'light'){
			localStorage.setItem('theme', themeName);
			return LightTheme;
		} 
		localStorage.setItem('theme', themeName);
		return DarkTheme;
	},[themeName]);

	return (
		<ThemeContext.Provider  value={{themeName, toggleTheme}}>   
			<ThemeProvider theme={theme}>
				<Box width="100%" height="100%" bgcolor={theme.palette.background.default}>
					{ props.children }
				</Box>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

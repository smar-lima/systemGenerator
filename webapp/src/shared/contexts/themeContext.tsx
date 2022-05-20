import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { LightTheme, DarkTheme } from '../themes';

interface IThemeContextData {
	themeName: 'light' | 'dark';
	toggleTheme: () => void;
}

type ThemeProviderProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
  };

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
	return useContext(ThemeContext);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppThemeProvider: any = (props: ThemeProviderProps) => {

	const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

	const toggleTheme = useCallback(() => {
		setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
	},[]);

	const theme = useMemo(() => {
		if(themeName === 'light') return LightTheme;
		
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

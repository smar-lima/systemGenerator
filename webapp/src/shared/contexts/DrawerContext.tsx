import { createContext, useContext, useState, useCallback } from 'react';
import { number } from 'yup';

interface IDrowerContextData {
	isDrawerOpen: boolean;
	toogleDrawerOpen: () => void;
    drawerOptions: any[];
	topBarHeight: number;
	drawerWidth: number;
    setDrawerOptions: (newDrawerOptions: any[]) => void;
}

type DrawerProviderProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
  };

const DrawerContext = createContext({} as IDrowerContextData);

export const useDrawerContext = () => {
	return useContext(DrawerContext);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppDrawerProvider: any = (props: DrawerProviderProps) => {

	const drawerWidth = 240;

	const topBarHeight = 64;

	const [drawerOptions, setDrawerOptions] = useState<any[]>([]);

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toogleDrawerOpen = useCallback(() => {
		setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
	},[]);

	const handleSetDrawerOptions = useCallback((newDrawerOptions: any[]) => {
		setDrawerOptions(newDrawerOptions);
	},[]);

	return (
		<DrawerContext.Provider  value={{isDrawerOpen, drawerOptions, toogleDrawerOpen, setDrawerOptions: handleSetDrawerOptions, drawerWidth, topBarHeight}}>   
			<div className='div-container-master'>
				{ props.children }
			</div>
		</DrawerContext.Provider>
	);
};
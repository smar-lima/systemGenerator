/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

type LayoutBaseDePaginaProps = {
    titulo?: string;
	barraDeFerramentas?: ReactNode;
    children: React.ReactNode;
  };

export const LayoutBaseDePagina: React.FC<LayoutBaseDePaginaProps> = (props) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Box height={'100%'} display='flex' flexDirection='column' gap={1}>
				{
					props.titulo &&

					<Box padding={1}  
						display='flex' 
						alignItems="center" 
						gap={1} 
						justifyContent="center" 
						height={theme.spacing(smDown ? 2 : mdDown ? 3 : 5)}
					>
						<Typography 
							whiteSpace="nowrap"
							overflow="hidden"
							textOverflow="ellipsis"
							variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4'}
						>
							{props.titulo}
						</Typography>
					</Box>
				}
				{
					props.barraDeFerramentas &&
					<Box>
						{props.barraDeFerramentas}
					</Box>
				}
				<Box flex={1} overflow={'auto'}>
					{props.children}
				</Box>
			</Box>
		</>
	);
};
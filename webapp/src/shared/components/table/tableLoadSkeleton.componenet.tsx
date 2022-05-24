import { Box, Skeleton } from '@mui/material';

export const LoadingSkeleton = () => (
	<Box
		sx={{
			height: 'max-content'
		}}
	>
		{[...Array(10)].map(() => (
			<Skeleton key={Math.random()} variant='rectangular' sx={{ my: 3.5, mx: 1, height: 20 }} />
		))};
	</Box>
);
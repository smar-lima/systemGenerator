import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertConfimModal(props: any) {

	return (
		<>
			<Dialog
				fullWidth={true}
				open={props.openModal}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => props.cancelModalDelete()}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{'Atenção'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<Typography>
							{props.text}
						</Typography>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => props.cancelModalDelete()}>Cancelar</Button>
					<Button onClick={() => props.confirmModalDelete()}>Confirmar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
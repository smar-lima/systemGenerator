import { 
	Button, 
	Dialog, 
	DialogActions, 
	DialogContent, 
	DialogContentText,
	DialogTitle, 
	Slide 
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

interface IAllertProps {
    titulo: string;
    texto: string;
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});
  
export default function AlertaConfirmacaoModal(texto: string) {
        
	const [open, setOpen] = React.useState(true);

	const handleClose = () => {
		setOpen(false);
	};
    
	return new Promise((resolve) => {
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{'Atenção'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						{texto}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => {handleClose; resolve('ok');}}>Cancelar</Button>
					<Button onClick={() => {handleClose; resolve('ok');}}>Confirmar</Button>
				</DialogActions>
			</Dialog>
		</div>;
	});
}
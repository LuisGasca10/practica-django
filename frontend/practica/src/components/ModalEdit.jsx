import { Button, Dialog, DialogActions, DialogTitle, TextField } from "@mui/material"

const ModalEdit = (props) => {
    console.log({ props })
    const { handleCloseModal } = props

    return (
        <Dialog open={props.isOpen} onClose={props.handleCloseModal} >
            <DialogTitle fontSize={18} fontFamily={"Playwrite DE Grund"} style={{ backgroundColor: "#DCEAEB" }} >Editar tarea.</DialogTitle>
            <TextField variant="outlined" style={{ width: 350, padding: 20 }} />
            <DialogActions style={{ display: "flex", justifyContent: "space-around" }}>
                <Button style={{ color: "#3D7E80" }} onClick={() => handleCloseModal()}>Cancelar</Button>
                <Button style={{ color: "#3D7E80" }} type="submit">Aceptar</Button>
            </DialogActions>
        </Dialog>
    )
}
export default ModalEdit;
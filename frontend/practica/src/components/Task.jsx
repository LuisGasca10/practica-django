import { Button, Grid2, ListItem } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'; import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const Task = (props) => {
    
    const handleDelete = () => {
        console.log('Delete')
    }

    const handleEdit = () => {
       props.setIsOpen(true)
    }

    return (<>
        <ListItem style={{
            backgroundColor: "#CCDBDC", fontFamily: "Playwrite DE Grund",
            color: "black", justifyContent: "space-between", borderRadius: 20
        }}
        >{props.titulo}
            <Grid2 container spacing={2}>

                <DeleteIcon style={{ color: "#119DA4" }} onClick={handleDelete} />
                <ModeEditOutlineIcon style={{ color: "#119DA4" }} onClick={handleEdit} />
            </Grid2>
        </ListItem>
    </>
    )
}
export default Task;
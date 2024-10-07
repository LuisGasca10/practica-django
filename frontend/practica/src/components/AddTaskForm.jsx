import { Button, TextField } from '@mui/material'
import { useState } from 'react';

const Formulario = () => {
    const [tareas, setTareas] = useState('')
    const handleSUbmit = (e) => {
        e.preventDefault()
        console.log(tareas)
        setTareas('')
    }
    return (
        <>
            <form onSubmit={handleSUbmit}>
                <label>¿Qué haremos hoy?</label>
                <div className="header-form">
                    <TextField variant='outlined' value={tareas} onChange={(e) => { setTareas(e.target.value) }} style={{ width: 260 }}></TextField>
                    <Button type='submit' style={{ backgroundColor: "#2B9EB3", color: "white", width: 110, height: 50, borderRadius: 70 }}>Agregar</Button>
                </div>
            </form >
        </>
    )
}
export default Formulario;
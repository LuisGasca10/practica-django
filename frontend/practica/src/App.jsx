import { Container } from '@mui/material'
import './App.css'
import Formulario from './components/AddTaskForm'
import Task from './components/Task'
import TaskList from './components/TaskList'
import ModalEdit from './components/ModalEdit'
import { useState } from 'react'

function App() {
  const [isOpen,setIsOpen] = useState(false)
  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <Container style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Formulario />
        <TaskList setIsOpen={setIsOpen}/>
      </Container>
      <ModalEdit isOpen={isOpen} handleCloseModal={handleCloseModal}/>
    </>
  )
}

export default App

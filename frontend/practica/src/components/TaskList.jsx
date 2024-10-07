import Task from "./Task";

const TaskList = (props) => {

    const ejemplo = [{
        titulo: 'ejemplo'
    },

    {
        titulo: 'ejemplo2'
    }, {
        titulo: 'ejemplo3'
    }, {
        titulo: 'ejemplo4'
    }
    ]


    return (
        <>
            {ejemplo.map(tarea => <Task key={tarea.titulo} titulo={tarea.titulo} setIsOpen={props.setIsOpen} />)}
        </>
    )
}
export default TaskList;
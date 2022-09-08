import { Edit, Delete } from "@mui/icons-material";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { TodoTask } from "../../app/models/TodoTask";
import CreateTask from "../TodoTaskManipulations/CreateTask";
import EditTask from "../TodoTaskManipulations/EditTask";
import TaskList from "./TaskList";

export default function Catalog() {
    const [tasks, setTasks] = useState<TodoTask[]>([]);
    const [createMode, setCreateMode] = useState(false);
    const [editMode, setEditMode] = useState(false)
    const [showTaskButton, setShowTaskButton] = useState(false);
    const [selectedTask, setSelectedTask] = useState<TodoTask | undefined>(undefined)

    // useEffect(() => {
    //     fetch('http://localhost:5044/api/Task')
    //     .then(response => response.json())
    //     .then(data => setTasks(data))
    // }, [])

    function getTasks() {
        const url = 'http://localhost:5044/api/Task'

        fetch(url, {
            method: 'GET'
        })
        .then(reponse => reponse.json())
        .then(taskFromServer => {
            setTasks(taskFromServer)
        })
        .catch((error) => {
            console.log(error)
            alert(error)
        });

        setShowTaskButton(true)
    }

    function onTaskCreated(createdTask: TodoTask) {
        if(createdTask === null)
        {
            return;
        }

        alert(`Task successfully created. After clicking OK, your new task titled "${createdTask.name}" will show up in the table below`)
    }

    // function onTaskUpdated(editedTask?: TodoTask | undefined) {
    //     if(editedTask === null)
    //     {
    //         return;
    //     }

    //     alert(`Task successfully updated. After clicking OK, your task titled "${editedTask?.name}" will show up in the table below`)
    // }

    function cancelCreate() {
        setCreateMode(false);
    }

    function cancelEdit() {
        if (selectedTask) setSelectedTask(undefined)
        setEditMode(false);
    }

    const handleEditSelectTask = (task: TodoTask) => {
        setSelectedTask(task)
        setEditMode(true)
    }

    const handleDeleteSelectTask = (task: TodoTask) => {
        setSelectedTask(task)
        deleteTask(task)   
    }

    function deleteTask(task: TodoTask) {
        setSelectedTask(task)
        const url = `http://localhost:5044/api/Task/${task.id}`;

            fetch(url, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
        .catch((error) => {
            console.log(error)
        });
    }
    

    if(createMode) return <CreateTask onTaskCreated={onTaskCreated} cancelCreate={cancelCreate}/>

    if(editMode) return <EditTask task={selectedTask}  cancelEdit={cancelEdit}/>

    return (
        <>
            <h1 style={{color: 'red'}}>TodoListApp</h1>
            <Button onClick={getTasks}>Get tasks from server</Button>
            <Button onClick={() => setShowTaskButton(false)}>Hide tasks</Button>
            {showTaskButton ? (
                <List>
                {tasks.map((task) => 
                (
                    <ListItem key={task.id}>
                        <ListItemAvatar>
                            <Avatar/>
                        </ListItemAvatar>
                        <ListItemText>
                            {task.name} - {task.description}
                        </ListItemText>
                        <ListItemText>
                            <Button onClick={() => handleEditSelectTask(task)} startIcon={<Edit/>}>Edit</Button>
                        </ListItemText>
                        <ListItemText>
                            <Button onClick={() => handleDeleteSelectTask(task)} startIcon={<Delete/>}>Delete</Button>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            ) : (
                <Typography variant='h4'>Tasks hided</Typography>
            )}
            <Button onClick={() => setCreateMode(true)} variant='contained'>Add Task</Button>
        </>

)}
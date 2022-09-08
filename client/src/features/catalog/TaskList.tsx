import { List } from '@mui/material'
import { TodoTask } from '../../app/models/TodoTask';
import TaskCard from './TaskCard';

interface Props {
    tasks: TodoTask[];
}

export default function TaskList({tasks}: Props) {
  return (
        <List>
            {tasks.map((task) => 
            (
                <TaskCard task={task} key={task.id}/>
            ))}
        </List>
  )
}

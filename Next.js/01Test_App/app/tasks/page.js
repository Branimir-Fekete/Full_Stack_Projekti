import TaskForm from '@/components/TaskForm';
import TaskFormCustom from '@/components/TaskFormCustom';
import TaskList from '@/components/TaskList';

function TasksPage() {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}

export default TasksPage;

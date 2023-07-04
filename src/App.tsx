import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "./components/Header";
import { Task, TaskType } from "./components/Task";
import { Input } from "./components/Input";

import ClipboardImage from './assets/clipboard.svg';

import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { 
      id: 1, 
      task: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus amet porro numquam, reiciendis quibusdam rem delectus dicta obcaecati quas odio accusamus.',
      isConcluded: false
    },
    { 
      id: 2, 
      task: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus amet porro numquam, reiciendis quibusdam rem delectus dicta obcaecati quas odio accusamus.',
      isConcluded: false
    },
    { 
      id: 3, 
      task: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus amet porro numquam, reiciendis quibusdam rem delectus dicta obcaecati quas odio accusamus.',
      isConcluded: true
    },
    { 
      id: 4, 
      task: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus amet porro numquam, reiciendis quibusdam rem delectus dicta obcaecati quas odio accusamus.',
      isConcluded: false
    },
    { 
      id: 5, 
      task: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus amet porro numquam, reiciendis quibusdam rem delectus dicta obcaecati quas odio accusamus.',
      isConcluded: true
    }
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleToggleCheckTask(taskId: number) {
    const newTasks = tasks.map(t => {
      if (t.id === taskId) {
        return {...t, isConcluded: !t.isConcluded};
      }
      
      return t;
    });
    
    setTasks(newTasks)
  }

  function handleDeleteTask(taskId: number) {
    const newTasks = tasks.filter(t => t.id !== taskId);

    setTasks(newTasks);
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks(prev => [...prev, {
      id: tasks.length !== 0 ? prev[tasks.length-1].id + 1 : 1,
      task: newTaskText,
      isConcluded: false,
    }])

    setNewTaskText('');
  }

  function countConcludedTasks() {
    let count = 0;

    tasks.forEach(task => {
      if (task.isConcluded) {
        count++;
      }
    })

    return count;
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleAddNewTask} className={styles.inputWrapper}>
          <Input
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskTextChange}
            required
          />

          <button>
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        <header className={styles.header}>
          <div className={styles.headerWrapper}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.headerWrapper}>
            <strong>Concluídas</strong>
            <span>{countConcludedTasks()} de {tasks.length}</span>
          </div>
        </header>

        {tasks.length !== 0 ? (
          <section className={styles.list}>
            {tasks.map(task => (
              <Task 
                key={task.id}
                data={task} 
                onToggle={handleToggleCheckTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </section>
        ) : (
          <section className={styles.listEmpty}>
            <img src={ClipboardImage} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </section>
        )}

      </div>
    </>
  )
}

export default App

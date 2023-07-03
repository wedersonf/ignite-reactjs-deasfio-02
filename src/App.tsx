import { useState } from "react";
import { Header } from "./components/Header";
import { Task, TaskType } from "./components/Task";

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
      </div>
    </>
  )
}

export default App

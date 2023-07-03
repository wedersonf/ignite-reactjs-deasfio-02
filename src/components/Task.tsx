import { Trash } from '@phosphor-icons/react';
import { Checkbox } from './Checkbox';

import styles from './Task.module.css';

export interface TaskType {
  id: number;
  task: string;
  isConcluded: boolean;
}

interface TaskProps {
  data: TaskType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function Task({ data, onToggle, onDelete }: TaskProps) {
  function handleToggleCheck() {
    onToggle(data.id);
  }

  function handleDeleteTask() {
    onDelete(data.id);
  }

  return (
    <div className={styles.task}>
      <Checkbox isChecked={data.isConcluded} onToggle={handleToggleCheck} />

      <span className={data.isConcluded ? styles.checked : styles.unchecked}>{data.task}</span>
 
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
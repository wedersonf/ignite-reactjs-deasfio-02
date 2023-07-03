import { Check } from '@phosphor-icons/react';

import styles from './Checkbox.module.css';

interface CheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
}

export function Checkbox({ isChecked, onToggle }: CheckboxProps) {
  function handleToggle() {
    onToggle()
  }
 
  return (
    <div className={styles.checkbox}>
      <button 
        onClick={handleToggle}
        className={isChecked ? styles.checked : styles.unchecked}
      >
        {isChecked && <Check />}
      </button>
    </div>
  )
}
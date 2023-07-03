import { Header } from "./components/Header";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerWrapper}>
            <strong>Tarefas criadas</strong>
            <span>5</span>
          </div>

          <div className={styles.headerWrapper}>
            <strong>Concluídas</strong>
            <span>2 de 5</span>
          </div>
        </header>
      </div>
    </>
  )
}

export default App

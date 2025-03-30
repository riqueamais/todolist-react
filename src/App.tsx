import { FormEvent, useState } from "react";
import styles from "./App.module.css";
import { Input } from "./components/Input/Input";
import { Task } from "./components/Task";
import { Empty } from "./components/Empty";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { Button } from "./components/Button";

interface Task {
  id: string;
  text: string;
  hasCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [inputValue, setInputValue] = useState("");

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();

    setTasks((tasks) => [...tasks, { id: uuidv4(), text: inputValue, hasCompleted: false }]);

    setInputValue("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleComplete(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, hasCompleted: !task.hasCompleted } : task
      )
    );
  }

  function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "Você realmente quer excluir essa task?"
    );

    if (!confirmDelete) return;

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const completedTasks = tasks.filter((task) => task.hasCompleted).length;

  return (
    <>
      <Header />

      <main className={styles.main}>
        <form onSubmit={handleCreateNewTask}>
          <Input value={inputValue} onChange={handleChange} />

          <Button />
        </form>

        <div className={styles.todo}>
          <div className={styles["tasks-value"]}>
            <div className={styles.item}>
              <span className={`${styles.text} ${styles.first}`}>
                Tarefas criadas
              </span>

              <div className={styles.count}>{tasks.length}</div>
            </div>

            <div className={styles.item}>
              <span className={styles.text}>Concluídas</span>

              <div className={styles.count}>
                {completedTasks} de {tasks.length}
              </div>
            </div>
          </div>
          {tasks.length > 0 ? (
            [...tasks]
            .sort((a, b) => Number(a.hasCompleted) - Number(b.hasCompleted))
            .map((task) => (
              <Task
                key={task.id}
                text={task.text}
                hasCompleted={task.hasCompleted}
                onComplete={() => handleComplete(task.id)}
                onDelete={() => handleDelete(task.id)}
              />
            ))
          ) : (
            <Empty />
          )}
        </div>
      </main>
    </>
  );
}

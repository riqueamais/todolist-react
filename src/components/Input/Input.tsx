import styles from './Input.module.css'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input required className={styles.input} {...props} type="text" placeholder="Adicione uma nova tarefa" />
  );
}

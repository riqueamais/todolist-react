import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.empty}>
      <div className={styles["empty-task"]}>
        <img
          src="/cachorro-2.png"
          title="sem tasks em aberto"
          alt="Imagem sem tasks"
        />

        <div className={styles.content}>
          <span>Você ainda não tem tarefas cadastradas</span>

          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
}

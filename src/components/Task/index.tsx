import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

type Props = {
  hasCompleted: boolean;
  onComplete: () => void;
  text: string;
  onDelete: () => void;
};

export function Task({ hasCompleted, onComplete, text, onDelete }: Props) {
  return (
    <div className={`${styles.task} ${hasCompleted ? styles.completed : ""}`}>
      <input checked={hasCompleted} onChange={onComplete} type="checkbox" />

      <p>{text}</p>

      <button onClick={onDelete}>
        <Trash size={18} />
      </button>
    </div>
  );
}

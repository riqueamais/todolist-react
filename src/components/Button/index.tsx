import { PlusCircle } from '@phosphor-icons/react';
import styles from './Button.module.css'

export function Button() {
    return (
      <button className={styles.btn}>
        <span className={styles['btn-text']}>Criar</span>

        <PlusCircle className={styles.svg} size={18} />
      </button>
    );
}
import styles from './styles.module.scss';

const Spinner = () => {
  return (
    <div aria-hidden="true">
      <div className={styles.spinner}></div>
    </div>
  )
}

export default Spinner
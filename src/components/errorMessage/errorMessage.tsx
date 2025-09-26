import styles from './styles.module.scss';

const ErrorMessage = ({
  children
}: {
  children: string
}) => {
  return (
    <h2 className={styles.error}>{children}</h2>
  )
};

export default ErrorMessage;
import styles from './index.module.css';

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className={styles.appItem}>
      <img className={styles.appImage} src={imageUrl} alt={appName} />
      <p className={styles.appName}>{appName}</p>
    </li>
  )
}

export default AppItem

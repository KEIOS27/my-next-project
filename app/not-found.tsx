import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ぺーじがみつかりませんでした</dt>
        <dd className={styles.text}>
          あなたがあくせすしようとしたぺぇじはそんざいしません
          <br />
          URLをかくにんしてね
        </dd>
      </dl>
    </div>
  );
}

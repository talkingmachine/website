import Aside from "./components/aside";
import styles from './styles.module.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <Aside />
      {children}
    </main>
  );
}

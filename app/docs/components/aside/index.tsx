import Link from "next/link";
import styles from "./aside.module.scss";
import { navLink } from "@/settings/navigation-links";

export default function Aside() {
  const posts = ["welcome", "first-post"];
  return (
    <aside className={styles.aside}>
      <nav className={styles.asideNav}>
        {posts.map((name) => (
          <Link href={navLink.post(name)} key={name}>{name}</Link> // TOFIX: name is a bad key 
        ))}
      </nav>
    </aside>
  );
}

import Link from "next/link";
import styles from "./styles.module.scss";
import { navLink } from "@/lib/navigation-links";

export default async function Aside() {
  // TOFIX type
  const data: { data: string[]; message: string } = await fetch(
    process.env.APP_LINK + "/api/files",
    { method: "GET" }
  ).then((data) => data.json());
  console.log(data);

  return (
    <aside className={styles.aside}>
      <nav className={styles.asideNav}>
        {data.data.map((name) => (
          <Link href={navLink.file(name)} key={name}>
            {name}
          </Link> // TOFIX: name is a bad key
        ))}
        <Link href={navLink.create}>+</Link>
      </nav>
    </aside>
  );
}

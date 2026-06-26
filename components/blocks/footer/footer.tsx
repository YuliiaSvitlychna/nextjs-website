import Link from "next/link";
import styles from "./footer.module.scss";
import getDbConfigs from "@/lib/db/actions/get-db-configs";

export async function Footer() {
  const links = await getDbConfigs(["social_link_github", "social_link_linkedin", "social_link_x"]);

  return (
    <footer className={styles.footer}>
      {links.map((config) => (
        <Link
          key={config.id}
          href={config.value}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {config.label}
        </Link>
      ))}
    </footer>
  );
}

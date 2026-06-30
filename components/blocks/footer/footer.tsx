import Link from "next/link";
import styles from "./footer.module.scss";
import getDbConfigs from "@/lib/db/actions/get-db-configs";
import GitHub from "@/components/icons/github";
import LinkedIn from "@/components/icons/linkedin";
import X from "@/components/icons/x";

export async function Footer() {
  type IconComponent = typeof GitHub | typeof LinkedIn | typeof X;

  const socialLinksMap = new Map<string, IconComponent>([
    ["social_link_github", GitHub],
    ["social_link_linkedin", LinkedIn],
    ["social_link_x", X],
  ]);

  const linkConfigs = await getDbConfigs(Array.from(socialLinksMap.keys()));

  return (
    <footer className={styles.footer}>
      {linkConfigs.map((linkConfig) => {
        const Icon = socialLinksMap.get(linkConfig.id) as IconComponent;

        return (
          <Link
            key={linkConfig.id}
            href={linkConfig.value}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className={`${styles["social-icon"]} w-6 h-6`} aria-hidden="true" />
          </Link>
        );
      })}
    </footer>
  );
}

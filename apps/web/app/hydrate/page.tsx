import { ServerComponent, HydratedComponent } from "@repo/ui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ServerComponent />

        <HydratedComponent />
      </main>
    </div>
  );
}

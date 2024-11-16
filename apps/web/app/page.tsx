import {
  ServerComponent,
  ClientComponent,
  ClientProvider,
  EntertainmentConfig,
} from "@repo/ui";
import styles from "./page.module.css";

export default function Home() {
  const config = EntertainmentConfig.getConfig();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ClientProvider config={config}>
          <ServerComponent />

          <ClientComponent />
        </ClientProvider>
      </main>
    </div>
  );
}

import { Cookie as CookieType } from "../../domain/product";
import { useStore } from "../../services/store";
import { Cookie } from "../Cookie";
import styles from "./Front.module.css";

export function Front() {
  const { cookies } = useStore();

  return (
    <main>
      <h1>Печеньки</h1>

      <ul className={styles.list}>
        {cookies.map((cookie: CookieType) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
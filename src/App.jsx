import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugit officiis similique, neque delectus officia animi. Cumque, aspernatur minima officiis, alias doloremque sint rem maxime vero amet, enim ut corporis?"
          />

          <Post author="Gabizinha" content="UHHUUlll" />
        </main>
      </div>
    </div>
  );
}

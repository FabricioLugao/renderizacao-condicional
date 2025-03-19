import { useState } from "react";
import Posts from "./Posts";
import Mensagens from "./Mensagens";

function Home({ onLogout }) {
  const [section, setSection] = useState("posts");
  const mensagens = ["Mensagem 1", "Mensagem 2"];

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => setSection("posts")}>Posts</button>
      <button onClick={() => setSection("mensagens")}>Mensagens</button>
      <button onClick={onLogout}>Logout</button>
      <Posts />
      <Mensagens mensagens={mensagens} />
    </div>
  );
}

export default Home;

import ListaMensagens from "./components/ListaMensagens.jsx";

function Mensagens({ mensagens }) {
  return (
    <div>
      <h2>Mensagens</h2>
      <p>Não há novas mensagens</p>
      <p>Quantidade de mensagens: {mensagens.length}</p>
      <ListaMensagens mensagens={mensagens} />
    </div>
  );
}

export default Mensagens;

function ListaMensagens({ mensagens }) {
  return (
    <ul>
      {mensagens.map((mensagem, index) => (
        <li key={index}>{mensagem}</li>
      ))}
    </ul>
  );
}

export default ListaMensagens;

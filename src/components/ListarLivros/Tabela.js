function Tabela({ items }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Tabela de livros</th>
          </tr>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td> {item.title} </td>
              <td> {item.author} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Tabela;

import { Table } from "react-bootstrap";

function Tabela({ items }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Seção</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td> {item.title} </td>
              <td> {item.author} </td>
              <td> {item.publisher} </td>
              <td> {item.section} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Tabela;

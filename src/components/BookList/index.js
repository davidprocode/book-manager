import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import ListGroup from "react-bootstrap/ListGroup";
import { Col, Row } from "react-bootstrap";

function BookList({ categoria, livros }) {
  return (
    <ListGroup>
      <ListGroup.Item as="li" className="" active>
        {categoria}
      </ListGroup.Item>

      {livros.map((livro, index) => {
        return (
          <ListGroup.Item as="li" key={index}>
            <Row>
              <Col>{livro.id}</Col>
              <Col>{livro.titulo}</Col>
              <Col>{livro.autor}</Col>
              <Col>
                <ButtonGroup>
                  <Button variant="warning">Editar</Button>
                  <Button variant="danger">Deletar</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default BookList;

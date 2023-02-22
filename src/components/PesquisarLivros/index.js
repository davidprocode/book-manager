import { useState } from "react";

import Loading from "../Loading";
import Tabela from "./Tabela";

import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Button, Container, Form } from "react-bootstrap";

function ListarLivros() {
  const [books, setBooks] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value.split(""));
  };
  const [search, setSearch] = useState([]);

  const Fetchdata = async () => {
    console.log(search);
    const booksRef = collection(db, "books");
    const q = query(booksRef);
    await getDocs(q).then((querySnapshot) => {
      const booksArray = [];
      querySnapshot.forEach((childSnapshot) => {
        booksArray.push(childSnapshot.data());
      });
      setBooks(booksArray);
    });
  };

  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Label>Pesquisar</Form.Label>
        <Form.Control
          placeholder="Pesquisar livro"
          onChange={handleSearch}
        ></Form.Control>
      </Form.Group>
      <Button onClick={Fetchdata}>Pesquisar</Button>

      {books.length === 0 ? <Loading /> : <Tabela items={books} />}
    </Container>
  );
}

export default ListarLivros;

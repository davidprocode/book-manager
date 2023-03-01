import { useState } from "react";

import Loading from "../Loading";
import Tabela from "./Tabela";

import { db } from "../../utils/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Container } from "react-bootstrap";

function ListarLivros() {
  const [books, setBooks] = useState([]);
  window.addEventListener("load", () => {
    Fetchdata();
  });

  const Fetchdata = async () => {
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
      {books.length === 0 ? <Loading /> : <Tabela items={books} />}
    </Container>
  );
}

export default ListarLivros;

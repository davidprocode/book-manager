import { useEffect, useState } from "react";

import Loading from "../Loading";
import Tabela from "./Tabela";

import { db } from "../../utils/firebase";
import { collection, getDocs, query } from "firebase/firestore";

function ListarLivros() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    return async () => {
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
  }, [books, setBooks]);

  return <>{books.length === 0 ? <Loading /> : <Tabela items={books} />}</>;
}

export default ListarLivros;

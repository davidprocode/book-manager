import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { db } from "../../utils/firebase";
import { doc, setDoc, collection } from "firebase/firestore";

const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const handleTitle = (e) => setTitle(e.target.value);

  const [author, setAuthor] = useState("");
  const handleAuthor = (e) => setAuthor(e.target.value);

  const [publisher, setPublisher] = useState("");
  const handlePublisher = (e) => setPublisher(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { title, author, publisher };
    const newBookRef = doc(collection(db, "books", "section"));
    try {
      await setDoc(newBookRef, data);
    } catch (error) {
      if (error) console.log("Error: ", error.message);
    }
  };

  return (
    <Container>
      <h2>Adicionar novo livro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Titulo do Livro"
            value={title}
            onChange={handleTitle}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Autor do Livro"
            value={author}
            onChange={handleAuthor}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="publisher">
          <Form.Label>Editora</Form.Label>
          <Form.Control
            type="text"
            placeholder="Editora do Livro"
            value={publisher}
            onChange={handlePublisher}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Adicionar
        </Button>
      </Form>
    </Container>
  );
};

export default NewBookForm;

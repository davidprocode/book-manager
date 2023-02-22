import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

const AdicionarLivroForm = () => {
  const [section, setSection] = useState("");
  const handleSection = (e) => setSection(e.target.value);

  const [title, setTitle] = useState("");
  const handleTitle = (e) => setTitle(e.target.value);

  const [author, setAuthor] = useState("");
  const handleAuthor = (e) => setAuthor(e.target.value);

  const [publisher, setPublisher] = useState("");
  const handlePublisher = (e) => setPublisher(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { title, author, publisher };
    if (!title || !author || !publisher) {
      alert("Preencha todos os campos");
    } else {
      const newBookRef = doc(db, "books", section);
      try {
        await setDoc(newBookRef, data).then(() => {
          alert("Livro cadastrado com sucesso!");
          setSection("");
          setTitle("");
          setAuthor("");
          setPublisher("");
        });
      } catch (error) {
        if (error) console.log("Error: ", error.message);
      }
    }
  };

  return (
    <Container>
      <h2>Adicionar novo livro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="section">
          <Form.Label>Seção</Form.Label>
          <Form.Select
            aria-label="Selecione a seção do livro"
            onChange={handleSection}
            value={section}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

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

export default AdicionarLivroForm;

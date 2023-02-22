import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

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
    const data = { title, author, publisher, section };
    if (!title || !author || !publisher) {
      alert("Preencha todos os campos");
    } else {
      try {
        const docRef = collection(db, "books");
        await addDoc(docRef, data).then(() => {
          alert("Livro cadastrado com sucesso!");
          setSection("");
          setTitle("");
          setAuthor("");
          setPublisher("");
        });
      } catch (error) {
        if (error) alert("Error: " + error.message);
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
            <option value="Ciências Exatas">Ciências Exatas</option>
            <option value="Ciências Biológicas">Ciências Biológicas</option>
            <option value="Engenharias">Engenharias</option>
            <option value="Ciências da Saúde">Ciências da Saúde</option>
            <option value="Ciências Agrárias">Ciências Agrárias</option>
            <option value="Ciências Sociais">Ciências Sociais</option>
            <option value="Ciências Humanas">Ciências Humanas</option>
            <option value="Linguística, Letras E Artes">
              Linguística, Letras E Artes
            </option>
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

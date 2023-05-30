import Header from "../components/header.jsx"
import Navbara from "../components/navbar.jsx"
import Footer from "../components/footer.jsx"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contato(){
    return(
        <div>
        <Header></Header>
        <Navbara></Navbara>
        <main>
            <h1 className="contato-equipe">
                Entre em contato com nossa equipe!
            </h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de E-mail</Form.Label>
        <Form.Control type="email" placeholder="E-mail" />
        <Form.Text className="text-muted">
        Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descrição</Form.Label>
        <Form.Control type="text" placeholder="Digite o problema ou tire alguma dúvida" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
        </main>
        <Footer></Footer>
        </div>
    )
}

export default Contato
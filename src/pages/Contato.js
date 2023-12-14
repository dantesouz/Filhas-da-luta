import { Col, Row, Button } from "reactstrap";
import ItemForm from "../components/ItemForm";
import img3 from "../img/img3.jpg";
import atendente from "../img/atendente.jpg";
function Contato() {
    return (
        <div>
            <Row className="my-4">
                <Col>
                    <h1 className="display-4 text-center py-5">Fale Conosco</h1>
                </Col>
            </Row>
            <Row className="mb-4 mx-3">
                <Col className="my-sm-4" >
                    <ItemForm label="Nome" name="nome" type="text" ph="Digite seu nome." />
                    <ItemForm label="Email" name="email" type="email" ph="Digite seu e-mail." />
                    <ItemForm label="Telefone" name="telefone" type="tel" ph="Digite seu telefone." />
                    <ItemForm label="Assunto" name="assunto" type="text" ph="Informe o assunto da mensagem." />
                    <ItemForm label="Mensagem" name="mensagem" type="text" ph="Digite a mensagem a ser encaminhada para nossa equipe." />
                    <Button color="danger" block>Enviar</Button>
                </Col>
                <Col>
                    {/* Foto de uma pessoa sorrindo */}
                    <img src={atendente} className="rounded-circle d-block mx-auto" alt="Atendente"></img>
                </Col>
            </Row>
        </div>
    );
}
export default Contato;
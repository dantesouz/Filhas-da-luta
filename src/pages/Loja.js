import ItemLoja from "../components/ItemLoja";
import { Col, Row } from "reactstrap";
import batata from '../img/batata.jpg';
import tomate from '../img/tomate.jpg';
import cebola from '../img/cebola.jpg';
import pimentao from '../img/pimentao.jpg';
import salsinha from'../img/salsinha.jpg';
import couveflor from '../img/couveflor.jpg';
import mandioca from '../img/mandioca.jpg';
import cenoura from'../img/cenoura.jpg';

function Loja() {
        return (
<div>
            <Row>
                <Col>
                <h1 className="display-4 text-center">Nosso Cardapio</h1>
                </Col>
            </Row>
            <Row className="mt-3">
            <Col>
                <ItemLoja  titulo="Batata" img={batata} descricao="Um vegetal de amido consumido como alimento, versátil e usado em várias receitas."/>
            </Col>
            <Col>
                <ItemLoja titulo="tomate" img={tomate} descricao="Fruto comum em culinária, utilizado fresco ou processado para molhos, saladas e outros pratos."/>
            </Col>
            <Col>
                <ItemLoja titulo="Cebola" img={cebola} descricao="Vegetal aromático usado como ingrediente base em muitas receitas, adicionando sabor." />
            </Col>
            <Col>
                <ItemLoja titulo="Pimentão" img={pimentao} descricao=" Um vegetal colorido e saboroso, frequentemente utilizado em saladas, pratos cozidos e grelhados."/>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <ItemLoja titulo="Salsinha" img={salsinha} descricao=" Erva aromática usada como tempero para realçar o sabor de diversos pratos." />
            </Col>
            <Col>
                <ItemLoja titulo="Couve-Flor" img={couveflor} descricao=" Uma variedade de repolho com flores comestíveis, geralmente cozida ou usada em preparações como arroz de couve-flor."/>
            </Col>
            <Col>
                <ItemLoja titulo="Mandioca" img={mandioca} descricao=" Raiz rica em amido, consumida cozida ou processada em forma de farinha, utilizada em muitas culinárias." />
            </Col>
            <Col>
                <ItemLoja titulo="Cenoura" img={cenoura} descricao=" Raiz alaranjada rica em betacaroteno, comumente consumida crua, cozida ou como parte de saladas."/>
            </Col>
        </Row>
    </div>
        )
    }
export default Loja
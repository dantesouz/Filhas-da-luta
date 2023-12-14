import { Row, Col } from "reactstrap";
import CarouselInicio from "../components/CarouselInicio";
import ItemLoja from "../components/ItemLoja";
import filhasdaluta from '../img/filhasdaluta.jpg';
import img4 from '../img/img4.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

function Home() {
    return (
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o Carousel */}
                    <CarouselInicio />
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Filhas da Luta</h1>
                
                </Col>
            </Row>
            <Row>

                <Col>
                <ItemLoja titulo="Filhas da luta" img={filhasdaluta} descricao="" />
                </Col>

                <Col>
                <ItemLoja titulo="img2" img={img2} descricao="" />
                </Col>

                <Col>
                <ItemLoja titulo="img3" img={img3} descricao=""/>
                </Col>

                <Col>
                <ItemLoja titulo="img4"img={img4} descricao="" />
                </Col>
            </Row>
        </div> 
    );
}
export default Home;
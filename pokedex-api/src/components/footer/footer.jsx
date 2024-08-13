import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./footer.scss";

function Footer(){
    return(
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <span>Sam </span>
                        </Col>
                        <Col className="text-center">
                            <span>Théo </span>
                        </Col>
                        <Col className="text-center">
                            <span>Solen </span>
                        </Col>
                    </Row>
                    <Row>   
                        <Col className="text-center mt-3">
                            <span>&copy; 2024 Pokemon DWWM</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )

}
export default Footer;
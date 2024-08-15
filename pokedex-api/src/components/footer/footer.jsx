import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./footer.scss";

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <>
        <footer className="footer text-center text-lg-start">
            <Container className="p-4">
                <Row>
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <h5 className="text-uppercase">Mon Site</h5>
                        <p>Adresse : 1234 Rue Fictive, Ville, Pays</p>
                    </Col>
                    <Col lg={3} className="mb-4 mb-lg-0">
                        <h5 className="text-uppercase">Liens</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#terms" className="footer-link">Conditions générales</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h5 className="text-uppercase">Date</h5>
                        <p>© {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )

}
export default Footer;
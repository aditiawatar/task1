import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import gog from "../../Images/Logos.png";

function SecondPage() {
  return (
    <Container fluid m="0" style={{backgroundColor:'#EFE5FF', overflowX:'hidden', boxShadow:'0px 4px 4px 0px #00000040'}}>
      <Row>
        <Col style={{ height: "auto", padding: "30px" }} sm={12}>
          <Container>
            <Col sm={12}>
              <h6
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#AD93DF",
                  paddingBottom: "17px",
                }}
              >
                Hire for 1000+ Brands Including
              </h6>
            </Col>
          </Container>

          <img src={gog} alt="" width="100%" />
        </Col>
      </Row>
      <Row>
    </Row>
    </Container>
  );
}

export default SecondPage;

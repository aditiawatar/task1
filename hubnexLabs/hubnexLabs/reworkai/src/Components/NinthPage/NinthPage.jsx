import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import amazon from "../../Images/amazon.png"
import google from "../../Images/google.png"
import micro from "../../Images/micro.png"

function NinthPage() {
  return (
    <Container style={{overflowX:'hidden'}}>
      <Row>
        <Col sm={3}>
          <h1 style={{ width: '341px', height: '59px', marginTop: '77px', fontWeight: '600', fontSize: '42px', lineHeight: '58.5px', color: '#5C27C0',marginBottom:'52px' }}>Success <span style={{ fontWeight: '400' }}>Stories</span></h1>
        </Col>
      </Row>
      <Row>
        <Col style={{marginBottom:'135px'}}>
          <CardGroup>
            <Card style={{ marginLeft: '5px', marginRight: '20px', borderRadius:'16px'}}>
              <Card.Img variant="top" src={amazon} alt='' style={{borderTopLeftRadius:'16px', borderTopRightRadius:'16px'}}/>
              <Card.Body style={{boxShadow:'0px 2px 20px 0px #00000021'}}>
                <Card.Title style={{width:'344px', height:'81px', fontWeight:'500', fontSize:'23px', lineHeight:'27px'}}>Rework has been a great way<br/> to make the hiring process<br/> easier and faster.</Card.Title>
                <Card.Text style={{width:'344px', height:'108px', fontWeight:'400', fontSize:'18px', lineHeight:'27px'}}>
                “We've been able to save money and<br/> time, and the recruiters have been<br/> able to find the best employers leads.<br/> Highly recommend! “
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{marginRight: '20px', borderRadius:'16px'}}>
              <Card.Img variant="top" src={google} alt='' style={{borderTopLeftRadius:'16px', borderTopRightRadius:'16px'}}/>
              <Card.Body style={{boxShadow:'0px 2px 20px 0px #00000021'}}>
                <Card.Title style={{width:'344px', height:'81px', fontWeight:'500', fontSize:'23px', lineHeight:'27px'}}>Rework has been a great way<br/> to make the hiring process<br/> easier and faster.</Card.Title>
                <Card.Text style={{width:'344px', height:'108px', fontWeight:'400', fontSize:'18px', lineHeight:'27px'}}>
                “We've been able to save money and<br/> time, and the recruiters have been<br/> able to find the best employers leads.<br/> Highly recommend! “{' '}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{borderRadius:'16px', marginRight:'21px'}}>
              <Card.Img variant="top" src={micro} alt='' style={{borderTopLeftRadius:'16px', borderTopRightRadius:'16px'}}/>
              <Card.Body style={{boxShadow:'0px 2px 20px 0px #00000021'}}>
                <Card.Title style={{width:'344px', height:'81px', fontWeight:'500', fontSize:'23px', lineHeight:'27px'}}>Rework has been a great way<br/> to make the hiring process<br/> easier and faster.</Card.Title>
                <Card.Text style={{width:'344px', height:'108px', fontWeight:'400', fontSize:'18px', lineHeight:'27px'}}>
                “We've been able to save money and<br/> time, and the recruiters have been<br/> able to find the best employers leads.<br/> Highly recommend! “
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default NinthPage;
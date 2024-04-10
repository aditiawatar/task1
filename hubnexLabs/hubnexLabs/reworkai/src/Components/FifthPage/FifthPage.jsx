import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './FifthPage.css'
import { Card, CardBody } from 'react-bootstrap';
import correct from '../../Images/correct.png';
import wrong from '../../Images/wrong.png';


const FifthPage=()=> {
  return (
    <Container style={{overflowX:'hidden'}}>
      <Row>
        <Col style={{marginTop:'67px'}} sm={12}>
            <h1 className={styles.heading} style={{fontWeight:'600', color:'#5C27C0'}}>
            Choose Your Simple,
            <span className={styles.span} style={{fontWeight:'400'}}>Transparent Pricing</span> </h1>
        </Col>
        </Row>

        <Row  style={{display:"flex" ,justifyContent:"space-between"}}>
        <Col style={{marginTop:'80px',}} sm={4}>
            <Card style={{ borderRadius:'3%'}} >
                <CardBody>
                  <p className={styles.monthHead} style={{marginLeft:'150px', color:'#5C27C0', lineHeight:'31px'}}>1 Month</p>
                    <br />
                  <h1 className={styles.moneyHead} style={{marginLeft:'90px'}}>₹199.00
                  <span className={styles.spanMoney} style={{fontSize:'16px'}}>/month</span></h1>
                    <br />
                  <h1 className={styles.subDet} style={{marginLeft:'70px', color:'#5C27C0', fontSize:'18px'}}>Suitable for companies with<br/>  5-10 openings</h1>
                    <br/>
                  <div > 
                  <ul style={{listStyle:'none', textAlign:'justify',lineHeight: '35px',marginLeft: '15px'}}>
                       
                    <li> <img src={correct} alt='' className="styles.correct" /> 10 interview-ready candidates </li>
                    <li> <img src={correct} alt='' className="styles.correct" /> Unlimited job postings</li> 
                    <li> <img src={correct} alt='' className="styles.correct" /> Receive pre-vetted profiles <br/> <span style={{ paddingLeft: "28px"}}>within 48 hours</span> </li>
                    <li> <img src={wrong} alt='' className="styles.correct" /> Dedicated account manager </li>
                    <li> <img src={wrong} alt='' className="styles.correct" /> Assistance with interview <br/> <span style={{paddingLeft: "28px"}}>scheduling</span> </li>
                    <li> <img src={wrong} alt='' className="styles.correct" /> Custom reports </li>

                    </ul>
                    </div>
                    <br/>
                    <button className={styles.buttonCOM} style={{width:'296px', height:'59px', marginLeft:'42px', marginBottom:'15px', fontSize:'18px', borderRadius:'10px', color:'#FFFFFF', backgroundColor:'#5C27C0'}}>  Get Started</button>
                </CardBody>
            </Card>
       </Col>
        
        
   <Col style={{marginTop:'80px',}} sm={4}>
    <Card style={{ borderRadius:'3%',}}>
        <CardBody style={{background: 'rgba(92, 39, 192, 1)',borderRadius:'3%'}}>
          <p className={styles.monthHead} style={{color:"rgba(246, 246, 246, 1)", marginLeft:'150px', lineHeight:'31px'}}>3 Month</p>
          <br />
             <h1 style={{color:"rgba(246, 246, 246, 1)", marginLeft:'90px'}} className={styles.moneyHead}>₹149.00 
              <span style={{color: "rgba(246, 246, 246, 1)", fontSize:'16px'}}
                className={styles.spanMoney} >/month</span></h1>
                 <br />
              <h1 style={{color: "rgba(246, 246, 246, 1)", fontSize:'18px', marginLeft:'70px'}} className={styles.subDet}>Suitable for companies with<br/>  5-10 openings</h1>
                 <br/>
              
          <div > 
              <ul style={{listStyle:'none',
                          textAlign:'justify',
                          lineHeight: '35px',
                          marginLeft: '15px',
                          color:"rgba(246, 246, 246, 1)"
                          }}>
                       
               <li> <img src={correct} alt='' className="styles.correct" /> 10 interview-ready candidates </li>
               <li> <img src={correct} alt='' className="styles.correct" /> Unlimited job postings</li> 
               <li> <img src={correct} alt='' className="styles.correct" /> Receive pre-vetted profiles <br/> <span style={{ paddingLeft: "28px"}}>within 48 hours</span> </li>
               <li> <img src={wrong} alt='' className="styles.correct" /> Dedicated account manager </li>
               <li> <img src={wrong} alt='' className="styles.correct" /> Assistance with interview <br/> <span style={{paddingLeft: "28px"}}>scheduling</span> </li>
               <li> <img src={wrong} alt='' className="styles.correct" /> Custom reports </li>

              </ul>
            </div>
                <br/>
            <button style={{width:'296px', height:'59px', marginLeft:'42px', marginBottom:'15px', fontSize:'18px', borderRadius:'10px', color:'#5C27C0', backgroundColor:'#FFFFFF'}} className={styles.buttonCOM}>  Get Started</button>
       </CardBody>
      </Card>
    
  </Col>
        
  <Col style={{marginTop:'80px'}} sm={4}>
       <Card style={{ borderRadius:'3%'}}>
          <CardBody>
               <p className={styles.monthHead} style={{marginLeft:'150px', color:'#5C27C0', lineHeight:'31px'}}>6 Month</p>
               <br />
               <h1 className={styles.moneyHead} style={{marginLeft:'90px'}}>₹169.00
                 <span className={styles.spanMoney} style={{fontSize:'16px'}}>/month</span></h1>
                 <br />
                <h1 className={styles.subDet} style={{color:'#5C27C0', fontSize:'18px', marginLeft:'70px'}}>Suitable for companies with<br/>  5-10 openings</h1>
                  <br/>
                    
                <div > 
                  <ul style={{listStyle:'none', textAlign:'justify',lineHeight: '35px',marginLeft: '15px'}}>
                       
                    <li> <img src={correct} alt='' className="styles.correct" /> 10 interview-ready candidates </li>
                    <li> <img src={correct} alt='' className="styles.correct" /> Unlimited job postings</li> 
                    <li> <img src={correct} alt='' className="styles.correct" /> Receive pre-vetted profiles <br/> <span style={{ paddingLeft: "28px"}}>within 48 hours</span> </li>
                    <li> <img src={wrong} alt='' className="styles.correct" /> Dedicated account manager </li>
                    <li> <img src={wrong} alt='' className="styles.correct" /> Assistance with interview <br/> <span style={{paddingLeft: "28px"}}>scheduling</span> </li>
                    <li> <img src={wrong} alt='' className="styles.correct" /> Custom reports </li>

                  </ul>
                </div>
                  <br/>
                <button className={styles.buttonCOM} style={{width:'296px', height:'59px', marginLeft:'42px', marginBottom:'15px', fontSize:'18px', borderRadius:'10px', color:'#FFFFFF', backgroundColor:'#5C27C0'}}>  Get Started</button>
                </CardBody>
            </Card>
        </Col>

        <Col style={{marginTop:'90px', marginLeft:'150px'}} sm={2}>
               <button className={styles.buttonDomo} style={{width:'180px', height:'59px', borderRadius:'10px', border:'2px solid #5C27C0', backgroundColor:'#F6F6F6', color:'#5C27C0', marginBottom:'56px'}}> Book a demo</button>    
        </Col>
      </Row>
    
    </Container>
  );
}

export default FifthPage;

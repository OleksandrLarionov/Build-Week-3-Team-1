import { Col, Row , Container } from 'react-bootstrap';
import logo from '../default-share.png';

const NotFound = () => {
  return (
    <Container fluid>
    <Row id='notFound' className='full-height'>
        <Col xs={12}>
        <img src={logo} alt="ciao" className='logo'  onClick={() =>window.location.assign('/Home')} />
        </Col>
        
        <Col xs={12}> <div className='contenuto '>
          <h1>Pagina non trovata</h1>
          <Row className='flex-column '>
            <Col>Non abbiamo trovato la pagina che stai cercando. Prova a tornare alla</Col>
            <Col>pagina precedente o visita il nostro Centro assistenza per saperne di
            più.
            </Col>
            <Col className='mt-4'> <div id='bb' onClick={() =>window.location.assign('/Home')} ><p>vai al tuo feed</p></div></Col>
            
          </Row>
         
        </div>
        </Col>
        <Col xs={12}></Col>
      
      
    </Row>
    </Container>
  );
};

export default NotFound;


   
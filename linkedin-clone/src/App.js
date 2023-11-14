import './App.css';
import MyCentral from './components/MyCentral';
import { Row, Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid >
    <Row className='justify-content-center'>
    <MyCentral/>
    </Row>
    </Container>
  );
}

export default App;

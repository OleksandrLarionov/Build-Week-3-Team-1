import './App.css';
import MyHome from './components/MyHome';
import { Row, Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid >
    <Row className='justify-content-center'>
    <MyHome/>
    </Row>
    </Container>
  );
}

export default App;

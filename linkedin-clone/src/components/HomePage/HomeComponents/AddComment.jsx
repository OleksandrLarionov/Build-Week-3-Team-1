import SingleComment from './SingleComment';
import { Container,Row,Col,Form} from 'react-bootstrap';
import { useSelector} from 'react-redux';
import { IoMdHappy, IoMdSad, IoMdThumbsUp, IoMdThumbsDown, IoMdHeart } from 'react-icons/io';
import { IoIosImage, IoIosDocument } from 'react-icons/io';
import { FaFileImage, FaFilePdf, FaFile } from 'react-icons/fa';

const CommentList = () => {
    const user = useSelector((state) => state.user.userData);
    return (
    <Container>
         <Row className="mb-3">
        <Col md={1}>
          <img
            src={user[0]?.image}
            alt="User"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
        </Col>
        <Col md={9}>
          <Form>
            <Form.Group controlId="commentText">
              <Form.Control as="textarea" rows={2} placeholder="Inserisci il tuo commento..." />  
            </Form.Group>
          </Form>
        </Col>
        <Col md={2}> 
            <IoMdHappy className="mr-2" size={20} />
            <IoIosImage className="mr-2" size={20} />
        </Col>
      </Row>
      
      {/* {comments.map(() => ( */}
        <SingleComment key='comment._id' user='iduser' />
        <SingleComment key='comment._id' user='iduser' />
        <SingleComment key='comment._id' user='iduser' />
      {/* ))} */}
    </Container>
  );
};



export default CommentList;

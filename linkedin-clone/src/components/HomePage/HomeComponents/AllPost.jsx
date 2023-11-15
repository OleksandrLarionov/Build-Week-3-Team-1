import React, { useEffect, useState } from 'react';
import { Card, Form, Button , Row , Col} from 'react-bootstrap';
import { FcCalendar, FcPicture, FcTemplate } from 'react-icons/fc';
import { useSelector } from 'react-redux';

const API_URL = 'https://striveschool-api.herokuapp.com/api/posts/';

const MyPostComponents = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const user = useSelector((state) => state.user.userData);

  const fetchPosts = () => {
    fetch(API_URL, {
      headers: {
        'Authorization':
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTdiYmM1NWU3ZTAwMThmODNiZmIiLCJpYXQiOjE2OTk4NjY1NTYsImV4cCI6MTcwMTA3NjE1Nn0.0n8X0s6yl9NBb7CzEgnDxCdlw4P1RRcSjfwOeqmGSzM',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Elenco dei post', data);
        setPosts(data.reverse());
      })
      .catch((error) => {
        console.error('Errore nella fetch', error);
      });
  };

  useEffect(() => {
    if (!newPostText) {
      fetchPosts();
    }
  }, [newPostText]);
  
  const handlePostSubmit = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTdiYmM1NWU3ZTAwMThmODNiZmIiLCJpYXQiOjE2OTk4NjY1NTYsImV4cCI6MTcwMTA3NjE1Nn0.0n8X0s6yl9NBb7CzEgnDxCdlw4P1RRcSjfwOeqmGSzM',
      },
      body: JSON.stringify({ text: newPostText }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        setNewPostText('');
        // Dopo aver inviato con successo il post, aggiorna la lista dei post
        fetchPosts();
      })
      .catch((error) => {
        console.error('Error submitting post:', error);
      });
  };

  return (
    <>

<Row className="px-0 mb-1 border rounded-3 m-2 flex-column py-3 elements">
      <Col className="d-flex align-items-center">
        <img
          src={user[0]?.image}
          alt="profile"
          style={{
            height: '50px',
            width: '50px',
            borderRadius: '75px',
            border: '3px solid white',
          }}
        />
        <Form.Control
          type="text"
          placeholder="Avvia un post"
          className="rounded-pill w-100 ms-2"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
       <Button variant="primary" onClick={handlePostSubmit}>
          Invia Post
        </Button>
      </Col>
      
      <Col className="d-flex  w-100 justify-content-center pt-3">
      <Row className="w-100 text-secondary">
          <Col className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FcPicture className="mb-3 me-2 fs-4" />
              <p>Contenuti multimediali</p>
            </div>
            <div className="d-flex align-items-center">
              <FcCalendar className="mb-3 me-2 fs-4" />
              <p>Evento</p>
            </div>
            <div className="d-flex align-items-center">
              <FcTemplate className="mb-3 me-2 fs-4" />
              <p>Scrivi un articolo</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

    {
      posts.map((post) => (
        <Card key={post._id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.username}</Card.Title>
            <Card.Text>{post.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default MyPostComponents;
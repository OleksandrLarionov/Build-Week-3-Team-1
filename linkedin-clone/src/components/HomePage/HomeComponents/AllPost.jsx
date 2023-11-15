import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const API_URL = 'https://striveschool-api.herokuapp.com/api/posts/';

const MyPostComponents = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

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
      console.error('Erroew nella fatch', error);
    });
  };

  useEffect(() => {
    fetchPosts();
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
    })
    .catch((error) => {
      console.error('Error submitting post:', error);
    });
  };
  

  return (
    <>
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Scrivi un nuovo post..."
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <Button variant="primary" onClick={handlePostSubmit}>
          Invia Post
        </Button>
      </Form>

      {!newPostText && posts.map((post) => (
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

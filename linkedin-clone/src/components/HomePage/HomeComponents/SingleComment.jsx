import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import scimmia from "../../../../src/scimmia.jpg";
import { useDispatch } from "react-redux";
import { fetchPostsAction } from "../../../redux/action/post";
import {useSelector } from "react-redux/es/hooks/useSelector";

const SingleComment = ({ data }) => {
	const user = useSelector((state) => state.user.userData && state.user.userData[0]);
  const dispatch = useDispatch();
  return (
    <Row className="mb-4 mx-0">
      <Col xs={2} className="d-flex justify-content-end pe-0">
        <img
          src={ user.image ? `${user.image}`: `${scimmia}`}
          alt="User"
          style={{ width: "45px", height: "45px", borderRadius: "50%" }}
        />
      </Col>
      <Col xs={10} className="rounded mb-2 " style={{backgroundColor:'rgb(242,242,242)', borderTopLeftRadius:'0'}}>
       
          <p className="pt-1 mb-0 fw-bold">{data.author}</p>
       
        <p className="mb-0 text-secondary" style={{fontSize:'0.8rem'}}>JOB</p>
        <p>{data.comment}</p>
      </Col>
	  <Col xs={12} className="text-end mb-2">
      <Button
	    className="rounded-pill"
        variant="danger"
        onClick={async (e) => {
          e.preventDefault();
          const commentApi = `https://striveschool-api.herokuapp.com/api/comments/${data._id}`;
          try {
            const commentData = await fetch(commentApi, {
              method: "DELETE",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZjdiYTE1ODgwMTAwMTg2NDJjYmQiLCJpYXQiOjE3MDAxMzI3OTUsImV4cCI6MTcwMTM0MjM5NX0.kIpOi5hXgT7IbuGh6RIit4L6T9Q6SVXmrOOMpKRCLj4",
              },
            });
          } catch (error) {
            console.log("Errore", error);
          }
          dispatch(fetchPostsAction());
        }}
      >
        Elimina
      </Button>
	  </Col>
	  <hr/>
    </Row>
  );
};

export default SingleComment;

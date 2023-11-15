import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "../../../redux/action";

const ShowProfile = () => {
  const mainUser = useSelector(
    (state) => state.user.userData && state.user.userData[0]
  )

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataAction());
  }, []); 

  

  return (
    <Row>
      <Col className="px-0 mb-1 border rounded-3 m-3 w-100">
        {mainUser && <User user={mainUser} />}
      </Col>
    </Row>
  );
};

export default ShowProfile

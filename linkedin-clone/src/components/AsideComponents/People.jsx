import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OneUser from "../oneUser";
import { changeModalAction } from "../../redux/action";

const People = () => {
  const profiles = useSelector(
    (state) => state.profile.profileData && state.profile.profileData[0]
  );
  const modal = useSelector(
    (state) => state.profile.modal && state.profile.modal
  );
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(changeModalAction(!modal[0]));
  };
  return (
    <>
      <Col className="rounded-3 m-2 pt-4 elements">
        <Row className="flex-column m-0">
          <Col >
            <h6 className="fw-bold">Persone che potresti conoscere</h6>
            <p className="text-secondary lh-1" style={{fontSize:'0.8rem'}}>Dalla tua scuola o università</p>
         
          <ListGroup className="">
            {profiles &&
              profiles
                .map((profile) => {
                  return <OneUser user={profile} key={profile._id} />;
                })
                .slice(0, 5)}
          </ListGroup>
		  </Col>
          <div className="border-top mt-2 bottom-part text-center py-2" onClick={toggleModal}>
		  <p className="mb-0 fw-bold text-secondary"  style={{fontSize:'0.9rem'}}>
          Mostra tutto
        </p>
          </div>
        </Row>
      </Col>
    </>
  );
};

export default People;

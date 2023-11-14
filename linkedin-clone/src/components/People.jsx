import { Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import OneUser from './oneUser'
import { changeModalAction } from '../redux/action'

const People = () => {
  const profiles = useSelector(
    (state) => state.profile.profileData && state.profile.profileData[0]
  )
  const modal = useSelector(
    (state) => state.profile.modal && state.profile.modal
  )
  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(changeModalAction(!modal[0]))
  }
  return (
    <>
      <Col className="border rounded-3 p-3 m-2">
        <Row className="flex-column">
          <Col>
            <h5>Persone che potresti conoscere</h5>
            <p className="text-secondary">Dalla tua scuola o università</p>
          </Col>
          <ListGroup>
            {profiles &&
              profiles
                .map((profile) => {
                  return <OneUser user={profile} key={profile._id} />
                })
                .slice(0, 5)}
          </ListGroup>
          <Col className="border-top mt-2 bottom-part" onClick={toggleModal}>
            <h5 className="text-center text-secondary mt-4 pb-3">
              Mostra tutto
            </h5>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default People

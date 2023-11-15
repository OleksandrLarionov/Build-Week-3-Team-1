import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useEffect } from 'react';



const ProfileEffect = () => {
  const user = useSelector((state) => state.user.userData);
  const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 600) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <Row
      className={`mx-0 bg-white justify-content-center border-top ${scrolled ? 'scrolled' : 'notVisible'}`}
      style={{
        height: "45px",
        boxShadow: "0 0px 2px rgba(0,0,0,0.19), 0 5px 3px rgba(0,0,0,0.23)"
      }}
    >
      <Col className="col-9">
        <Row className="justify-content-between align-items-center py-1">
          <Col className="col-4 d-flex">
            <div>
              <img
                src={user[0]?.image}
                alt="profile"
                style={{
                  height: "35px",
                  width: "35px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="ps-1">
              <p className="fw-bold mb-0" style={{fontSize:'0.9rem'}}>
                {user[0]?.name} {user[0]?.surname}
              </p>
              <p className="text-secondary lh-1 mb-0" style={{fontSize:'0.8rem'}}> {user[0]?.title}</p>
            </div>
          </Col>
          <Col className="col-8 d-flex justify-content-end" >
            <Button
              variant="primary"
              className="rounded-pill fw-bold me-2"
              style={{ maxWidth: "150px",fontSize:'0.8rem', height:'30px' }}
            >
              Disponibile per
            </Button>
            <Button
              variant="outline-primary"
              className="rounded-pill fw-bold  me-2"
              style={{ maxWidth: "250px" ,fontSize:'0.8rem', height:'30px' }}
            >
              Aggiungi sezione del profilo
            </Button>
            <Button
              variant="outline-secondary"
              className="rounded-pill fw-bold"
              style={{ maxWidth: "70px",fontSize:'0.8rem', height:'30px'  }}
            >
              Altro
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProfileEffect;

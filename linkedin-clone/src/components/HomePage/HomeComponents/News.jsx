import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsChevronCompactDown, BsDot, BsInfoSquareFill } from 'react-icons/bs';
import { useState } from 'react';

const News = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    const additionalNews = document.getElementById('additionalNews');
    additionalNews.classList.toggle('hidden');
    setShowMore(!showMore);
  };

  return (
    <Row className="w-100 px-0 mb-1 border rounded-3 mt-2 mx-0 w-100 flex-column elements">
      <Col className="d-flex justify-content-between align-items-center mt-2">
        <h5>LinkedIn Notizie</h5>
        <BsInfoSquareFill />
      </Col>
      <Col>
        <Row className="flex-column">
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">Esselunga ora compete con Tannico</p>
              <p className="mb-0 text-secondary">4 ore fa</p>
            </div>
          </Col>
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">Single e fieri di esserlo</p>
              <p className="mb-0 text-secondary">4 giorni fa • 367 lettori</p>
            </div>
          </Col>
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">I primi supermercati senza casse</p>
              <p className="mb-0 text-secondary">3 giorni fa</p>
            </div>
          </Col>
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">Un mercato del lavoro che invecchia</p>
              <p className="mb-0 text-secondary">19 ore fa • 104 lettori</p>
            </div>
          </Col>
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">Che cosa vuole l'Italia dall'AI</p>
              <p className="mb-0 text-secondary">3 giorni fa • 350 lettori</p>
            </div>
          </Col>
          <div id="additionalNews" className="hidden">
            <Col className="d-flex text-size justify-content-start bottom-part mb-2">
              <div>
                <BsDot className="fs-4" />
              </div>
              <div>
                <p className="mb-0 fw-bold">Nuova scoperta scientifica</p>
                <p className="mb-0 text-secondary">9 giorni fa • 1334 lettori</p>
              </div>
            </Col>
            <Col className="d-flex text-size justify-content-start bottom-part mb-2">
              <div>
                <BsDot className="fs-4" />
              </div>
              <div>
                <p className="mb-0 fw-bold">Avanzamenti tecnologici nel settore energetico</p>
                <p className="mb-0 text-secondary">2 giorni fa • 3428 lettori</p>
              </div>
            </Col>
            <Col className="d-flex text-size justify-content-start bottom-part mb-2">
              <div>
                <BsDot className="fs-4" />
              </div>
              <div>
                <p className="mb-0 fw-bold">Lavoro remoto: nuove sfide e opportunità'</p>
                <p className="mb-0 text-secondary">8 giorni fa • 782 lettori</p>
              </div>
            </Col>
            <Col className="d-flex text-size justify-content-start bottom-part mb-2">
              <div>
                <BsDot className="fs-4" />
              </div>
              <div>
                <p className="mb-0 fw-bold">Impatto dell'inquinamento sulla salute</p>
                <p className="mb-0 text-secondary">7 ore fa • 9368 lettori</p>
              </div>
            </Col>
            <Col className="d-flex text-size justify-content-start bottom-part mb-2">
              <div>
                <BsDot className="fs-4" />
              </div>
              <div>
                <p className="mb-0 fw-bold">Tendenze nel mondo della moda</p>
                <p className="mb-0 text-secondary">12 giorni fa • 193 lettori</p>
              </div>
            </Col>
          </div>
        </Row>
      </Col>
      <Col className="mt-2 ms-4">
        <p className="text-secondary bottom-part w-50 fw-bold" onClick={handleToggle}>
          {showMore ? 'Show less' : 'Show more'}{' '}
          <BsChevronCompactDown className={showMore ? 'rotate-icon' : ''} />
        </p>
      </Col>
    </Row>
  );
};

export default News;
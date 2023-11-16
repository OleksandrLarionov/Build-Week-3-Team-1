import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsXLg } from 'react-icons/bs'
import SideComponent from './SideComponent'
import { LuPenSquare } from 'react-icons/lu'
import FooterHome from '../HomePage/HomeComponents/FooterHome'

const Jobs = () => {
  const jobsData = useSelector((state) => state.job.list)
  return (
 
      <Row className="mx-0 mt-3 pt-3 justify-content-center">
        <Col xs={12} sm={10} md={4} lg={3} xl={2} className=" text-center me-md-2">
          <SideComponent />

          <Button
            className="mt-3 p-3 px-5 fw-bold text-center rounded-pill"
            variant="outline-primary"
          >
            <LuPenSquare className="fs-4 me-2" />
            Pubblica offerta gratuita
          </Button>
        </Col>
        <Col
          xs={12}
          sm={10}
          md={7}
          lg={5}
          xl={6} 
          className="elements m-2 p-2  rounded-3 d-flex flex-column justify-content-between "
          style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
          <h5 className="fw-bold pt-4 ps-2">Consigliato per te</h5>
          <p className="ps-2">
            Sulla base del tuo profilo e della tua cronologia delle ricerche
          </p>
          {jobsData.map((job) => {
            return (
              <>
                <div className="w-100 d-flex flex-column py-2 justify-content-between align-items-start">
                  <div className="w-100 d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="p-3">
                        <img
                          src="https://media.licdn.com/dms/image/C510BAQGpRhkpxp5A9A/company-logo_100_100/0/1630570672166/ernstandyoung_logo?e=1707955200&v=beta&t=Yzs1GtEj521VNToNS-FkMJk2n4jSYQO8A9JiWeIfO4Q"
                          alt="logo"
                        />
                      </div>
                      <div className="pt-3 w-100">
                        <Col>
                          <Link
                            to={`${job.url}`}
                            className="fs-5 fw-bold text-decoration-none"
                          >
                            {job.company_name}{' '}
                          </Link>
                        </Col>
                        <Col>
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none text-black"
                          >
                            {job.title}
                          </a>
                        </Col>
                      </div>{' '}
                    </div>
                    <div className="pt-3 pe-4 fs-4 text-secondary ">
                      <BsXLg />
                    </div>
                  </div>{' '}
                </div>
                <hr />
              </>
            )
          })}
        </Col>
        <Col xs={12} sm={10} md={11} lg={3} xl={2} className='ms-md-2'>
          <FooterHome />
        </Col>
      </Row>

  )
}

export default Jobs

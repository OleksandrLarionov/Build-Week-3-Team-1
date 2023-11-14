import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Jobs=()=>{
  const jobsData=useSelector((state)=>state.job.list) 
    return( jobsData.map((job)=>{
     return( <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`${job.url}`} >{job.company_name} </Link>
        </Col>
        <Col xs={9} className='d-flex justify-content-between'>
          <a href={job.url} target="_blank" rel="noreferrer">
            {job.title}
          </a>        
        </Col>
      </Row>)
    })
        
    )
    }
    
    export default Jobs
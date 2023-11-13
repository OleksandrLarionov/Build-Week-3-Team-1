import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { HiMiniUsers } from "react-icons/hi2";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { BsFillGrid3X3GapFill, BsFillBellFill } from "react-icons/bs";
import { MdOutlineMenuBook } from "react-icons/md";
import { TbFileAnalytics } from "react-icons/tb";
import { FaCompass, FaUsers } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";
import { FcAdvertising, FcTemplate } from "react-icons/fc";

import Button from "react-bootstrap/esm/Button";
import NavLink from "react-bootstrap/esm/NavLink";

const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-white justify-content-center  align-items-center px-auto "
      style={{ fontSize: "0.7rem" }}
    >
      <Row className="d-flex me-4  mb-3">
        <Col md={8} className="d-flex align-items-center">
          <div className="d-flex align-items-center ">
            <Navbar.Brand href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="40"
                height="40"
                focusable="false"
                style={{ color: "#0A66C2" }}
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div className="d-flex justify-content-center align-items-center">
                  <Form>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      id="color-placeholder"
                    />
                  </Form>
                </div>

                <div className="d-flex flex-column ">
                  <Nav.Link href="#">
                    <p className="text-center">
                      <AiFillHome className="fs-4 text-secondary" />
                      Home
                    </p>
                  </Nav.Link>
                </div>

                <div className="d-flex flex-column ">
                  <Nav.Link href="#">
                    <p className="text-center">
                      <HiMiniUsers className="fs-4 text-secondary" />
                      Rete
                    </p>
                  </Nav.Link>
                </div>

                <div className="d-flex flex-column  ms-2 ">
                  <Nav.Link href="#">
                    <p className="text-center">
                      <PiHandbagSimpleFill className="fs-4 text-secondary" />
                      Lavoro
                    </p>
                  </Nav.Link>
                </div>

                <div className="d-flex flex-column  ms-2 ">
                  <Nav.Link href="#">
                    <p className="text-center">
                      <AiFillMessage className="fs-4 text-secondary" />
                      Messaggistica
                    </p>
                  </Nav.Link>
                </div>

                <div>
                  <Nav.Link href="#">
                    <p className="text-center">
                      <BsFillBellFill className="fs-4 text-secondary" />
                      Notifiche
                    </p>
                  </Nav.Link>
                </div>
                <Nav.Link href="#">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src="https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="cane"
                      className="rounded-pill"
                      width={25}
                      height={25}
                    />
                    <NavDropdown title="tu" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3" >
                        <div className="d-flex">
                          <p className="fs-1 ">
                            <BiUserCircle />
                          </p>
                          <div className="d-flex flex-column">
                            <p className="d-flex  align-items-center mt-3  ">
                              Turiddu Assennato
                            </p>
                            <p>--</p>
                          </div>
                        </div>
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action4">
                        <Button
                          className=" d-flex justify-content-center align-items-center  rounded-pill w-100 px-auto "
                          variant="outline-primary"
                          style={{ height: "25px" }}
                        >
                          visualizza profilo
                        </Button>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        <h6>Account</h6>
                        <NavLink className="p-1 ">
                          <p>Prova Premium per 0 EUR</p>
                        </NavLink>
                        <NavLink className="p-1 ">
                          <p>impostazione e privacy</p>
                        </NavLink>
                        <NavLink className="p-1 ">
                          <p>Guida</p>
                        </NavLink>
                        <NavLink className="p-1 ">
                          <p>Lingua</p>
                        </NavLink>
                        <h6 className="p pt-3 ">Gestisci</h6>
                        <NavLink className="p-1 ">
                          <p>Post è attività</p>
                        </NavLink>
                        <NavLink className="p-1 ">
                          <p>
                            Account per la pubblicazione di offerte di lavoro
                          </p>
                        </NavLink>
                        <NavLink className="p-1 ">
                          <p>Esci</p>
                        </NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column  align-items-center ">
              <BsFillGrid3X3GapFill className="fs-4 text-secondary " />
              <NavDropdown
                title="Per le aziende"
                id="navbarScrollingDropdown"
                className="mb-2"
              >
                <h5 className="ms-1 mb-4">Per le aziende</h5>
                <h6 className="text-start ms-3">
                  Scopri altri prodotti LinkedIn
                </h6>
                <NavDropdown.Item href="#action3">
                  {/* primo div principale delle icone dentro il dropdown per le aziende*/}
                  <div className="d-flex justify-content-between ms-4 mt-4 ">
                    {/* prima icona dentro il dropdown per le aziende */}
                    <div className="d-flex flex-column align align-items-center">
                      <NavLink>
                        <MdOutlineMenuBook className=" d-flex  flex-column text-info fs-3  " />
                      </NavLink>
                      <NavLink>
                        <p>Learning</p>
                      </NavLink>
                    </div>
                    {/* seconda icona dentro il dropdown per le aziende */}
                    <div className="d-flex flex-column align align-items-center ms-3">
                      <NavLink>
                        <TbFileAnalytics className=" d-flex  flex-column text-info fs-3  " />
                      </NavLink>
                      <NavLink>
                        <p>
                          Talent <br /> Insights
                        </p>
                      </NavLink>
                    </div>
                    {/* terza icona dentro il dropdown per le aziende */}
                    <div className="d-flex flex-column align align-items-center ms-2 ">
                      <NavLink>
                        <FcTemplate className=" d-flex  flex-column text-info fs-3  " />
                      </NavLink>
                      <NavLink>
                        <p>
                          Pubblica <br />
                          un’offerta <br />
                          di lavoro
                        </p>
                      </NavLink>
                    </div>
                    {/* quarta icona dentro il dropdown per le aziende */}
                    <div className="d-flex flex-column align align-items-center me-3 ">
                      <NavLink>
                        <FcAdvertising className=" d-flex  flex-column text-info fs-3  " />
                      </NavLink>
                      <NavLink>
                        <p>Pubblicizza</p>
                      </NavLink>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  {/* secondo div principale delle icone dentro il dropdown per le aziende*/}
                  <div className="d-flex justify-content-start mt-3 ms-3  ">
                    {/* prima icona dentro il dropdown per le aziende */}
                    <div className="d-flex flex-column align align-items-center">
                      <NavLink>
                        <FaCompass className=" d-flex  flex-column text-info fs-3  " />
                      </NavLink>
                      <NavLink>
                        <p>vendi</p>
                      </NavLink>
                    </div>
                    {/* seconda icona dentro il dropdown per le aziende */}
                    <div className="d-flex flex-column align align-items-center ms-3 ">
                      <NavLink>
                        <FaUsers className=" d-flex  flex-column text-info fs-3  " />
                      </NavLink>
                      <NavLink>
                        <p>Gruppi</p>
                      </NavLink>
                    </div>
                    {/* terza icona  dentro il dropdown per le aziende */}
                    <div className="d-flex flex-column align align-items-center ms-3 ">
                      <NavLink>
                        <ImUserCheck className=" d-flex  flex-column text-info fs-3  " />
                      </NavLink>
                      <NavLink>
                        <p>
                          Marketplace <br /> dei servizi
                        </p>
                      </NavLink>
                    </div>
                  </div>
                  <h6 className="text-start mt-5 ms-4 ">
                    Scopri altro per il business
                  </h6>
                  {/* terzo div dentro il dropdown per le aziende */}
                  <div className="mt-3 text-start ms-4 fs-6">
                    {/*  1 Navlink del 3 terzo div dentro il dropdown per le aziende */}
                    <NavLink className="mb-2 ">
                      <p>
                        {" "}
                        <span className="fw-medium ">
                          Assumi su LinkedIn
                        </span>{" "}
                        <br />
                        Trova, attrai e assumi
                      </p>
                    </NavLink>

                    {/*  2 Navlink del 3 terzo div dentro il dropdown per le aziende */}
                    <NavLink className="mb-2">
                      <p>
                        <span className="fw-medium ">Vendi con LinkedIn</span>{" "}
                        <br />
                        Costruisci relazioni con i buyer
                      </p>
                    </NavLink>

                    {/*  3 Navlink del 3 terzo div dentro il dropdown per le aziende */}
                    <NavLink className="mb-2">
                      <p>
                        {" "}
                        <span className="fw-medium">
                          Offerta di lavoro gratuita
                        </span>{" "}
                        <br /> Offerta di lavoro gratuita <br />
                        Trova candidati di qualità
                      </p>
                    </NavLink>

                    {/*  4 Navlink del 3 terzo div dentro il dropdown per le aziende */}
                    <NavLink className="mb-2">
                      <p>
                        {" "}
                        <span className="fw-medium ">
                          Fai pubblicità su LinkedIn
                        </span>{" "}
                        <br />
                        Acquisisci clienti e fai crescere la tua azienda
                      </p>
                    </NavLink>

                    {/*  5 Navlink del 3 terzo div dentro il dropdown per le aziende */}
                    <NavLink className="mb-2">
                      <p>
                        {" "}
                        <span className="fw-medium">Impara con LinkedIn </span>
                        <br />
                        Corsi per formare i tuoi dipendenti
                      </p>
                    </NavLink>

                    {/*  6 Navlink del 3 terzo div dentro il dropdown per le aziende */}
                    <NavLink className="mb-3">
                      <p>
                        {" "}
                        <span className="fw-medium ">
                          Centro amministrazione
                        </span>
                        <br />
                        Gestisci i dettagli di fatturazione e account
                      </p>
                    </NavLink>
                    {/*  7 Navlink del 3 terzo div dentro il dropdown per le aziende */}
                    <NavLink className="mb-4">
                      <p className="fw-medium">
                        Crea una pagina aziendale{" "}
                        <span className="fs-5">+</span>
                      </p>
                    </NavLink>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="">
              <NavLink className="fw-medium text-center px-1 " style={{width:"100px"}}>Prova Premium per 0 EUR</NavLink>
            </div>
          </div>
        </Col>
      </Row>
    </Navbar>
  );
};

export default MyNavbar;

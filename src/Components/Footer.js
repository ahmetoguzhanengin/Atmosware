import { Container, Col, Row } from "react-bootstrap";
import {FaMapMarkerAlt} from   "react-icons/fa";
import {AiOutlineMail} from   "react-icons/ai";
import {BsTelephoneInbound} from   "react-icons/bs";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Footer = () =>{

    return(
        <footer className="footer">
            <Container>
                <Row className ="align-item-center">
            
                    <Col>
                    <br/>
                    <br/>
                    <TrackVisibility>
                    {({isVisible}) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1>{">_İletişim"}</h1>
                        </div>}
                        </TrackVisibility>
                     <br/>
                    
                     <h5>{"Ürün ve hizmetleriz hakkında detaylı bilgi için İletişim."}</h5>
                     <br/>
                     <h6><FaMapMarkerAlt/>{" Aydınevler Mahallesi İnönü Caddesi No:20 Küçükyalı Ofispark, D:B Blok, 34854 Maltepe/İstanbul"}</h6>
                    <br/>
                    <h6> <AiOutlineMail/>{" contact@atmosware.com.tr - "}<BsTelephoneInbound/> { " (0212) 313 10 00" } </h6>
                    <small>CopyRight 2023. All Right Reserved</small>
                    
                    </Col>

                </Row>
            
            </Container>

        </footer>
    )
}
import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/banner2.png";
import headerImg2 from "../assets/img/banner1.png";
import 'animate.css';
import  {Cards}  from '../Components/Cards';
import {Consumers} from '../Components/Consumers';
import { Footer } from '../Components/Footer';
import {
  BrowserRouter as Router
} from "react-router-dom";
import TrackVisibility from 'react-on-screen';
// import Swiper core and required modules
import {  Pagination,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Banner = () =>{ 
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["atmosfer","atmosware"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(() =>{
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length+1);
        
        setText(updateText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
     
        <section className="banner" id="home">
        <Router>
            <Container>
                <Swiper
                // install Swiper modules
                modules={[ Pagination,  A11y]}
                spaceBetween={1500}
                slidesPerView={1}
                pagination={{ clickable: true }}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
              <SwiperSlide>  <Row className ="align-items-center">
              <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
              {({isVisible}) =>
               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
               <span className="tagline">Ho?? geldiniz!</span><br/><br/>
                  <h1>{`G??ncel teknolojiler ve tecr??beli ekiplerimizle farkl?? bir`}<span className="wrap"> <br/>{text}<br/></span> yarat??yoruz!</h1>
                  <p>En iyi pratikleri takip eden ve uygulayan uzmanlar??m??zla, m????terilerimizin de g??ncel teknolojileri deneyimlemesine destek oluyoruz.</p>
               
                  <button>??leti??im <ArrowRightCircle size={25}/></button>
               
                  </div> }
                  </TrackVisibility>
                  
              </Col>
              <Col xs={12} md={6} xl={5}>
              <img src = {headerImg} alt = "Headder Img"/>
              </Col>
          </Row></SwiperSlide>
            
              
                <SwiperSlide>  <Row className ="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible}) =>
                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                    <h1>Yaz??l??m d??nyas??na yeni bir hava kat??yoruz!</h1>
                    <p>Etkin programlarla yaz??l??mc?? yeti??tiriyor, kaliteli yaz??l??mc??lar ile m????terilerimizin yard??m??na ko??uyoruz.</p>
                    </div> }
                    </TrackVisibility>
                    
                </Col>
                <Col xs={12} md={6} xl={5}>
                <br/><br/>
                <img src = {headerImg2} alt = "Headder Img"/>
                </Col>
            </Row></SwiperSlide>
               
              </Swiper>

              <row>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
             <Cards/>
             <Consumers/>
         
              </row>
            </Container>
            </Router>
        </section>

    )
}
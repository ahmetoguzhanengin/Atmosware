import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ConsumerCard } from "./ConsumerCard";
import Ebru from "../assets/img/ebru-yeldan.png";
import Ersoy from "../assets/img/ersoy-peksen.png";
import Kerem from "../assets/img/kerem-kiziltunc.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Consumers = () => {
    const ConsumersList = [
        {
          name: "Kerem Kızıltunç",
          title: "Governance & Enterprise & Network Solutions Director, Turkcell",
          description: "Atmosware'in müşteriye yakın çalışma kültürü sayesinde ihtiyaç duyduğumuz noktalarda en doğru kaynakları, en kısa sürede ekibimize dahil ettik. En önemlisi de mevcut ihtiyaçlarımız için standart bir model yerine, farklı roller için esnek çalışma modelleri önerebildiler. Teşekkürler!",
          imgUrl: Kerem,
        },
        {
          name: "Ebru Yeldan",
          title: "Industrial & Financial Technology Solutions Director, Turkcell",
          description: "Atmosware'in çevik ve yeni nesil işe alım süreçleri sayesinde teknoloji odağı yüksek ve öğrenme motivasyonu güçlü uzmanları ekibimize hızla dahil etmeyi başardık. Önümüzdeki dönemde Atmosware'in teknoloji tedariği alanında çok önemli bir aktör olacağına inanıyorum.",
          imgUrl: Ebru,
        },
        {
          name: "Ersoy Pekşen",
          title: " Digital Business Platforms Associate Director, Turkcell",
          description: "Atmosware ile çalışmaya başladığımız an itibariyle, hem işimizi hem de işimize değer katacak çalışan profillerini çok iyi anladılar. Uygun adaylara hızlıca ulaşıp paylaştılar. Görüşmelerde doğru noktaların altını çizdiler ve yalın bir süreçle adayları çevik bir şekilde ekibimize kattılar. Teşekkürler!",
          imgUrl: Ersoy,
        },
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col> 
                    <TrackVisibility>
                    {({isVisible}) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>{">_Müşteri Yorumları"}</h2>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Tab.Content>
                            <Tab.Pane eventKey = "first">
                                <Row>
                                    {
                                        ConsumersList.map((ConsumersList, index) => {
                                            return (
                                                <ConsumerCard key ={index} {...ConsumersList}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                           
                            </Tab.Content>
                      </Tab.Container>
                      
                    </Col>
                </Row>
            </Container>
         
        </section>

    )
    }
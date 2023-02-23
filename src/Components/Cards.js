import Card from 'react-bootstrap/Card';
import { Container, Row, Col} from "react-bootstrap";
import tcell from "../assets/img/turcell-icon.png";
import chip from "../assets/img/chip.png";
import code from "../assets/img/code.png";

export const Cards = () =>{
  return (
<section className='card-section'>
    <Container className='card-container'>
    <Row>
            <Col md={3} className = "side-desc">    
        
                    <h1 style={{marginTop : '30%', fontSize:'250%'}}>{`>_ {atmosware} Kimdir,`} <br/> { `Size Neler`} <br/>{` Vadeder?`}</h1>
            
                </Col>
              <Col  md={9}>
             
              <Card style={{ width: '100%', height:'35%'}} ClassName="Card">
              <Card.Img src={tcell} style={{width:'50px',height:'50px'}}/>
              <Card.Body>
                <Card.Title>%100 Turkcell İştiraki ile Kaliteli Çözümler İçin Buradayız!</Card.Title>
                <Card.Text>
                Dijitalleşme ile yazılıma olan ihtiyaç, yazılıma olan ihtiyaçla beraber de yetişmiş yazılımcıya olan ihtiyaç artıyor. Bu noktada ihtiyaçları mevcut kaynaklarla karşılamanın da ötesine geçmek, yeni ve yetkin kaynakların oluşmasını sağlamak stratejik önem kazanıyor. İşte bu vizyon doğrultusunda Atmosware %100 Turkcell iştiraki ile, kaliteli yazılım geliştirmek ve yazılımcı yetiştirmek amacıyla kuruldu.
                </Card.Text>
              </Card.Body>
            </Card>
           
            <Row>
            <Col>
            <Card  ClassName="Card" style={{ width: '100%', height:'100%'}}>
            <Card.Img src={chip} style={{width:'50px',height:'50px'}}/>
            <Card.Body>
          
              <Card.Title>Güncel teknolojilerde deneyimli ve tecrübeli ekiplerimizle yanınızdayız!</Card.Title>
              <Card.Text>
              Yeni dönemde ekiplerinizin teknolojideki dönüşümün hızına ayak uyduramaması, rekabette geride kalmanıza ve/veya yazılımcı istihdam konularında sorun yaşamanıza neden olabilir. İşte bu noktada teknoloji ve yazılım alanında sizleri destekleyecek, pazara çıkış sürenizi kısaltacak, rekabette avantaj sağlayacak uzman ekiplerimizle yanınızdayız.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card ClassName="Card" style={{ width: '100%', height:'100%'}}>
          <Card.Img src={code} style={{width:'50px',height:'50px'}}/>
          <Card.Body>
           
            <Card.Title>Tüm Sektörlerdeki Yazılım İhtiyaçlarınız İçin Buradayız!</Card.Title>
            <Card.Text>
            Atmosware olarak finanstan telekoma, sigortadan dijital servislere birçok alanda yılladır elde ettiğimiz tecrübeleri siz müşterilerimizle paylaşmak, sektör ayırt etmeksizin yazılım ihtiyaçlarınızı karşılamak için buradayız.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
            </Row>
            
        </Col>
            </Row>
    </Container>
    </section>
  );
}


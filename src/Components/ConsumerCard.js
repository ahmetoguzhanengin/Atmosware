import { Col } from "react-bootstrap";
 
export const ConsumerCard = ({name, title, description, imgUrl}) => {
return(
    <Col sm = {6} md = {4}>
        <div className="proj-imgbx">
            <br/>
            <img src = {imgUrl} />
            <br/>
            <br/>
            <h3><b>{name}</b></h3>
            <h5><i>{title}</i></h5>
            <div className="proj-txtx">
             
                <span>{description}</span><br/>
                
               
            </div>
        </div>
    </Col>

)
}
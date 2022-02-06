import React from "react";
import { Card, Grid, Image ,Icon } from "semantic-ui-react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image4 from "../images/clinic.webp";
import image5 from "../images/image5.jpg";



const Home = () => {
  return (
    <div className="homeContainer">
      <Grid columns={2} padded>
        <Grid.Row>
          <Image className="img" src={image1} size="small" />
          <Card
            className="cardinfo"
            header="Dr.N.S.R.Murthy"
            meta="M.D(Derm)"
            description="Dr.N.S.R Murthy is a veteran Dermatologist with over 35 years of exprience."
            
          />
          <Image className="img" src={image2} size="small" />
          <Card
            className="cardinfo"
            header="Dr.Deepak Nookala"
            meta="M.D(Anaesthesia)"
            description="Dr.Deepak Nookala is an experienced anthesiologist with a specialization in pain management."
         
          />
          <Image className="img" src={image5} size="small" />
          <Card
            className="cardinfo"
            header="Dr.Pragnya Karri"
            meta="D.N.B(General Physician)"
            description="Dr.Pragnya Karri is an experienced physician."
     
          />
        </Grid.Row>

        <Grid.Column >
        <Card>
    <Image src={image4} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Consulting Hours:</Card.Header>
    
      <Card.Description>
      <div className="hours">
        <p>Mon-Fri: 9am to 9pm (Lunch break:12pm to 2pm)</p>
        <p>Sat: 10am to 8pm (Lunch break:12pm to 2pm)</p>
        <p>Sun: Closed</p>
            </div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    
        <Icon name='phone' />
      +91883242666
      
    </Card.Content>
  </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default Home;

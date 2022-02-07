import React from "react";
import { Card, Grid, Image, Icon } from "semantic-ui-react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image4 from "../images/clinic.webp";
import image5 from "../images/image5.jpg";
import image6 from"../images/consulting.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <Grid columns={2} padded>
        <Card.Group itemsPerRow={3}>
          <Card className="cardinfo">
            <Image src={image1} wrapped ui={false} size="tiny" />
            <Card.Content>
              <Card.Header>Dr.N.S.R.Murthy:</Card.Header>
              <Card.Description>
                Dr.N.S.R Murthy is a veteran Dermatologist with over 35 years of
                exprience
              </Card.Description>
            </Card.Content>
            <Card.Content extra>M.D(Derm)</Card.Content>
          </Card>
          <Card className="cardinfo">
            <Image src={image2} wrapped ui={false} size="tiny" />
            <Card.Content>
              <Card.Header>Dr.Deepak Nookala</Card.Header>
              <Card.Description>
            Dr.Deepak Nookala is an experienced Anaethsiologist with sepcialization in Pain Management.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>M.D(Anaesthesia)</Card.Content>
          </Card>
          <Card className="cardinfo">
            <Image src={image5} wrapped ui={false} size="tiny" />
            <Card.Content>
              <Card.Header>Dr.Pragnya Karri</Card.Header>
              <Card.Description>
                Dr.Pragnya Karri is a General Physician with over 5 years of experience.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>D.N.B(General Medicine)</Card.Content>
          </Card>
        </Card.Group>

        <Card.Group itemsPerRow={2} className="clinicInfo">
          <Card>
            <Image src={image6} wrapped ui={false} size="small" />
            <Card.Content>
              <Card.Header>Consulting Hours:</Card.Header>
              <Card.Description>
                <div className="hours">
                  <p>Mon-Fri: 9am to 9pm (Lunch break:12pm to 2pm)</p>
                  <p>Sat: 10am to 8pm (Lunch break:12pm to 2pm)</p>
                  <p>Sun: Closed</p>
                  <p>
                  <Icon name="phone" />
              +91883242666
              </p>
                </div>
              </Card.Description>
            </Card.Content>
           
          </Card>
          <Card>
            <Image src={image4} wrapped ui={false} size="small" />
            <Card.Content>
              <Card.Header>Address</Card.Header>
              <Card.Description>
                <div className="hours">
                  <p>Door No 6-8-13/1<br></br> Sivalayam Street <br></br>
                  T.Nagar<br></br> Rajahmundry<br></br>Andhra Pradesh -533101</p>
                </div>
              </Card.Description>
            </Card.Content>
           
          </Card>
        </Card.Group>
      </Grid>
    </div>
  );
};
export default Home;

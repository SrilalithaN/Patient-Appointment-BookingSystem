import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image4 from "../images/hospital.webp";
import image5 from "../images/image5.jpg";
const extra = (
  <a>
    <Icon name="user doctor" />
  </a>
);

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
            extra={extra}
          />
          <Image className="img" src={image2} size="small" />
          <Card
            className="cardinfo"
            header="Dr.Deepak Nookala"
            meta="M.D(Anaesthesia)"
            description="Dr.Deepak Nookala is an experienced anthesiologist with a specialization in pain management."
            extra={extra}
          />
          <Image className="img" src={image5} size="small" />
          <Card
            className="cardinfo"
            header="Dr.Pragnya Karri"
            meta="D.N.B(General Physician)"
            description="Dr.Pragnya Karri is an experienced physician."
            extra={extra}
          />
        </Grid.Row>

        <Grid.Column>
          <Image src={image4} />
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default Home;

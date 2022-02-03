import React from "react";
import { Grid } from "semantic-ui-react";

const Footer = () => (
  <Grid className="footer">
    <Grid.Column floated="left" width={5}>
          <div className="hours">
            <h2>Consulting Hours</h2>
        <p>Mon-Fri: 9am to 5pm</p>
        <p>Sat: 10am to 4pm</p>
        <p>Sun: Closed</p>
            </div>

    </Grid.Column>
    <Grid.Column floated="right" width={5}>
      <div className="contactinfo">
        <h2>Contact</h2>
        <p>Phone: +91883242666</p>
        <p>
          Address: Door no 6-8-13/1<br></br> Sivalayam Street <br></br>T.Nagar
          <br></br> Rajahmundry<br></br> AndhraPradesh:533101
        </p>
      </div>
    </Grid.Column>
  </Grid>
);

export default Footer;

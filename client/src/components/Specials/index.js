import React, { Component } from "react";
import Image1 from "../../assets/images/coffee-1.jpg";
import Image2 from "../../assets/images/coffee-2.jpg";
import Image3 from "../../assets/images/coffee-3.jpg";
import {
  SpecialsWrapper,
  SpecialsCard,
  SpecialsImage,
  SpecialsH2,
  SpecialsP,
} from "./SpecialsElements";

class SpecialsCards extends Component {
  state = {
    coffees: [],
    contentLoaded: false,
  };

  componentDidMount() {
    Promise.all([
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
      fetch("https://random-data-api.com/api/coffee/random_coffee"),
    ])
      .then(([res1, res2, res3, res4]) => {
        return Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]);
      })
      .then(([res1, res2, res3, res4]) => {
        // set state in here
        this.setState({
          coffees: [
            { name: res1["blend_name"], origin: res1["origin"] },
            { name: res2["blend_name"], origin: res2["origin"] },
            { name: res3["blend_name"], origin: res3["origin"] },
            { name: res4["blend_name"], origin: res4["origin"] },
          ],
          contentLoaded: true,
        });
      });
  }

  render() {
    return (
      <>
       {this.state.contentLoaded ? (
            <SpecialsWrapper>
              <SpecialsCard>
                <SpecialsImage src={Image1} />
                <SpecialsH2>{this.state.coffees[0]["name"]}</SpecialsH2>
                <SpecialsP>{this.state.coffees[0]["origin"]}</SpecialsP>
              </SpecialsCard>
              <SpecialsCard>
                <SpecialsImage src={Image2} />
                <SpecialsH2>{this.state.coffees[1]["name"]}</SpecialsH2>
                <SpecialsP>{this.state.coffees[1]["origin"]}</SpecialsP>
              </SpecialsCard>
              <SpecialsCard>
                <SpecialsImage src={Image3} />
                <SpecialsH2>{this.state.coffees[2]["name"]}</SpecialsH2>
                <SpecialsP>{this.state.coffees[2]["origin"]}</SpecialsP>
              </SpecialsCard>
              <SpecialsCard>
                <SpecialsImage src={Image3} />
                <SpecialsH2>{this.state.coffees[3]["name"]}</SpecialsH2>
                <SpecialsP>{this.state.coffees[3]["origin"]}</SpecialsP>
              </SpecialsCard>
            </SpecialsWrapper>
        ) : null}
      </>
    );
  }
}

export default SpecialsCards;

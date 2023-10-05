import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1> Recent Trips</h1>
        <p> You can discover unique destinations using Google maps. </p>
        <div className="tripcard">
          <TripData
            image={Trip1}
            heading="Trip in Indeneshia"
            text="Leave dry land behind and sail around Makena Landing, also known locally as “Turtle Town”. Feast your eyes on the incredible biodiversity of green sea turtles and reef fish, as well as the occasional manta and spotted eagle rays, octopi, dolphins, monk seals, humpback whales (December through April) and little white-tip reef sharks. The entire rental process takes 2 hours"
          />
          <TripData
            image={Trip2}
            heading="Trip in Malaysia"
            text="Take a ride around the South Side of Maui on a Radpower electric bike. Avoid the traffic and parking and stop and start as you wish. Access hiking trails, snorkel on the beach, and breeze through the crowds without any pedaling necessary. Choose from a selection of itineraries upon arrival. Hike gorgeous areas like the Wailea Coastal Trail, Kamaole beach, and South Kihei."
          />
          <TripData
            image={Trip3}
            heading="Trip in France "
            text="Leave dry land behind and sail around Makena Landing, also known locally as “Turtle Town”. Feast your eyes on the incredible biodiversity of green sea turtles and reef fish, as well as the occasional manta and spotted eagle rays, octopi, dolphins, monk seals, humpback whales (December through April) and little white-tip reef sharks. The entire rental process takes 2 hours"
          />
        </div>
      </div>
    </>
  );
};

export default Trip;

import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destinations</h1>
      <p> Tours give you the opportunity to see the world</p>
      <DestinationData
        className="first-des"
        heading="Taal Valcano, Batangas"
        text="  Travel back in time to the historic moments and legendary tales that
      shaped the island of Maui. Enjoy a scenic tour of the iconic Road to
      Hana and look out for perfect photo opportunities. Eat a delicious
      picnic lunch, try some fresh fruit, and swim at a famous black sand
      beach. Stops include: Ho'okipa Beach Park, 15 minutes Kaumahina
      State Wayside Park, pass by without stopping Ke‘anae Point, banana
      bread stand aunty sandy 20 minutes Ke‘anae Point, 15 minutes Upper
      Waikani Falls, pass by without stopping Pua'a Ka'a State Park, 40
      minutes Black Sand Beach, 1 hour Wailua Falls, just past Koali Ranch
      Cottage, 10 minutes Kipahulu, pass by without stopping Kaupo, Kaupo,
      pass by without stopping Manawainui Gulch, 15 minutes Waiakoa, Kula,
      pass by without stopping Harold Rice Park, Lower Kula Road Turn off
      highway onto Lower Kula Road to access park., 10 minutes
      Furthermore, if time allows, you will have the chance stop at fruit
      stands with fresh fruits and vegetables for you to buy."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text=" Dive into the pristine waters of Maui and explore an underwater paradise on this submarine tour. Enjoy views of stunning coral reefs, a replica shipwreck, and a whole world of colorful marine life from the comfort of an air-conditioned submarine. Begin your tour with a boat ride from the shores of Maui. Enjoy the beautiful sights of Maui as you make your way towards the submarine that will take you underwater. After boarding the submarine, get your camera ready to take Instagram-worthy pictures of the picturesque coral reef below the sea. Pass through the colorful reefs and spot the many fish and underwater creatures swimming by. As you sail, learn about the creatures you see from the onboard commentary from a local naturalist."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;

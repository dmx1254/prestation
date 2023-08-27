import React, { useState } from "react";
import Prestation from "../components/Prestation";
import menage3 from "../assets/prestation/menage3.png";
import fitness3 from "../assets/prestation/fitness3.png";
import coiffure1 from "../assets/prestation/coiffure1.png";
import massage1 from "../assets/prestation/massage1.png";
import beaute1 from "../assets/prestation/beaute1.png";

const Home = () => {
  const [items, setItems] = useState([
    {
      id: 125,
      title: "Ménage",
      subtitle: "et repassage",
      image: menage3,
    },
    {
      id: 126,
      title: "Garde d'enfants",
      subtitle: "et babysitting",
      image: menage3,
    },
    {
      id: 127,
      title: "Coiffure",
      subtitle: "à domicile",
      image: coiffure1,
    },
    {
      id: 128,
      title: "Beauté",
      subtitle: "à domicile",
      image: beaute1,
    },
    {
      id: 129,
      title: "Massage",
      subtitle: "à domicile",
      image: massage1,
    },
    {
      id: 130,
      title: "Coach Sportif",
      subtitle: "à domicile",
      image: fitness3,
    },
  ]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        // data-aos="zoom-in-up"
        // data-aos-offset="200"
        // data-aos-delay="10"
        // data-aos-duration="1000"
        className="grid grid-cols-3 gap-4"
      >
        {items?.map((item) => (
          <Prestation key={item?.id} product={item} />
        ))}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;

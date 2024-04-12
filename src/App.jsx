import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data/myprojects.json"
import MyProjectCard from './components/MyProjectCard';
import MyProjectModal from './components/MyProjectModal';

/* eslint-disable react/jsx-key */
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [showModal, setShowModal] = useState(null);
  return (
    <>
      <div className="w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data?.myprojects?.map((d) => (
          <MyProjectCard key={d.id} myproject={d} onOpen={() => setShowModal(d)} />
        ))}
      </Slider>
      </div>
      </div>
      {
            showModal && (
            <MyProjectModal onClose={() => setShowModal(null)} modalData={showModal} />
            )
        }
    </>
  )
}



export default App;
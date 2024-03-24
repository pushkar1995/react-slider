/* eslint-disable react/prop-types */
import { useState } from 'react';
import MyProjectModal from './MyProjectModal';

const MyProjectCard = ({ myproject }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  return (
        <div>
            <div className="bg-white h-[450px] text-black rounded-xl">
                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                    <img src={myproject.img} alt="" className="h-44 w-44 rounded-full"/>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{myproject.name}</p>
                    <p>{myproject.review}</p>
                    <button onClick={toggleModal} className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                    </div>
            </div>
            {isModalOpen && <MyProjectModal onClose={toggleModal} modalData={myproject} />}
        </div> 
  )
}

export default MyProjectCard
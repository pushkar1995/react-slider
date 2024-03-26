/* eslint-disable react/prop-types */
import { AiOutlineClose } from 'react-icons/ai';

const MyProjectModal = ({ onClose, modalData }) => (
        <div
        className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        onClick={onClose}
    >
    <div
    onClick={(event) => event.stopPropagation()}
    className="w-[600px] max-w-full h-[600px] bg-white rounded-xl p-4 flex flex-col relative"
    >
    <AiOutlineClose
        className="absolute right-6 top-11 text-3xl text-red-600 cursor-pointer"
        onClick={onClose}
    />
    <h2 className="flex my-4 justify-center bg-green-300 rounded-lg">
        {modalData.name}
    </h2>
    <div className="portfolio--section--img">
        <img src={modalData.img} alt="Project" />
    </div>
    <p className="my-3">
        {modalData.review}
    </p>
    </div>
    </div>      
);

export default MyProjectModal;

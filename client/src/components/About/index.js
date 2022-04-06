import React, { useState } from 'react';
import Modal from '../Modal';
import loginImage from '../../assets/images/login.jpg';
import inputsImage from '../../assets/images/inputs.jpg';
import profileImage from '../../assets/images/profile.jpg';
import resultsImage from '../../assets/images/results.jpg';
import signupImage from '../../assets/images/signup.jpg';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentScreenshot, setCurrentScreenshot] = useState();
  
    const [category] = useState(    
      {
      name: 'About',
      description: 'This is a pretty cool app. here are some screenshots and how to use it',
      },
    );

    const [screenshots] = useState([
      {
          name: 'Login',
          description: 'Login image',
          image: loginImage
      },
    ]);


    const toggleModal = (screenshot, i) => {
      setCurrentScreenshot({ ...screenshot, index: i });
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <section className="mt-10 md:ml-24 text-black neu w-5/6">
            <h1 data-testid="h1tag" className="">{category.name}</h1>
            <p className="">{category.description}</p>
      
      <div>
        {isModalOpen && (
          <Modal onClose={toggleModal} currentScreenshot={currentScreenshot} />
        )}
        <div className="flex flex-row flex-wrap justify-center mt-4">
          {screenshots.map((screenshot, i) => (
            <img
              src={screenshot.image}
              alt={screenshot.name}
              className="h-48 w-96 mb-6 mr-6 hover:opacity-70 hover:h-52 flex flex-shrink object-cover"
              onClick={() => toggleModal(screenshot, i)}
              key={screenshot.name}
            />
          ))}
        </div>
      </div>
      </section>
    );
  };
  
  export default About;
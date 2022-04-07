import React, { useState } from 'react';
import Modal from '../Modal';
import loginImage from '../../assets/images/login.jpg';
import gigsImage from '../../assets/images/inputs.jpg';
import profileImage from '../../assets/images/profile.jpg';
import resultsImage from '../../assets/images/results.jpg';
import signupImage from '../../assets/images/signup.jpg';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentScreenshot, setCurrentScreenshot] = useState();

    const [screenshots] = useState([
      {
          name: 'How to create a Sign In Account',
          description: 'Input a username, password that must be AT LEAST 8 characters, and a unique email.',
          image: signupImage,
          step: "Step 0",
          shortDescription: "Signup"
      },
      {
          name: 'How to Log In',
          description: 'Fill out the form with your credentials and hit the "Submit" to log in.',
          image: loginImage,
          step: "Step 1",
          shortDescription: "Login"
      },
      {
        name: 'How to Set up User Profile',
        description: 'Enter the desired values in each component and hit the "submit" button to save them.',
        image: profileImage,
        step: "Step 2",
        shortDescription: "Profile"
      },
      {
          name: 'How to Fill out the Trip Calculator',
          description: 'Enter the distance and compensation provided by the delivery gig and click "Go".',
          image: gigsImage,
          step: "Step 3",
          shortDescription: "Gigs"
      },
      {
          name: 'Results',
          description: 'The outputs container will turn either red or green based on the user desired pay. Click "Next Trip!" to enter a new gig.',
          image: resultsImage,
          step: "Step 4",
          shortDescription: "Results"
      },
    ]);


    const toggleModal = (screenshot, i) => {
      setCurrentScreenshot({ ...screenshot, index: i });
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <section className="mt-10 md:ml-24 text-black neu mx-auto col-11">
        <div className='text-center'>
            <h1 data-testid="h1tag" className="">Welcome to WorthIt</h1>
            <p>This app was created to quickly determine if a delivery gig is worth it or not.</p>
            <p>The user sets parameters in their profile such as desired pay, gas, mpg, etc.</p>
            <p>The user then inputs the proposed distance and compensation provided by a gig received.</p>
            <p>The Trip Calculator then turns either red or green to display the results.</p>
            <p>Click on the images below to see an example.</p>
        </div>
      <div>
        {isModalOpen && (
          <Modal onClose={toggleModal} currentScreenshot={currentScreenshot} />
        )}
        <div className="flex flex-row flex-wrap justify-around mt-4 text-center">
          {screenshots.map((screenshot, i) => (
            <p className='font-bold underline' key={screenshot.name} >{screenshot.shortDescription} 
            <img
              src={screenshot.image}
              alt={screenshot.name}
              className="h-64 md:px-2 w-auto hover:opacity-70 md:hover:h-72 flex flex-shrink object-contain"
              onClick={() => toggleModal(screenshot, i)}
              
              />
              </p>
          ))}
        </div>
      </div>
      <h5 className="mt-5 text-center ">
            <a
              data-testid="link"
              href="/"
            >
              Back
            </a>
          </h5>
      </section>
    );
  };
  
  export default About;
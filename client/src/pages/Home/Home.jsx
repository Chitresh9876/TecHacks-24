import React from 'react'
import './Home.css'
import HeroImage from '../../images/HeroImage.jpg'
import ImageDescription from '../../components/ImageDescription/ImageDescription'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>

                {/* Hero Section */}

        <div className="heroSection">
            <div className="heroSectionDetail">fff</div>
            <img src={HeroImage} alt="" className='HeroImage' />
        </div>
        <div className="right-incline"></div>
        <div className="left-incline"></div>

                {/* Body */}

        <ImageDescription
        text={' Lorem or sit amet consectetur adipisicing elit. Explicabo nihil magni dolorem illo dolore odit sit minus illum voluptatibus est, eaque sequi esse repellat nemo in laudantium doloribus reiciendis? Sit?z ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil magni dolorem illo dolore odit sit minus illum voluptatibus est, eaque sequi esse repellat nemo in laudantium doloribus reiciendis? Sit?z'}
        />
        <ImageDescription
        position={'right'}
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil magni dolorem illo dolore odit sit minus illum voluptatibus est, eaque sequi esse repellat nemo in laudantium doloribus reiciendis? Sit?z'}
        />

             {/* Footer */}
      <Footer/>


    </div>

            
  )
}

export default Home

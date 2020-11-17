import React from 'react';
import './Style/OurProduct.scss';
import image from '../../images/aven.png'
import image1 from '../../images/earth-2.0.png'
import image2 from '../../images/hex-lab.png'
import image3 from '../../images/ideaa.png'
import image4 from '../../images/lighting.png'
import image5 from '../../images/liva.png'



const OurProduct = () => (

    <div className="row">
        <div className='col-md-12 owning-product'>
            <div className='text-center '>
                <h1>Our Owning <strong>Product</strong> </h1>
                <p>This can lead to unexpected behavior when compiling.</p>
            </div>
        </div>

        <div className='col-md-4 card-product'>
            <div className='text-center  mt-5'>
                <img src={image} alt='thumbnail'></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                <a href="https://google.com" target='_blank' rel="noreferrer">Learn more</a>
            </div>

        </div>

        <div className='col-md-4 card-product'>

            <div className='text-center  '>
                <img src={image1} alt='thumbnail'></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                <a href="https://google.com" target='_blank' rel="noreferrer" >Learn more</a>
            </div>
        </div>

        <div className='col-md-4 card-product'>

            <div className='text-center  mt-5'>
                <img src={image2} alt='thumbnail'></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                <a href="https://google.com" target='_blank' rel="noreferrer">Learn more</a>
            </div>
        </div>
        <div className='col-md-4 card-product'>
            <div className='text-center   mt-5'>
                <img src={image3} alt='thumbnail'></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                <a href="https://google.com" target='_blank' rel="noopener" rel="noreferrer">Learn more</a>
            </div>

        </div>

        <div className='col-md-4 card-product'>

            <div className='text-center  '>
                <img src={image4} alt='thumbnail'></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                <a href="https://google.com" target='_blank' rel="noopener" rel="noreferrer">Learn more</a>
            </div>
        </div>

        <div className='col-md-4 card-product'>

            <div className='text-center  mt-5'>
                <img src={image5} alt='thumbnail'></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                <a href="https://google.com" target='_blank' rel="noopener" rel="noreferrer">Learn more</a>
            </div>
        </div>


    </div>

)
export default OurProduct;
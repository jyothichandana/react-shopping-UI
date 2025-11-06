import React from "react";
const WomenCollections = (props) => {

    const {title, image1, image2, image3, image4, image5, image6} = props.ladiesFashion
    return (
        <div className="collectionSection2" >
        <h2>{title}</h2>
              <div className='bannerBox'>
                <img src="assests/LadiesBanner.gif" alt=""/>
        </div>
        
        <div className="womensSection">
        <img src={image1}  alt={title} className="products2"/>
        <img src={image2}  alt={title} className="products2"/>
        <img src={image3}  alt={title} className="products2"/>
        <img src={image4}  alt={title} className="products2"/>
        <img src={image5}  alt={title} className="products2"/>
        <img src={image6}  alt={title} className="products2"/>
        {/* <img src={image7}  alt={title} className="products2"/> */}
        </div>
        </div>
    )
}
export default WomenCollections
import React,{useState} from 'react'
import './PropertyCard.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart, faSquareCheck} from '@fortawesome/free-regular-svg-icons'
import {faBath, faBed,faHeart as faLike,faStar} from '@fortawesome/free-solid-svg-icons'

function PropertyCard({details}) {
  
  //accessing details of each property
  const {imgURL,name,price,address,beds,bathrooms,area,wishlist,popular} = details;

  //like functionality
  const [like,setLike] = useState(wishlist);

  return (
    <div className='property-card-container'>
        <img className='property-image'
        src={imgURL} alt='property'/>
        {popular &&
        <div className='popular-container'>
            <FontAwesomeIcon icon={faStar} />
            <p className='popular-tag'>POPULAR</p>
        </div>
        }
        <div className='property-details-container'>
            <div className='property-details'>
                <h3 className='property-price'>₹ {price}<span> /month</span></h3>
                <h3 className='property-name'>{name}</h3>
                <p className='property-address'>{address}</p>
            </div>
            <div className='property-heart-icon' onClick={()=>setLike(!like)}>
                <FontAwesomeIcon icon={like?faLike:faHeart}/>
            </div>
        </div>
        <hr className='property-line'></hr>
        <div className='property-features-container'>
            <div className='property-features'>
                <FontAwesomeIcon className='features-icon' icon={faBed} />
                <p className='features-detail'>{beds} Beds</p>
            </div>
            <div className='property-features'>
                <FontAwesomeIcon className='features-icon' icon={faBath} />
                <p className='features-detail'>{bathrooms} Bathrooms</p>
            </div>
            <div className='property-features'>
                <FontAwesomeIcon className='features-icon' icon={faSquareCheck} />
                <p className='features-detail'>{area}</p>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard
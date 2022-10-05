import React,{useState} from 'react'
import './Filters.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import PropertyCard from './PropertyCard'
import { properties } from './properties';

function Filters() {

  //options for dropdown menus

  const locationOptions = [
    'Location (Any)','Mumbai', 'Delhi', 'Varanasi',
  ];

  const propertyOptions = [
    'Property Type (Any)','Apartment','Flat', 'Ranch',
  ];


  const priceOptions = [
    {label:'Price Range (Any)',value:'any'},
    {label:'₹ 0 - ₹ 4,999',value:[0,4999]},
    {label:'₹ 5000 - ₹ 9,999',value:[5000,9999]},
    {label:'₹ 10,000 - ₹ 14,999',value:[10000,15000]},
  ];

  //filters
  const [startDate, setStartDate] = useState(new Date());
  const [location,setLocation] = useState(locationOptions[0]);
  const [price,setPrice] = useState(priceOptions[0]);
  const [propertyType,setPropertyType] = useState(propertyOptions[0]);

  //to store result of filtering
  const [validProperties,setValidProperties] = useState([]);
  
  const [search,setSearch] = useState(false);

  //after clicking search button
  const handleSubmit = (e) => {
    setValidProperties([]);
    e.preventDefault();
    setSearch(true);

    //filtering logic
    properties.forEach((each)=>{
      if(location==='Location (Any)' 
        || location.value===each.location 
        || location.value==='Location (Any)' ) {
            
          if(propertyType==='Property Type (Any)' 
              || propertyType.value===each.type  
              || propertyType.value==='Property Type (Any)') {

                if(price.value==='any' || (each.price<=price.value[1] && each.price>=price.value[0])) {

                  const d = new Date(each.year,each.month,each.date);
                  if(d.getTime()<=startDate.getTime())
                    setValidProperties((prevState) => [...prevState,each]);
                }
          }
      }

    })
  }
  
  return (
    <>
      <form className='filters-container'>
        <div className='filters-option'>
          <p className='filters-label'>Location</p>
          <Dropdown className='myClassName'
          value={location} 
          onChange={(value)=>setLocation(value)}
          options={locationOptions}/>
        </div>
        <div className='filters-option'>
          <p className='filters-label'>When</p>
          <div className='filters-date-container'>
            <DatePicker className='filters-date' 
            minDate={new Date()}
            dateFormat="dd/MM/yyyy" 
            selected={startDate} onChange={(date) => setStartDate(date)} />
            <FontAwesomeIcon icon={faCalendarDays} className='date-icon'/>
          </div>
        </div>
        <div className='filters-option'>
          <p className='filters-label'>Price</p>
          <Dropdown value={price}  
          onChange={(value)=>setPrice(value)} 
          options={priceOptions}/>
        </div>
        <div className='filters-option'>
          <p className='filters-label'>Property Type</p>
          <Dropdown value={propertyType} 
          onChange={(value)=>setPropertyType(value)}  
          options={propertyOptions} />
        </div>
        <button type='submit' onClick={handleSubmit} className='filters-button'>
          Search
        </button>
      </form>
      <div className='header-properties'>
        {search &&
        validProperties.map(propertyDetails=>{
          return <PropertyCard key={propertyDetails.id} details = {propertyDetails}/>
        })
        }
      </div>
    </>
  )
}

export default Filters
import React from 'react'
import  "./places.css"
import Details from "../places/placesdetails.json"

function Places() {
  return (
    <div className='places'>
        <div className="placescontainer">
            
        <div className="placedetail">
          { Details &&  Details.map(detail => {
            return (
              <div className="detailcon" key = {detail.id}>
              <img src={detail.imgurl} alt="" className='pimg'/>
              <h2 className='ptitle'>{detail.title}</h2>
              <h3 className='plocation'>{detail.Location}</h3>
              <p className='pabout'>{detail.About}<a href={detail.infourl} target='_blank' className='knowlink'>.....Know more</a></p>
              
              <div className="btncontainer">
              <button className="btnticket btn">Book Ticket</button>
              {/* <button className="btnknow btn">Know More</button> */}
              </div>
              </div>
          )}) }
            
        </div>
        </div>
    </div>
  )
}

export default Places
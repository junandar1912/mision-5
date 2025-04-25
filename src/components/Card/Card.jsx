import React from 'react'
import './card.css'


const Card = ({image, title, avatar, description, instructor, reviews, rating, price, job,}) => {
    return (
        <div className="course-card">
          <img src={image} alt={title} className="course-image" />
          <div className="course-content">
            <h3 className="course-title">{title}</h3>
            <p className="course-description">{description}</p>
            <div className="course-instructor">
              <img src={avatar} alt={instructor} className="instructor-avatar" />
              <div className='course-profil'>
               <p className="instructor-name">{instructor}</p>
               <p className='instructor-job'>{job}</p>
              </div>
            </div>
            <div className="course-rating">
              <div className='rating'>
               <span className="star">★</span>
               <span>{rating}</span>
               <span className="review-count">({reviews})</span>
              </div>
              <div className="course-price">{price}</div>
            </div>
          </div>
        </div>
      );
    }

export default Card

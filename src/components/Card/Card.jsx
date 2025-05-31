import React from 'react'
import './card.css'



const Card = ({image, title, avatar, description, instructor, reviews, rating, price, job,}) => {



    return (
        <main className="course-card">
          <div className='screen'>
          <img src={image} alt={title} className="course-image" />
          <div className="course-content">
            <h3 className="course-title">{title}</h3>
            <p className="course-description">{description}</p>
            <div className="course-instructor01">
              <img src={avatar} alt={instructor} className="instructor-avatar" />
              <div className='course-profil'>
               <p className="instructor-name">{instructor}</p>
               <div className='flex-row'>
                 <p className='instructor-job'>{job}</p>
                 <p className='job'>di Gojek</p>
               </div>
              </div>
            </div>
          </div>
          </div>
          <div className="course-rating">
              <div className='rating'>
               <span className="star">
                <i className='fa fa-star checked'></i>
                <i className='fa fa-star checked'></i>
                <i className='fa fa-star checked'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                </span>
                <form action="fa fa-star" className='rating-count'>
                  <span className='review-count'>{rating}</span>
                  <span className="review-count">({reviews})</span>
                </form>
              </div>
              <div className="course-price"><p className='price'>{price}</p></div>
            </div>
        </main>
      );
    }

export default Card

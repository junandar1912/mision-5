import React, { useState } from 'react'
import './Review.css'

const Review = ({ onCancel, onSubmit }) => {
  const [rating, setRating] = useState(3)
  const [reviewText, setReviewText] = useState('')

  const handleStarClick = (num) => {
    setRating(num)
  }

  const handleSubmit = () => {
    if(onSubmit) {
      onSubmit({ rating, reviewText })
    }
  }

  return (
    <div className="tooltip-container">
      <h3 className="tooltip-title">Tulis Review Terbaikmu!</h3>
      <p className="tooltip-subtitle">Apakah kamu yakin untuk menyelesaikan pretest ini?</p>
      <div className="tooltip-stars">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={`star ${num <= rating ? 'active' : ''}`}
            onClick={() => handleStarClick(num)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        className="tooltip-textarea"
        placeholder="Masukkan Review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <div className="tooltip-buttons">
        <button className="btn-cancel" onClick={onCancel}>Batal</button>
        <button className="btn-submit" onClick={handleSubmit}>Selesai</button>
      </div>
    </div>
  )
}

export default Review

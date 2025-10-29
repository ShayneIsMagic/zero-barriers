'use client'

import { useState } from 'react'

interface StoryCardProps {
  title: string
  quote: string
  author: string
}

export default function StoryCard({ title, quote, author }: StoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`story-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      <div className="story-header">
        <h3>{title}</h3>
        <div className="story-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="story-content">
        <p className="story-quote">{quote}</p>
        <p className="story-author">{author}</p>
      </div>
    </div>
  )
}


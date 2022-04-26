import React from 'react'
import StoryButton from './StoryButton'

const Article = () => {
  return (
    <div className='slider__container'>
        <div className="article">
            <div className="article__slides">
                <div className="article__slide">
                <div className="article__slideBg"></div>
                <div className="article__slideContent">
                    <span>The Williams</span> 
                    <StoryButton />
                </div>
                </div>
                <div className="article__slide">
                <div className="article__slideBg"></div>
                <div className="article__slideContent">
                    
                    <span>The Chos</span> 
                    <StoryButton />
                </div>
                </div>
                <div className="article__slide">
                <div className="article__slideBg"></div>
                <div className="article__slideContent">
                    <span>The Browns</span> 
                    <StoryButton />
                </div>
                </div>
                <div className="article__slide">
                <div className="article__slideBg"></div>
                <div className="article__slideContent">
                    <span>The Madisons</span> 
                    <StoryButton />
                </div>
                </div>
            </div>
            <div className="article__shutters"></div>
        </div>
    </div>
  )
}

export default Article
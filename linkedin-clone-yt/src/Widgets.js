import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle=(heading,subTitle)=>(
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon></FiberManualRecordIcon>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subTitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h1>Linkdin News</h1>
        <InfoIcon/>
      </div>
      {newsArticle("I'm Back baby","Top News")}
      {newsArticle("Udgar ows Tesla","Top News-most trending")}
    </div>
  )
}

export default Widgets

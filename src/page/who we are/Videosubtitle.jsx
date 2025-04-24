import React from 'react'
import { videosubdata } from '../../constant/Videosubtitledata'


const Videosubtitle = () => {
  return (
    <div>
        <div className='homecontainer'>
          <div className='herohome'>
          <h2 className='span'>{videosubdata.videosubhead}</h2>
          <p className='powerpara'>{videosubdata.videosubpara}</p>
          <div>
            <img className='heroimg' src={videosubdata.videosubhero}></img>
          </div>
          </div>
         
         <div>
          <h2 className='span'>{videosubdata.ourexpect}</h2>
          <h4 className='powerpara'>{videosubdata.ourhead}</h4>
          <p className='smallpara'>{videosubdata.ourpara}</p>
         </div>
        </div>
    </div>
  )
}

export default Videosubtitle

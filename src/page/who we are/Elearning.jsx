import React from 'react'
import { elearningdata } from '../../constant/Elearningdata'

const Elearning = () => {
  return (
    <div className='elearning'>
        {/* s1 */}
        <div className='ehome'>
            <div className='esubhome'>
            <h2 className='powerheading'>{elearningdata.ehomehead}</h2>
            <h4 className='span'>{elearningdata.ehomehead2}</h4>
            <p className='powerpara'>{elearningdata.ehomepara}</p>
            </div>
        </div>
        {/* s2 */}
        <div>
            <h2 className='powerheading'>{elearningdata.ehead3}</h2>
          <div className='eballflex'>
          <div className='eball'>
           <img src={elearningdata.eball} alt=''></img>
          </div>

          <div className='eballparamain'>

            <div className='eballparasub'>
                <div className='eballheadflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{elearningdata.esubhead1}</h4>
                </div>
                <p className='smallpara'>{elearningdata.esubpara1}</p>
            </div>

                <div className='eballparasub'>
                <div className='eballheadflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{elearningdata.esubhead2}</h4>
                </div>
                <p className='smallpara'>{elearningdata.esubpara2}</p>
            </div>

            <div className='eballparasub'>
                <div className='eballheadflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{elearningdata.esubhead3}</h4>
                </div>
                <p className='smallpara'>{elearningdata.esubpara3}</p>
            </div>
          
          </div>

          </div>
        </div>
        
   </div>
  )
}

export default Elearning
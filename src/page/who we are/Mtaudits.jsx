import React from 'react'
import { Mtauditsdata } from '../../constant/Mtauditsdata'

const Mtaudits = () => {
  return (
    <div className='mtcontainer'>
        <div className='mthero'>
            <h2 className='powerheading'>{Mtauditsdata.mtaudithead}</h2>
            <h2 className='span'>{Mtauditsdata.mtauditai}</h2>
            <p className='powerpara'>{Mtauditsdata.mtauditpara}</p>
        </div>
        <div className='mtcontainer2'>
          <h2 className='powerheading'>{Mtauditsdata.mtpower}</h2>
          <p className='powerpara'>{Mtauditsdata.mtpara}</p>
          <h4 className='span'>{Mtauditsdata.mtindustry}</h4>
          <p className='powerpara'>{Mtauditsdata.mtline}</p>
          <div className='ioscontainer'>
            <div className='ios'>
            <h2 className='powerheading'>{Mtauditsdata.mtios}</h2>
              <div className='abc'>
              <i class="fa-solid fa-language bar"></i>
                <h4 className='powerheadingh4'>{Mtauditsdata.mtios1}</h4>
              </div>
              <img className='leftarrow' src={Mtauditsdata.leftarrow} alt='leftarrow'></img>
              <div className='evalution'>
                <i class="fa-solid fa-bars bar"></i>
                <h4 className='powerheadingh4'>{Mtauditsdata.mtios2}</h4>
              </div>
              <img className='rightarrow' src={Mtauditsdata.rightarrow} alt='right arrow'></img>
              <div className='guide'>
              <i class="fa-solid fa-book-open-reader bar"></i>
              <h4 className='powerheadingh4'>{Mtauditsdata.mtios3}</h4>
              </div>
            </div>

            <div className='astm'>
              <h2 className='powerheading'>{Mtauditsdata.mtastm}</h2>
              <p className='smallpara'>{Mtauditsdata.mtastm1}</p> 
             </div>
          </div>
       <p className='powerpara'>{Mtauditsdata.mtline}</p>
        </div>
        {/* benefit */}
        <div className='mtbenefit'>
          <h2 className='powerheading'>{Mtauditsdata.mtbenefithead}</h2>
          <div className='benifitflex'>
        <div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.mtbenefithead1}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.mtbenefitpara1}</p>
          </div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.mtbenefithead2}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.mtbenefitpara2}</p>
          </div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.mtbenefithead3}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.mtbenefitpara3}</p>
          </div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.mtbenefithead4}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.mtbenefitpara4}</p>
          </div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.mtbenefithead5}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.mtbenefitpara5}</p>
          </div>

        </div>
        <div>
            <img src={Mtauditsdata.bookrobo} alt=''></img>
          </div>
        </div>
        </div>
        {/* benifit end */}
        <div className='mtbenefit'>
          <h2 className='powerheading'>{Mtauditsdata.mtbenefithead}</h2>
          <div className='benifitflex'>
          <div>
            <img className='cycle' src={Mtauditsdata.cyclerobo} alt=''></img>
          </div>
        <div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.ourhead1}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.ourpara1}</p>
          </div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.ourhead2}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.ourpara2}</p>
          </div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.ourhead3}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.ourpara3}</p>
          </div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.ourhead4}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.ourpara4}</p>
          </div>
          <div className='benifitpara'>
            <div className='benifitflex'>
            <i class="fa-solid fa-hexagon-nodes brain"></i>
            <h4 className='powerheadingh4'>{Mtauditsdata.ourhead5}</h4>
            </div>
         <p className='smallpara'>{Mtauditsdata.ourpara5}</p>
          </div>

        </div>
        
        </div>

        </div>
    </div>
  )
}

export default Mtaudits
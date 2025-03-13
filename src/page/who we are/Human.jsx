import React from 'react'
import { Humandata } from '../../constant/Humandata'

const Human = () => {
  return (
    <div>
        <div className='humanmain'>
            <div className='human1'>
                <h2 className='powerheading'>{Humandata.heading}</h2>
                <h2 className='span'>{Humandata.aiheading}</h2>
                <p className='powerpara'>{Humandata.headingpara}</p>
            </div>

            <div className='human2'>
              <h2 className='powerheading'>{Humandata.langhead}</h2>
              <p className='powerpara'>{Humandata.langpara}</p>
              <div className='human2sub'>
                <div className='human2img'>
                  <img src={Humandata.brain} alt=''></img>
                </div>
                <div className='human2country'>
                  <div className='country'>
                  <h4>{Humandata.countryhead1}</h4>
                  <h4>{Humandata.countryhead2}</h4>
                  <h4>{Humandata.countryhead3}</h4>
                  </div>
                  <div className='lang'>
                  <p>{Humandata.countryind}</p>
                  <p>{Humandata.countryapac}</p>
                  <p>{Humandata.countryeurope}</p>
                  </div>
                </div>
              </div>  
            </div>

             <div className='human3'>
             <h2 className='powerheading'>{Humandata.ourhead}</h2>
             <div className='human3sub'>
             <div className='humantranslat'>
              <h4>{Humandata.subour1}</h4>
              <p>{Humandata.humanpara}</p>
             </div>
             <div className='post-editing'>
             <h4>{Humandata.subour2}</h4>
              <p>{Humandata.postpara}</p>
             </div>
             </div>

             <div className='humanwhy'>
              <h4 className='powerheadingh4'>{Humandata.whyhead}</h4>
              <div className='flexdiv'>
                <div>
                  <div className='whyhead'>
                    <h4>{Humandata.whyhead1}</h4>
                    <p>{Humandata.whypara1}</p>
                  </div>
                  <div className='whyhead'>
                    <h4>{Humandata.whyhead2}</h4>
                    <p>{Humandata.whypara2}</p>
                  </div>
                  <div className='whyhead'>
                    <h4>{Humandata.whyhead3}</h4>
                    <p>{Humandata.whypara3}</p>
                  </div>
                  <div className='whyhead'>
                    <h4>{Humandata.whyhead4}</h4>
                    <p>{Humandata.whypara4}</p>
                  </div>
                  <div className='whyhead'>
                    <h4>{Humandata.whyhead5}</h4>
                    <p>{Humandata.whypara5}</p>
                  </div>
                </div>
                <div className='whyphone'>
                  <img src={Humandata.whyphone} alt=''></img>
                </div>
              </div>

             </div>
             </div>
             <hr></hr>
             <div className='human4'>
              <h2 className='powerheading'>{Humandata.wehead}</h2>
              <div className='flexhuman4'>

              <div className='human4sub1' >
                <h6>{Humandata.wehead1}</h6>
                <h6>{Humandata.wehead2}</h6>
                <h6>{Humandata.wehead3}</h6>
              </div>
              
              <div>
                <img src={Humandata.boy} alt=''></img>
              </div>

              <div className='human4sub2'>
                <h6>{Humandata.wehead4}</h6>
                <h6>{Humandata.wehead5}</h6>
                <h6>{Humandata.wehead6}</h6>
              </div>

              </div>

              <div className='human4goal'>
                <h2>{Humandata.goalhead}</h2>
                <p>{Humandata.goalpara}</p>
              </div>

             </div>
        </div>
    </div>
  )
}

export default Human
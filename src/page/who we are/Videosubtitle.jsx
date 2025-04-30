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
         {/*  */}
         <div className='herohome2'>
          <h2 className='span'>{videosubdata.ourexpect}</h2>
          <h4 className='powerpara'>{videosubdata.ourhead}</h4>
          <p className='smallpara'>{videosubdata.ourpara}</p>

          <div className='boxflexmini'>
            <div className='boxflexsub'>
              <h4 className='powerheadingh4'>{videosubdata.oursubhead1}</h4>
              <p className='smallpara'>{videosubdata.ourpara1}</p>
            </div>

            <div className='boxflexsub'>
            <h4 className='powerheadingh4'>{videosubdata.oursubhead2}</h4>
            <p className='smallpara'>{videosubdata.ourpara2}</p>
            </div>
          </div>
          <div className='boxflexmini'>
            <div className='boxflexsub'>
              <h4 className='powerheadingh4'>{videosubdata.oursubhead3}</h4>
              <p className='smallpara'>{videosubdata.ourpara3}</p>
            </div>

            <div className='boxflexsub'>
            <h4 className='powerheadingh4'>{videosubdata.oursubhead4}</h4>
            <p className='smallpara'>{videosubdata.ourpara4}</p>
            </div>
          </div>

         </div>
         {/*  */}
         <div>
          <h2 className='span'>{videosubdata.whyhead}</h2>
          <p className='smallpara'>{videosubdata.whypara}</p>

          <div className='whyflex'>
            <div className='whyflexparamain'>
              <p className='whyflexpara'>{videosubdata.whyflexpara1}</p>
              <p className='whyflexpara'>{videosubdata.whyflexpara2}</p>
              <p className='whyflexpara'>{videosubdata.whyflexpara3}</p>
              <p className='whyflexpara'>{videosubdata.whyflexpara4}</p>
            </div>
            <div>
              <img className='whyimgvideo' src={videosubdata.whyimg} alt=''></img>
            </div>
          </div>

          <div className='whyflex2'>
          <div className='whyflexpara2'>
              <h4 className='powerheadingh4'>{videosubdata.whysubhead1}</h4>
              <p className='smallpara'>{videosubdata.whysubpara1}</p>
           </div>
           <div className='whyflexpara3'>
              <h4 className='powerheadingh4'>{videosubdata.whysubhead2}</h4>
              <p className='smallpara'>{videosubdata.whysubpara2}</p>
           </div>
           <div className='whyflexpara4'>
              <h4 className='powerheadingh4'>{videosubdata.whysubhead3}</h4>
              <p className='smallpara'>{videosubdata.whysubpara3}</p>
           </div>
          </div>
         </div>
         {/*  */}

         <div className='boxbox'>
          <img className='group1' src={videosubdata.group1}alt=''></img>
          <div className='flexgroup'>
            <div className='groupbox'>
              <h4 className='powerheadingh4'>{videosubdata.boxhead1}</h4> 
              <p className='smallpara'>{videosubdata.boxpara1}</p>
            </div>
            <div className='groupbox'>
              <h4 className='powerheadingh4'>{videosubdata.boxhead2}</h4> 
              <p className='smallpara'>{videosubdata.boxpara2}</p>
            </div>
            </div>

            <div className='flexgroup'>
            <div className='groupbox'>
              <h4 className='powerheadingh4'>{videosubdata.boxhead3}</h4> 
              <p className='smallpara'>{videosubdata.boxpara3}</p>
            </div>
            <div className='groupbox'>
              <h4 className='powerheadingh4'>{videosubdata.boxhead4}</h4> 
              <p className='smallpara'>{videosubdata.boxpara4}</p>
            </div>
            </div>
            <div className='flexgroup'>
            <div className='groupbox'>
              <h4 className='powerheadingh4'>{videosubdata.boxhead5}</h4> 
              <p className='smallpara'>{videosubdata.boxpara5}</p>
            </div>
            <div className='groupbox'>
              <h4 className='powerheadingh4'>{videosubdata.boxhead6}</h4> 
              <p className='smallpara'>{videosubdata.boxpara6}</p>
            </div>
            </div>
          <img className='group2' src={videosubdata.group2} alt=''></img>
         </div>
         {/*  */}
         <div>
          <h2 className='span'>{videosubdata.successhead}</h2>
          <p className='powerpara'>{videosubdata.successpara1}</p>
          <div className='successbigflex'>
            <p className='smallpara'>{videosubdata.successbigpara}</p>
            <p className='smallpara'>{videosubdata.successbigpara2}</p>
            <p className='smallpara'>{videosubdata.successbigpara3}</p>
          </div>
        
          <div className='globalflex'>
            <div>
            <h2 className='powerheadingh4'>{videosubdata.readyhead}</h2>
            <p className='smallpara'>{videosubdata.readypara}</p>
            <div className='liparamain'>
              <p className='lipara'>{videosubdata.readypara1}</p>
              <p className='lipara'>{videosubdata.readypara2}</p>
              <p className='lipara'>{videosubdata.readypara3}</p>
            </div>
            </div>

            <div className='g10'>
           <img src={videosubdata.g10} alt=''></img>
            </div>

          </div>

         </div>
         {/*   */}

        </div>

    </div>
  )
}

export default Videosubtitle

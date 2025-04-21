import React from 'react'
import { transcription } from '../../constant/Transcription'

const Transcriptionpage = () => {
  return (
    <div className='homecontainer'>
        <div className='transcription1'>
          <h2 className='powerheading1'>{transcription.transhead}</h2>
          <p className='powerpara'>{transcription.transpara}</p>
        </div>
        <div className='transcription2'>
          <h2 className='powerheading'>{transcription.transhead2}</h2>
          <p className='smallpara'>{transcription.transpara2}</p>

        <div className='flexbox'>
          <div className='transbox'>
            <h4 className='powerheadingh4'>{transcription.transwhyhead1}</h4>
            <p className='smallpara'>{transcription.transwhypara1}</p>
          </div>
          <div className='transbox'>
            <h4 className='powerheadingh4'>{transcription.transwhyhead2}</h4>
            <p className='smallpara'>{transcription.transwhypara2}</p>
          </div>
          </div>

          <div className='flexbox'>
          <div className='transbox'>
            <h4 className='powerheadingh4'>{transcription.transwhyhead3}</h4>
            <p className='smallpara'>{transcription.transwhypara3}</p>
          </div>
          <div className='transbox'>
            <h4 className='powerheadingh4'>{transcription.transwhyhead4}</h4>
            <p className='smallpara'>{transcription.transwhypara4}</p>
          </div>
          </div>

        </div>

        <div className='transcription3'>
         <h2 className='powerheading'>{transcription.transhead3}</h2>
         <div className='flexbox'>

          <div className='letters'>

           <div className='flexbox'>
           <i class="fa-solid fa-microchip chip"></i>
           <div className='letterbox'>
          <h4 className='powerheadingh4'>{transcription.transservicehead1}</h4>
          <p className='smallpara'>{transcription.transservicepara1}</p>
           </div>
           </div>
           <div className='flexbox'>
           <i class="fa-solid fa-microchip chip"></i>
           <div className='letterbox'>
          <h4 className='powerheadingh4'>{transcription.transservicehead2}</h4>
          <p className='smallpara'>{transcription.transservicepara2}</p>
           </div>
           </div>
           <div className='flexbox'>
           <i class="fa-solid fa-microchip chip"></i>
           <div className='letterbox'>
          <h4 className='powerheadingh4'>{transcription.transservicehead3}</h4>
          <p className='smallpara'>{transcription.transservicepara3}</p>
           </div>
           </div>
           <div className='flexbox'>
           <i class="fa-solid fa-microchip chip"></i>
           <div className='letterbox'>
          <h4 className='powerheadingh4'>{transcription.transservicehead4}</h4>
          <p className='smallpara'>{transcription.transservicepara4}</p>
           </div>
           </div>
           <div className='flexbox'>
           <i class="fa-solid fa-microchip chip"></i>
           <div className='letterbox'>
          <h4 className='powerheadingh4'>{transcription.transservicehead5}</h4>
          <p className='smallpara'>{transcription.transservicepara5}</p>
           </div>
           </div>
          </div>

          <div className='laprobrodiv'>
            <img className='laprobo' src={transcription.laprobo} alt=''></img>
          </div>

         </div>
        </div>
{/*  */}
        <div>
            <h2 className='powerheading'>{transcription.transhead4}</h2>
            <div className='advantage'>

             <div className='flexbox'>
              <div>
                <img className='adimg' src={transcription.asset} alt=''></img>
              </div>
              <div className='advantagebox'>
                <h4 className='powerheadingh4'>{transcription.assethead}</h4>
                <p className='smallpara'>{transcription.assetpara}</p>
              </div>
             </div>

             <div className='flexbox'>
              <div className='advantagebox'>
                <h4 className='powerheadingh4'>{transcription.assethead2}</h4>
                <p className='smallpara'>{transcription.assetpara2}</p>
              </div>
              <div>
                <img className='adimg' src={transcription.asset2} alt=''></img>
              </div>
             </div>

             <div className='flexbox'>
              <div>
                <img className='adimg' src={transcription.asset3} alt=''></img>
              </div>
              <div className='advantagebox'>
                <h4 className='powerheadingh4'>{transcription.assethead3}</h4>
                <p className='smallpara'>{transcription.assetpara3}</p>
              </div>
             </div>

             <div className='flexbox'>
              <div className='advantagebox'>
                <h4 className='powerheadingh4'>{transcription.assethead4}</h4>
                <p className='smallpara'>{transcription.assetpara4}</p>
              </div>
              <div>
                <img className='adimg' src={transcription.asset4} alt=''></img>
              </div>
             </div>

             <div className='flexbox'>
              <div>
                <img className='adimg' src={transcription.asset5} alt=''></img>
              </div>
              <div className='advantagebox'>
                <h4 className='powerheadingh4'>{transcription.assethead5}</h4>
                <p className='smallpara'>{transcription.assetpara5}</p>
              </div>
             </div>

            </div>
        </div>
        {/*  */}
        <div>
            <h2 className='powerheading'>{transcription.transhead5}</h2>
            <div className='flexbox'>
              <div>
                <img className='workimg' src={transcription.asset6} alt=''></img>
              </div>
              <div>
                <div className='workpara'>
                  <h4 className='powerheadingh4'>{transcription.workhead}</h4>
                  <p className='smallpara'>{transcription.workpara}</p>
                </div>
                <div className='workpara'>
                  <h4 className='powerheadingh4'>{transcription.workhead2}</h4>
                  <p className='smallpara'>{transcription.workpara2}</p>
                </div>
                <div className='workpara'>
                  <h4 className='powerheadingh4'>{transcription.workhead3}</h4>
                  <p className='smallpara'>{transcription.workpara3}</p>
                </div>
                <div className='workpara'>
                  <h4 className='powerheadingh4'>{transcription.workhead4}</h4>
                  <p className='smallpara'>{transcription.workpara4}</p>
                </div>
                <div className='workpara'>
                  <h4 className='powerheadingh4'>{transcription.workhead5}</h4>
                  <p className='smallpara'>{transcription.workpara5}</p>
                </div>
              </div>
            </div>
        </div>
        {/*  */}
         <div className='transfooter'>
          <h2 className='powerheading'>{transcription.foothead}</h2>
          <p className='powerpara'>{transcription.footpara}</p>
            <h4 className='powerheadingh4'>{transcription.footsubhead}</h4>
            <p className='smallpara'>{transcription.footsubpara}</p>
         </div>
    </div>
  )
}

export default Transcriptionpage
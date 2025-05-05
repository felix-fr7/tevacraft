import React from 'react'
import { websitedata } from '../../constant/Websitdata'

const Websitelocalization = () => {
  return (
    <div className='homecontainer'>
      <div className='webhome'>
        <h2 className='span'>{websitedata.webhead}</h2>
        <p className='powerpara'>{websitedata.webpara}</p>
      </div>

      <div className='webhero2'>
        <h2 className='powerheading'>{websitedata.websubhead}</h2>
        <p className='powerpara'>{websitedata.websubpara}</p>
        <div className='webhome2'>
          <h4 className='span'>{websitedata.ourhead}</h4>

          <div className='ourmainflex'>
            <div className='ourchippara'>
           <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.ourhead1}</h4>
           </div>
           <p className='smallpara'>{websitedata.ourpara1}</p>
           <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.ourhead2}</h4>
           </div>
           <p className='smallpara'>{websitedata.ourpara2}</p>
           <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.ourhead3}</h4>
           </div>
           <p className='smallpara'>{websitedata.ourpara3}</p>
           <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.ourhead4}</h4>
           </div>
           <p className='smallpara'>{websitedata.ourpara4}</p>
           <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.ourhead5}</h4>
           </div>
           <p className='smallpara'>{websitedata.ourpara5}</p>
            </div>
            <div>
          <img className='ourimg' src={websitedata.successimg}></img>
            </div>
          </div>

        </div>
        <p className='powerpara'>{websitedata.ourmainpara}</p>
      </div>
      {/*  */}
      <div className='successmain'>
        <h2 className='powerheading'>{websitedata.successhead}</h2>
        <p className='powerpara'>{websitedata.successpara}</p>
        <img  className='successimg' src={websitedata.ourimg2}></img>
        <p className='powerpara'>{websitedata.successbigpara}</p>
      </div>
      
      <div className='successmainflex'>
        <div>
          <img src={websitedata.seoimg}></img>
        </div>
        <div className='successsubflex'>
        <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.successhead1}</h4>
           </div>
           <p className='smallpara'>{websitedata.successpara1}</p>
           <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.successhead2}</h4>
           </div>
           <p className='smallpara'>{websitedata.successpara2}</p>
        </div> 
      </div>

      <div className='successmainflex'>

        <div className='successsubflex'>
        <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.successhead3}</h4>
           </div>
           <p className='smallpara'>{websitedata.successpara3}</p>
           <div className='headchipflex'>
           <i class="fa-solid fa-microchip chip"></i>
            <h4 className='powerheadingh4'>{websitedata.successhead4}</h4>
           </div>
           <p className='smallpara'>{websitedata.successpara4}</p>
        </div> 
        <div>
          <img src={websitedata.visual}></img>
        </div>
      </div>
{/*  */}

       <div className='bluebox'>
       <h2 className='powerheading'>{websitedata.tablehead}</h2>

       <div className='tableflex'>
       <div className='smalltable'>
       <h4 className='powerheadingh4'>{websitedata.tablesubhead1}</h4>
       <p className='smallpara'>{websitedata.tablepara1}</p>
       </div>

       <div className='smalltable'>
       <h4 className='powerheadingh4'>{websitedata.tablesubhead2}</h4>
       <p className='smallpara'>{websitedata.tablepara2}</p>
       </div>

       <div className='smalltable'>
       <h4 className='powerheadingh4'>{websitedata.tablesubhead3}</h4>
       <p className='smallpara'>{websitedata.tablepara3}</p>
       </div>
       </div>


       <div className='tableflex'>
       <div className='smalltable'>
       <h4 className='powerheadingh4'>{websitedata.tablesubhead4}</h4>
       <p className='smallpara'>{websitedata.tablepara4}</p>
       </div>

       <div className='smalltable'>
       <h4 className='powerheadingh4'>{websitedata.tablesubhead5}</h4>
       <p className='smallpara'>{websitedata.tablepara5}</p>
       </div>
       </div>

       </div>
       {/*  */}
       <div className='flipmain'>
        <h2 className='powerheading'>{websitedata.fliphead}</h2>
        <div className='flipmain1'>

        <div className='flipsub1'>
          <div className='flipicon'>
          <i class="fa-solid fa-gauge"></i>
            <h4 className='powerheadingh4'>{websitedata.flipsubhead1}</h4>
          </div>
          <p className='smallpara'>{websitedata.flippara1}</p>
        </div>
        <div className='flipsub1'>
          <div className='flipicon'>
          <i class="fa-solid fa-ruler"></i>
            <h4 className='powerheadingh4'>{websitedata.flipsubhead2}</h4>
          </div>
          <p className='smallpara'>{websitedata.flippara2}</p>
        </div>
        <div className='flipsub1'>
          <div className='flipicon'>
          <i class="fa-solid fa-location-dot"></i>
            <h4 className='powerheadingh4'>{websitedata.flipsubhead3}</h4>
          </div>
          <p className='smallpara'>{websitedata.flippara3}</p>
        </div>

        </div>

        <div className='flipmain2'>

<div className='flipsub1'>
  <div className='flipicon'>
  <i class="fa-solid fa-hand-pointer"></i>
    <h4 className='powerheadingh4'>{websitedata.flipsubhead4}</h4>
  </div>
  <p className='smallpara'>{websitedata.flippara4}</p>
</div>
<div className='flipsub1'>
  <div className='flipicon'>
  <i class="fa-solid fa-rocket"></i>
    <h4 className='powerheadingh4'>{websitedata.flipsubhead5}</h4>
  </div>
  <p className='smallpara'>{websitedata.flippara5}</p>
</div>
<div className='flipsub1'>
  <div className='flipicon'>
  <i class="fa-solid fa-sim-card"></i>
    <h4 className='powerheadingh4'>{websitedata.flipsubhead6}</h4>
  </div>
  <p className='smallpara'>{websitedata.flippara6}</p>
</div>

</div>

       </div>
       {/*  */}
       <div className='footerweb'>
        <h2 className='powerheading'>{websitedata.footerhead}</h2>
        <p className='powerpara'>{websitedata.footerpara}</p>
      </div>
      </div>
  )
}

export default Websitelocalization
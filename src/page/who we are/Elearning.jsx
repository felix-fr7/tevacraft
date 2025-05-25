
import { React,elearningdata } from '../../constant/Elearningdata'

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
        {/* s3 */}
        <div className='s3'>
          <h2 className='powerheading'>{elearningdata.robo6head}</h2>
          <p className='powerpara'>{elearningdata.robo6para}</p>
          <div className='miniroboflex'>
            <div className='minirobobox'>
              <img src={elearningdata.minirobo1} alt=''></img>
              <h4 className='powerheadingh4'>{elearningdata.robo6subhead1}</h4>
            </div>
               <div className='minirobobox'>
              <img src={elearningdata.minirobo2} alt=''></img>
              <h4 className='powerheadingh4'>{elearningdata.robo6subhead2}</h4>
            </div>
               <div className='minirobobox'>
              <img src={elearningdata.minirobo3} alt=''></img>
              <h4 className='powerheadingh4'>{elearningdata.robo6subhead3}</h4>
            </div>
            </div>
            <div className='miniroboflex'>
              <div className='minirobobox'>
              <img src={elearningdata.minirobo4} alt=''></img>
              <h4 className='powerheadingh4'>{elearningdata.robo6subhead4}</h4>
            </div>
              <div className='minirobobox'>
              <img src={elearningdata.minirobo5} alt=''></img>
              <h4 className='powerheadingh4'>{elearningdata.robo6subhead5}</h4>
            </div>
            </div>
            <p className='powerpara'>{elearningdata.robo6footerpara}</p>
        </div>
        {/* s4 */}
        <div className='s4'>
          <div className='handrobopurple'>
            <h2 className='powerheading'>{elearningdata.handrobohead}</h2>
           
           <div className='purpleflex'>
            <div>
              <div className='flexrocket'>
              <i class="fa-solid fa-rocket"></i>
             <h4>{elearningdata.handrobosubhead1}</h4>
              </div>
            <p>{elearningdata.handrobopara1}</p>
            </div>

            <div>
              <div className='flexrocket'>
              <i class="fa-solid fa-lightbulb"></i>
             <h4>{elearningdata.handrobosubhead2}</h4>
              </div>
            <p>{elearningdata.handrobopara2}</p>
            </div>
            </div>
          </div>

          <div className='tableblue'>
            <div className='tableflex'>

              <div>
                <h4 className='powerheadingh4'>{elearningdata.etablehead1}</h4>
                <p className='smallpara'>{elearningdata.etablepara1}</p>
              </div>
               <div>
                <h4 className='powerheadingh4'>{elearningdata.etablehead1}</h4>
                <p className='smallpara'>{elearningdata.etablepara1}</p>
              </div>
                <div>
                <h4 className='powerheadingh4'>{elearningdata.etablehead1}</h4>
                <p className='smallpara'>{elearningdata.etablepara1}</p>
              </div>

            </div>
          </div>
        </div>
        {/* S5 */}
        <div>
          <div className='s5'>
            <h2 className='powerheading'>{elearningdata.shead1}</h2>
            <div className='sflex'>

              <div>
                <div className='flexicon'>
                  <i class="fa-solid fa-gauge-high"></i>
                <h4 className='powerheadingh4'>{elearningdata.ssubhead1}</h4>
                </div>
                <p className='smallpara'>{elearningdata.spara1}</p>
              </div>

               <div>
                <div className='flexicon'>
                  <i class="fa-solid fa-chart-line"></i>
                <h4 className='powerheadingh4'>{elearningdata.ssubhead2}</h4>
                </div>
                <p className='smallpara'>{elearningdata.spara2}</p>
              </div>

               <div>
                <div className='flexicon'>
                 <i class="fa-solid fa-bullseye"></i>
                <h4 className='powerheadingh4'>{elearningdata.ssubhead3}</h4>
                </div>
                <p className='smallpara'>{elearningdata.spara3}</p>
              </div>

            </div>

          </div>
        </div>
        {/* S6 */}
        <div className='s6'>
          <h2 className='powerheading'>{elearningdata.whyhead}</h2>
          <div className='s6flex'>
            <div className='colorchange'>
              <h4 className='powerheadingh4'>{elearningdata.whysubhead1}</h4>
              <p className='smallpara'>{elearningdata.whypara1}</p>
            </div>
             <div className='colorchange'>
              <h4 className='powerheadingh4'>{elearningdata.whysubhead2}</h4>
              <p className='smallpara'>{elearningdata.whypara2}</p>
            </div>
            <div className='colorchange'>
              <h4 className='powerheadingh4'>{elearningdata.whysubhead3}</h4>
              <p className='smallpara'>{elearningdata.whypara3}</p>
            </div>
          </div>

          <div className='s6flex'>
            <div className='colorchange'>
              <h4 className='powerheadingh4'>{elearningdata.whysubhead4}</h4>
              <p className='smallpara'>{elearningdata.whypara4}</p>
            </div>
             <div className='colorchange'>
              <h4 className='powerheadingh4'>{elearningdata.whysubhead5}</h4>
              <p className='smallpara'>{elearningdata.whypara5}</p>
            </div>
          </div>

        </div>
      
  

   </div>
  )
}

export default Elearning
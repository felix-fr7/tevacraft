import React from 'react'
import { homedata } from '../../constant/Homedata'
import Accordion from 'react-bootstrap/Accordion';


const Home = () => {
  return (
    <div className='home'>


        <div className='homecontainer'>

            <div className='powerhero'>
            <h2 className='powerheading'>{homedata.powertitle}</h2>
            <h2 className='span'>{homedata.powertitle2}</h2>
            <p className='powerpara'>{homedata.powerpara}</p>
            </div>


            <div className='homehero'>
              <h2 className='powerheading'>{homedata.herotitle}</h2>
              <p className='powerpara'>{homedata.heropara}</p>
              <div className='robohandmain'>
              <div className='robodetails'>
                <h4>{homedata.herosubhead}</h4>
                <hr></hr>
                <h6>{homedata.herosubhead1}</h6>
                <h6>{homedata.herosubhead2}</h6>
                <h6>{homedata.herosubhead3}</h6>
                <h6>{homedata.herosubhead4}</h6>
                <h6>{homedata.herosubhead5}</h6>
                <h6>{homedata.herosubhead6}</h6>
                <h6>{homedata.herosubhead7}</h6>
                <h6>{homedata.herosubhead8}</h6>
              </div>
              <div className='robohand'>
              <img src={homedata.robohand} alt=''/>
              </div>
              </div>
            </div>
          
          <div className='choose'>
               <h2 className='powerheading'>{homedata.choosehead}</h2>
               <div className='accordionmain'>
              <Accordion>
                <div className='accordionitem0'>
      <Accordion.Item eventKey="0">
         <Accordion.Header><h6>{homedata.choosehead1}</h6></Accordion.Header>
        <Accordion.Body>
        <p>{homedata.choosepara1}</p>
        </Accordion.Body>
      </Accordion.Item>
               </div>
                 <div className='accordionitem'>
      <Accordion.Item eventKey="1" classname ="choosetext">
         <Accordion.Header><h6>{homedata.choosehead2}</h6></Accordion.Header>
        <Accordion.Body>
        <p>{homedata.choosepara2}</p>
        </Accordion.Body>
      </Accordion.Item>
                  </div>
                <div className='accordionitem'>
      <Accordion.Item eventKey="2" classname ="choosetext">
         <Accordion.Header><h6>{homedata.choosehead3}</h6></Accordion.Header>
        <Accordion.Body>
        <p>{homedata.choosepara3}</p>
        </Accordion.Body>
      </Accordion.Item>
                </div>
                <div className='accordionitem'>
      <Accordion.Item eventKey="3" classname ="choosetext">
         <Accordion.Header> <h6>{homedata.choosehead4}</h6> </Accordion.Header>
        <Accordion.Body>
        <p>{homedata.choosepara4}</p>
        </Accordion.Body>
      </Accordion.Item>
                </div>
                <div className='accordionitem'>
      <Accordion.Item eventKey="4" classname ="choosetext">
        <Accordion.Header><h6>{homedata.choosehead5}</h6></Accordion.Header>
        <Accordion.Body>
        <p>{homedata.choosepara5}</p>
        </Accordion.Body>
      </Accordion.Item>
                </div>
    </Accordion>
    </div>
       </div>


              <div className='process'>
                <h2 className='powerheading'>{homedata.processhead}</h2>
                <div className='processmain'>
                  <div className='processmain1'>
                  <div className='processdetail'>
                  <h6>{homedata.processhead1}</h6>
                    <p>{homedata.processpara1}</p>
                  </div>
                  <div className='processdetail'>
                  <h6>{homedata.processhead2}</h6>
                    <p>{homedata.processpara2}</p>
                  </div>
                  <div className='processdetail'>
                  <h6>{homedata.processhead3}</h6>
                    <p>{homedata.processpara3}</p>
                  </div>
                  </div>
                  <div className='processmain2'>
                  <div className='processdetail'>
                  <h6>{homedata.processhead4}</h6>
                    <p>{homedata.processpara4}</p>
                  </div>
                  <div className='processdetail'>
                  <h6>{homedata.processhead5}</h6>
                    <p>{homedata.processpara5}</p>
                  </div>
                  <div className='processdetail'>
                  <h6>{homedata.processhead6}</h6>
                    <p>{homedata.processpara6}</p>
                  </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Home
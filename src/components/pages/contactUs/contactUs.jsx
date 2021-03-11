import React, {useState} from 'react';
import clouds from '../../vectors/contactUs/contact_us_cloud.svg';
import bottom from '../../vectors/contactUs/contact_us_bottom.svg';
import './contactUs.css';
import designHead from '../../vectors/contact_headings/design_head.svg';
import studentAdvisor from '../../vectors/contact_headings/student_advisor.svg';
import publicrelations from '../../vectors/contact_headings/pr_head.svg';
import overallCoordinator from '../../vectors/contact_headings/overall_coordinator.svg';
import ikraarHead from '../../vectors/contact_headings/ikraar.svg';
import danceHead from '../../vectors/contact_headings/dance.svg';
import contentHead from '../../vectors/contact_headings/content_head.svg';
import debateHead from '../../vectors/contact_headings/debate.svg';
import sketchHead from '../../vectors/contact_headings/etch_sketch.svg';
import filmHead from '../../vectors/contact_headings/film_wars.svg';
import financeHead from '../../vectors/contact_headings/finance_head.svg';
import harmonyHead from '../../vectors/contact_headings/harmony.svg';
import quizHead from '../../vectors/contact_headings/quiz.svg';
import sponsorshipHead from '../../vectors/contact_headings/sponsorship_head.svg';
import photographyHead from '../../vectors/contact_headings/vivid_snaps.svg';
import artHead from '../../vectors/contact_headings/brush_hour.svg';
import managementHead from '../../vectors/contact_headings/management_head.svg';
import treasureHead from '../../vectors/contact_headings/treasure_hunt.svg';
import {Carousel} from 'antd';
import aastha from '../../vectors/boarding_passes/aastha.svg';
import adwait from '../../vectors/boarding_passes/adwait.svg';
import akshay from '../../vectors/boarding_passes/akshay.svg';
import khushboo from '../../vectors/boarding_passes/khushboo.svg';
import saksham from '../../vectors/boarding_passes/saksham.svg';
import sejal from '../../vectors/boarding_passes/sejal.svg';
import surya from '../../vectors/boarding_passes/surya.svg';
import aadil from '../../vectors/boarding_passes/aadil.svg';
import arpit from '../../vectors/boarding_passes/arpit.svg';
import darshay from '../../vectors/boarding_passes/darshay.svg';
import deep from '../../vectors/boarding_passes/deep.svg';
import gunjan from '../../vectors/boarding_passes/gunjan.svg';
import harshil from '../../vectors/boarding_passes/harshil.svg';
import kartik from '../../vectors/boarding_passes/kartik.svg';
import mansi from '../../vectors/boarding_passes/mansi.svg';
import namami from '../../vectors/boarding_passes/namami.svg';
import naveen from '../../vectors/boarding_passes/naveen.svg';
import sanya from '../../vectors/boarding_passes/sanya.svg';
import satvik from '../../vectors/boarding_passes/satvik.svg';
import sourabh from '../../vectors/boarding_passes/sourabh.svg';
import svara from '../../vectors/boarding_passes/svara.svg';
import { useSpring, animated as a } from 'react-spring'

const ContactUs = () => {

	const [card, setCard] = useState({
		ifcard: false,
		studentAdvCard: false,
		managementHead:false,
		prHead:false,
            sponsHead:false,
            financeHead:false,
            designHead:false,
            contentHead:false,
            danceHead:false,
            symphonyHead:false,
            harmonyHead:false,
            quizHead:false,
            debateHead:false,
            ikraarHead:false,
            brushHead:false,
            sketchHead:false,
            treasureHead:false,
            vividHead:false,
            filmwarsHead:false,
            eventHeads: false
      })

      const [contacts,setContacts] = useState({
            khushboo:false,
            saksham:false,
            harshil:false,
            aadil:false,
            aastha:false,
            adwait:false,
            surya:false,
            sourabh:false,
            darshay:false,
            sanya:false,
            sejal:false,
            namami:false,
            kartik:false,
            svara:false,
            satvik:false,
            deep:false,
            gunjan:false,
            mansi:false,
            akshay:false,
            arpit:false,
            naveen:false
      })

      const [flipped, setFlipped] = useState(false);

      const { transform, opacity } = useSpring({
            opacity: flipped ? 1 : 0,
            transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
            config: { mass: 5, tension: 500, friction: 80 }
      })

      return(
            <div className="contactUs">
                  <img src={clouds} />
                  <div className="container-1" style={{display:'flex', zIndex:'2'}}>
                        <div className="box-1" style={{flex:'1',height:'100vh', justifyContent:'center', alignItems:'center'}}>
                              <div className="designation" style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                                    <span className="individualDesignation" 
                                                style={{opacity: card.ifcard? '1' : ''}}
                                                onClick={() => {setCard({ifcard: true})}}> Overall Coordinator</span>
                                    <span className="individualDesignation" 
                                                style={{opacity: card.studentAdvCard? '1' : ''}}
                                                onClick={() => {setCard({studentAdvCard: true})}}>Student Adviser</span>
                                    <span className="individualDesignation"
                                          style={{opacity: card.managementHead? '1' : ''}}
                                          onClick={() => {setCard({managementHead: true})}}>Management Head</span>
                                    <span className="individualDesignation"
                                          style={{opacity: card.sponsorshipHead? '1' : ''}}
                                          onClick={() => {setCard({sponsorshipHead: true})}}>Sponsorship Head</span>
                              </div>
                        </div>
                        <div className="box-2" style={{flex:'1',height:'100vh',justifyContent:'center', alignItems:'center'}}>

                        <div onMouseOver={() => setFlipped(state => !state)}>
                              <a.img className="c back" src={designHead} style={{display: card.designHead? 'block':'none', opacity: opacity.interpolate(o => 1 - o), transform}}/>
                              <a.img className="c front" src={khushboo} style={{display: contacts.khushboo? 'block':'none', opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                        </div>

                        <div onMouseOver={() => setFlipped(state => !state)}>
                              <a.img className="c back" src={studentAdvisor} style={{display: card.studentAdvCard? '':'none', opacity: opacity.interpolate(o => 1 - o), transform}}/>
                              <a.img className="c front" src={harshil} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                        </div>

			<div onMouseOver={() => setFlipped(state => !state)}>
				<a.img className="c back" src={overallCoordinator} style={{display: card.ifcard? '':'none', opacity: opacity.interpolate(o => 1 - o), transform}}/>
				<a.img className="c front" src={saksham} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
			</div>

                        <div onMouseOver={() => setFlipped(state => !state)}>
                              <a.img className="c back" src={financeHead} style={{display: card.financeHead? '':'none', opacity: opacity.interpolate(o => 1 - o), transform}}/>
                              <a.img className="c front" src={darshay} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                        </div>

                        <div onMouseOver={() => setFlipped(state => !state)}>
                              <a.img className="c back" src={contentHead} style={{display: card.contentHead? '':'none', opacity: opacity.interpolate(o => 1 - o), transform}}/>
                              <a.img className="c front" src={sanya} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                        </div>

                        <div onMouseOver={() => setFlipped(state => !state)}>
                              <a.img className="c back" src={managementHead} style={{display: card.managementHead? '':'none', opacity: opacity.interpolate(o => 1 - o), transform}}/>
                              <a.img className="c front" src={aadil} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                        </div>

                              
                              
                              <img src={publicrelations} style={{display: card.prHead? '':'none'}}/>
                              <img src={ikraarHead} style={{display: card.ikraarHead? '':'none'}}/>
                              <img src={debateHead } style={{display: card.debateHead? '':'none'}}/>
                              <img src={sketchHead} style={{display: card.sketchHead? '':'none'}}/>
                              <img src={filmHead} style={{display: card.filmwarsHead? '':'none'}}/>
                              <img src={harmonyHead} style={{display: card.harmonyHead? '':'none'}}/>
                              <img src={quizHead} style={{display: card.quizHead? '':'none'}}/>
                              <img src={danceHead} style={{display: card.danceHead? '':'none'}}/>
                              <img src={sponsorshipHead} style={{display: card.sponsHead? '':'none'}}/>
                              <img src={photographyHead } style={{display: card.vividHead? '':'none'}}/>
                              <img src={artHead} style={{display: card.brushHead? '':'none'}}/>
                              <img src={treasureHead} style={{display: card.treasureHead? '':'none'}} />

                              <Carousel vertical style={{display: card.eventHeads? 'block':'none'}}>
                                    <div><img src={filmHead} /></div>
                                    <div><img src={filmHead} /></div>
                                    <div><img src={filmHead} /></div>
                                    <div><img src={filmHead} /></div>
                              </Carousel>


                        </div>
                        <div className="box-3" style={{flex:'1', height:'100vh', alignItems:'center'}}>
                              <div className="designation" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                                    <span className="individualDesignation" 
                                          style={{opacity: card.prHead? '1' : ''}}
                                          onClick={() => {setCard({prHead: true})}}>Public Relations Head</span>
                                    <span className="individualDesignation" 
                                          style={{opacity: card.designHead? '1' : ''}}
                                          onClick={() => {setCard({designHead: true})}}>Design Head</span>
                                    <span className="individualDesignation"
                                          style={{opacity: card.financeHead? '1' : ''}}
                                          onClick={() => {setCard({financeHead: true})}}>Finance Head</span>
                                    <span className="individualDesignation"
                                          style={{opacity: card.contentHead? '1' : ''}}
                                          onClick={() => {setCard({contentHead : true})}}>Social Media and Content Head</span>
                                    <span className="individualDesignation"
                                          style={{opacity: card.eventHeads? '1' : ''}}
                                          onClick={() => {setCard({eventHeads: true})}}>Event Heads</span>
                              </div>
                        </div>
                  </div>
                  <img src={bottom} style={{marginTop: '-50vw'}}/>
            </div>
      )
};

export default ContactUs;
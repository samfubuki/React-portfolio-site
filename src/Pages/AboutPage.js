import React from 'react'
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import pen from '../img/design.svg';
import data from '../img/intelligence.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
         <Title title={'About Me'} span = {'About Me'} />
         <ImageSection />
         <Title title={'My Skills'} span = {'My Skills'} />
         <div className="skillsContainer">
           <SkillsSection skill={'Javascript'} progress = {'70%'} width={'70%'}/>
           <SkillsSection skill={'Data Analytics'} progress = {'30%'} width={'30%'}/>
           <SkillsSection skill={'React Js'} progress = {'60%'} width={'60%'}/>
           <SkillsSection skill={'CSS'} progress = {'80%'} width={'80%'}/>
           <SkillsSection skill={'HTML'} progress = {'90%'} width={'90%'}/>
           <SkillsSection skill={'Machine Learning'} progress = {'40%'} width={'40%'}/>
           <SkillsSection skill={'Django'} progress = {'80%'} width={'80%'}/>
           <SkillsSection skill={'Flutter'} progress = {'25%'} width={'25%'}/>
           <SkillsSection skill={'Node Js'} progress = {'76%'} width={'76%'}/>
         </div>
         <Title title={'Services'} span = {'Services'} />
         <div className="servives-container">
             <ServicesSection image={design} title={'Web Development'} text={'Backend development in Django, NodeJs. Use Django more frequently. FrontEnd development framework is ReactJS.'}
             />
             <ServicesSection image={pen} title={'Content Writing'} text={'Can do blog writing , content development over a topic. Also editing a written content to make ti crisper and better.'}
             />
             <ServicesSection image={data} title={'Data Analysis'} text={'Can do data analysis and know some machine learning algorithms. Still need some polishing and need to learn deep learning algorithms too.'}
             />
         </div>
        </div>
    )
}

export default AboutPage

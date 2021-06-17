import React from 'react'
import ContactItem from '../Components/ContactItem';
import Title from '../Components/Title';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function ContactPage() {
    return (
       <div>
         <div className="title">
         <Title title={'Contact Details'} span = {'Contact Details'} />
         </div> 
         <div className="ContactPage">
          <div className = "map-sect">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0333413875333!2d77.23012801503351!3d28.508644582466825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19910f70daf%3A0xd4f6006390bd5e74!2sDeoli%20Rd%2C%20New%20Delhi%2C%20Delhi%20110062!5e0!3m2!1sen!2sin!4v1623338636039!5m2!1sen!2sin" width="600" height="450" frameBorder = "0" style={{border:0}} allowFullScreen="" aria-hidden="False" tabIndex = "0" loading="lazy"></iframe>
          </div> 
          <div className = "contact-sect">
           <ContactItem icon = {phone} text1 = {'+91 9354645730'} text2 = {'+91 9654493482'} title = {'Phone Number'}/>
           <ContactItem icon = {email} text1 = {'pbhardwaj.preet@gmail.com'} text2 = {'axelshaun127@gmail.com'} title = {'Email'}/>
           <ContactItem icon = {location} text1 = {'Adarsh Colony, Devli Road, New Delhi'} title = {'Address'}/>
          </div>

        </div>
       </div> 
       
    )
}

export default ContactPage

import iconMail from '../img/mail.svg';
import iconLinkedIn from '../img/linkedIn.svg';
import iconGitHub from '../img/gitHub.svg';
import iconLogo from '../img/logo.svg';
import * as Element from './elements.jsx';
import Headline from './headline.jsx';

export function Header() {
  return <nav className="flex flex-row justify-center items-center bg-black w-full min-h-10">
    <div className="flex gap-5 min-h-10 h-10 items-center mr-auto">
      <Element.ImageLink link="https://www.toonudesign.tech/" image={iconLogo} alt="Logo"></Element.ImageLink>
      <Headline href='https://www.toonudesign.tech/'>Toonu Design</Headline>
    </div>
    <div className="flex gap-5 min-h-10 h-10 items-center ml-auto">
      <Element.ScrollButton scrollToPosition={ 50 } >Graphics</Element.ScrollButton>
      <Element.ScrollButton scrollToPosition={ 100 } >Apps</Element.ScrollButton>
      <Element.ScrollButton scrollToPosition={150} >Get in Touch</Element.ScrollButton>
    </div>
  </nav>
}

export function Footer() {
  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    height: "3vh",
    minHeight: "24px",
    width: "100%",
    fontSize: "1rem",
  
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: "var(--graytransparent)",
    zIndex: 63
  }}>
    <div style={{flexBasis:"40vw", display:"flex"}}></div>
    <div style={{flexBasis:"20vw", display:"flex", gap:"2vw", justifyContent:"center", alignItems:"center", height:"3vh", minHeight:"24px"}}>
      <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconLinkedIn}   editStyle={{flexBasis:"4vw"}} alt="LinkedIn"></Element.ImageLink>
      <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconMail}       editStyle={{flexBasis:"4vw"}} alt="Mail"></Element.ImageLink>
      <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconGitHub}     editStyle={{flexBasis:"4vw"}} alt="GitHub"></Element.ImageLink>
    </div>
    <div style={{flexBasis:"40vw", display:"flex", gap:"1vw", justifyContent:"flex-end", alignItems:"center", height:"3vh", minHeight:"24px"}}>
      Copyright © 2024 Toonu Design | All Rights Reserved
      <Element.ImageLink link="https://www.toonudesign.tech/" image={iconLogo} alt="Logo"></Element.ImageLink>
    </div>
  </div>
}

export function Spacer() {
  return <div style={{display:"flex", justifyContent:"center", alignItems:"center", widows:"100%", height:"10px"}}>
    <div style={{  borderStyle:"solid", borderWidth: "1px 0px 0px 0px", borderColor: "#fff", width: "80vw", height: "80%"}}></div>
  </div>
}
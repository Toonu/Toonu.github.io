import iconMail from './img/mail.svg';
import iconLinkedIn from './img/linkedIn.svg';
import iconGitHub from './img/gitHub.svg';
import iconLogo from './img/logo.svg';
import * as Element from './elements.jsx';

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
          <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconLinkedIn}   style={{flexBasis:"4vw"}} alt="LinkedIn"></Element.ImageLink>
          <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconMail}       style={{flexBasis:"4vw"}} alt="Mail"></Element.ImageLink>
          <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconGitHub}     style={{flexBasis:"4vw"}} alt="GitHub"></Element.ImageLink>
        </div>
        <div style={{flexBasis:"40vw", display:"flex", gap:"1vw", justifyContent:"flex-end", alignItems:"center", height:"3vh", minHeight:"24px"}}>
          Copyright © 2024 Toonu Design | All Rights Reserved
          <Element.ImageLink link="https://www.toonudesign.tech/" image={iconLogo} alt="Logo"></Element.ImageLink>
        </div>
      </div>
  }
  
  export function Header() {
    return <nav style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      objectFit: "contain",
      maxHeight: "8vh",
      height: "12vh",
      width: "100%",
      backgroundColor: "var(--black)"
    }}>
      <Element.ImageLink link="https://www.toonudesign.tech/" image={iconLogo} alt="Logo" style={{marginRight:"1vw"}}></Element.ImageLink>
      <a class="h1b" href='https://www.toonudesign.tech/' style={{marginRight:"auto", display:"flex", textDecoration:"none", color:"#fff"}}>Toonu Design</a>
      <Element.ScrollButton scrollToPosition={50} label="Graphics" />
      <Element.ScrollButton scrollToPosition={100} label="Apps" />
      <Element.ScrollButton scrollToPosition={150} label="Get in Touch" align="stretch" />
    </nav>
  }
  
  export function Spacer() {
    return <div style={{display:"flex", justifyContent:"center", alignItems:"center", widows:"100%", height:"10px"}}>
      <div style={{  borderStyle:"solid", borderWidth: "1px 0px 0px 0px", borderColor: "#fff", width: "80vw", height: "80%"}}></div>
    </div>
  }
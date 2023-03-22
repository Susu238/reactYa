import {Navbar , Container} from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
 import  Nav from 'react-bootstrap/Nav';
//  import Navbar from 'react-bootstrap/Navbar';
import {React ,  useState ,useEffect} from "react";
import logo from"../images/logo.svg";
import navIcon1 from "../images/nav-icon1.svg";
 import navIcon2 from "../images/nav-icon2.svg";
 import navIcon3 from "../images/nav-icon3.svg";


export const NavBar = () =>{
    const [activeLink , setActiveLink ] = useState ("home");
    const [scrolled , setSecrolled ]= useState(false);
useEffect(() =>{
    const onscroll =() =>{
        if(window.scrollY >50) {
            setSecrolled (true);
        }else {
            setSecrolled (false);
        }
    }
    window.addEventListener("scroll" ,onscroll);

    return () =>window.removeEventListener("scroll",onscroll);
} , [])
const onUpdatActiveLink = (value) =>{
setActiveLink(value);
}
return (


   
    // import NavDropdown from 'react-bootstrap/NavDropdown';
    
    
      
        <Navbar bg expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home"> 
            <img src={logo} alt ="logo" />
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink==="home" ?"active navbar-link" : "navbar-link"} onClick={()=>onUpdatActiveLink("home")}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink==="skills" ?"active navbar-link" : "navbar-link"}onClick={()=>onUpdatActiveLink("skills")}>Skills</Nav.Link>
                <Nav.Link href="#projects"className={activeLink==="projects" ?"active navbar-link" : "navbar-link"}onClick={()=>onUpdatActiveLink("projects")}>Projects</Nav.Link>

                
              </Nav>
              <span className="navbar-text">
               <div className="social-icon">
                   <a href="#" > <img src={ navIcon1} alt=""/> </a>
                   <a href="#" > <img src={navIcon2} alt=""/> </a>
                   <a href="#" > <img src={ navIcon3} alt=""/> </a>


               </div>
                 <button className="btn1" onClick={()=> console.log("connect")}><span>let us connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
    export default NavBar;











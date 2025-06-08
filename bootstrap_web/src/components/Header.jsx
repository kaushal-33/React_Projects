import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsChevronDown } from "react-icons/bs";
import SocialLinks from './SocialLinks';
import Button from './Button';

const Header = () => {
    return (
        <header className='sticky-top z-3 py-3 shadow'>
            <div className="container">
                <Navbar expand="lg" className="position-relative z-3">
                    <Navbar.Brand href="#home">
                        <img src="images\logo.svg" alt="" className='img-fluid' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
                    <Navbar.Collapse id="basic-navbar-nav" className='d-lg-flex justify-content-between'>
                        <Nav className="">
                            <Nav.Link href="#home" className='text-capitalize text-white simple-hover'>Home <BsChevronDown />
                            </Nav.Link>
                            <Nav.Link href="#link" className='text-capitalize text-white simple-hover'>about us</Nav.Link>
                            <Nav.Link href="#home" className='text-capitalize text-white simple-hover'>blogs</Nav.Link>
                            <Nav.Link href="#home" className='text-capitalize text-white simple-hover'>pages <BsChevronDown />
                            </Nav.Link>
                            <Nav.Link href="#home" className='text-capitalize text-white simple-hover'>contact us</Nav.Link>
                        </Nav>
                        <div className='d-lg-block d-none'>
                            <SocialLinks />
                        </div>
                        <div className='d-lg-block d-none'>
                            <Button name={"shop now"} />
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    )
}

export default Header
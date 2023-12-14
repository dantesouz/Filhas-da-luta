import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

function Menu() {

  //  const [paginaAtual, mudaPaginaAtual] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation().pathname;

    return (
        <div>
            <Navbar color="dark" dark expand="md" className='bg-black'>
                <Link to="/" className='navbar-brand'>Filhas da Luta</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link to="/"  className={location === '/' ? 'nav-link active' : 'nav-link'}>Início</Link>
                       </NavItem>
                        <NavItem>
                            <Link to="/loja/" className={location === '/loja' ? 'nav-link active' : 'nav-link'}>Loja</Link>
            </NavItem>
                        <NavItem>
                            <Link to="/contato" className={location === '/contato' ? 'nav-link active' : 'nav-link'}>Contato</Link>
                                                                   
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Menu;
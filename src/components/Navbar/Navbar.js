import './Navbar.css';
import { AddShoppingCart } from '@mui/icons-material';
import { Button, Drawer } from '@mui/material';
import { useState } from 'react';

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(true);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav>
            <div className='nav-container'>
                <h1 className='nav-logo'> react-cart </h1>
                <Button onClick={handleOpenMenu}>
                    <AddShoppingCart fontSize='large' className='nav-shopping-cart-icon' />
                </Button>
                <Drawer anchor="right" open={isOpen} onClose={handleCloseMenu}>
                    <div className='menu-container'>
                        <h3 className='menu-title'> Your Shopping Cart </h3>
                        <p className='no-items-in-cart'> No items in cart </p>
                        <h4 className='menu-total'> Total: $0.00 </h4>
                    </div>
                </Drawer>
            </div>
        </nav>
    )
};

export default Navbar;
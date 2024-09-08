// PortalComponent.js
import React from 'react';
import ReactDOM from 'react-dom';
import MyCart from '../screens/MyCart';

const PortalComponent = ({ children }) => {

    return ReactDOM.createPortal(
        <div >
            <div className="portal-overlay">
                <div className="portal-content">
                    {children}
                    <MyCart />
                </div>
            </div>,

        </div>,
        document.getElementById('portal-root')
    );
};

export default PortalComponent;

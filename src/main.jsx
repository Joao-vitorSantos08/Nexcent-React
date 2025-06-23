import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react';
import './index.css'
import './global.css';
import Header from './components/header';
import Main from './components/main';
import OurClients from './components/section-our-clients';
import ManageSystaem from './components/section-manage-system';
import Pixelgrade from './components/pixelgrade';
import HelpingLocal from './components/helping-local';
import HowToDesing from './components/how-to-design';
import Customer from './components/section-customer';
import CartingMarketing from './components/section-carting-marketing';
import Pellentesque from './components/section-Pellentesque';
import Footer from './components/footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main/>
    <OurClients/>
    <ManageSystaem/>
    <Pixelgrade/>
    <HelpingLocal/>
    <HowToDesing/>
    <Customer/>
    <CartingMarketing/>
    <Pellentesque/>
    <Footer/>
  </StrictMode>
)

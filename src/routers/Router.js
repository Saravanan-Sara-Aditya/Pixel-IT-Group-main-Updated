import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Home from '../components/Home'
import Header from '../Layouts/Header'
import AboutUs from '../components/Aboutus'
import Footer from '../Layouts/Footer'
import ContactUsPage from '../components/Contactus'
import WebApplication from '../components/WebApplication'
import CloudSupport from '../components/CloudInfrasupport'
import GisMapping from '../components/NetworkingDevices'
import OilGas from '../components/VOIP'
import Building from '../components/ITSecurity'
import Utilities from '../components/NetworkingDevices'
import ManPowerServices from '../components/APN'
import Java from '../components/Servers'
import ITServices from '../components/ITServices'
import ITSupport from '../components/ITSupport'
import VOIP from '../components/VOIP'
import NetworkingDevices from '../components/NetworkingDevices'
import Servers from '../components/Servers'
import SoftwareSolutions from '../components/SoftwareSolutions'
import DesktopsLaptops from '../components/Testimonial'


const Router = () => {
    return (
        <div>
            <div >
                <Header />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/About"><AboutUs /></Route>
                    <Route path="/Servers"><Servers /></Route>
                    <Route path="/WebApplicaiton"><WebApplication /></Route>
                    <Route path="/Desktops_Laptops"><DesktopsLaptops /></Route>
                    <Route path="/Software_Solutions"><SoftwareSolutions /></Route>
                    <Route path="/VOIP"><VOIP /></Route>
                    <Route path="/Cloud_Support"><CloudSupport /></Route>
                    <Route path="/IT_Services"><ITServices /></Route>
                    <Route path="/Access_Points"><ManPowerServices /></Route>
                    <Route path="/Networking_Devices"><NetworkingDevices /></Route>
                    <Route path="/IT_Security"><Building /></Route>
                    <Route path="/IT_Support"><ITSupport /></Route>
                    <Route path="/Contact"><ContactUsPage /></Route>
                </Switch>
                <Footer />
            </div>
        </div>
    )
}

export default Router

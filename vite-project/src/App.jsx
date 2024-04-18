import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import styled from "styled-components";
import MailComponent from './MailComponent';
import AppRoutes from './Routes';



function App() {
 
    return (
    <>
    <Router basename='/'>
<AppRoutes/>
</Router>

    </>
  )
}

export default App

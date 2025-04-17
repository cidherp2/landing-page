import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com';
import styled from "styled-components";
import image1 from "../assets/pictures/Pest-Control-Frost-1169748167-1.png"
import image2 from "../assets/pictures/logo nombre'.png"
import image3 from  "../assets/pictures/textura.svg"
import ContactMenu from "./ContactButton"
import ContactosArriba from"./ContactosArriba"
import Footer from './Footer';
import Modal from './modalMensaje';

import './App.css'
import { faDisplay } from '@fortawesome/free-solid-svg-icons';



const Anuncio = styled.div /*style*/`
  color: gray;
  `

  const EmailForm = styled.form /*style*/ `
width : 95%;
  height:75%;
  display:flex;
  flex-direction:row;
  gap: 1rem;
 color:gray;
 align-self:center;
 justify-content:flex-start;
 position: relative;
 bottom:8.5rem;
 align-items:center;
 flex-wrap:wrap;

 label{
 display:none;
 }

 input {
   width:80%;
   height:3rem;
   background:none;
   color:black;
   font-size:1.1rem;
   

   background: #f4f4f4; /* Light gray background color */
    color: #333; /* Text color */
    border: 1px solid #d4d4d4; /* Light gray border */
    border-radius: 4px; /* Rounded corners */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
    transition: box-shadow 0.3s ease; /* Smooth transition on hover */

    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(0, 122, 255, 0.5); /* Adjusted box shadow on focus */
    }

   
   }

 input#nombre {
   width:45%;
   }
 input#apellidos {
  width:45%;
   }
 input#telefono {
  width:45%;
  
   }
 input#mail {
  width:45%;
  
   }
 input#cliente {
  
   }
   input#mensaje {
    height: 10rem;
  }

 @media (min-width: 360px) and (max-width: 900px) {
   display:flex;
   width:100%;
   flex-direction:column;
   margin-top:5rem;  
   align-items:center;
   gap:1.5rem;
   label{
 display:initial;
 }

   input {
   width:80%;
   height:3rem;
   background:none;
   font-size:1.2rem;
   font-weight:bold;
   }

   input#nombre {
   width:80%;
   
  }
input#apellidos {
  width:80%;
  }
input#telefono {
  width:80%;
  }
input#mail {
  width:80%;
  }
input#cliente {
  
  }
  input#mensaje {
    
 }
   
  }

  `
  const LandingPageContainer = styled.div /*style*/ `
width : 100%;
 height:100% ;
 display:inline-flex;

 @media (min-width: 360px) and (max-width: 900px) {
   display:flex;
   flex-direction:column;

  }

  `

const LeftImageContainer = styled.div /*style*/ `
width: 50%;
padding:2rem;
background-color:rgb(37,37,88);

@media (min-width: 360px) and (max-width: 900px) {
   display:none;
   background-color:none;
  }
`
const RightSideContainer = styled.div /*style*/ `
  position: relative;
  border: 1rem solid rgb(159,32,38);
  
  width:50%;
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  
  



  @media (min-width: 360px) and (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    border:none;
  }
`;

const Imagenes = styled.img /*style*/ `
object-fit:cover;
width: 100%;
height: 100%;
aspect-ratio: 16/9;
`
const Imagenes2 = styled.img /*style*/ `
transform:scale(.7);
position:relative;
top:1.5rem;


@media (min-width: 360px) and (max-width: 900px) {
  transform:scale(.75);
  }

`

const EnviarButton = styled.button /*style*/ `
background-color:rgb(37,37,88);
  width:80%;

  border: 1px solid #d4d4d4; /* Light gray border */
    border-radius: 4px; /* Rounded corners */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
    transition: box-shadow 0.3s ease; /* Smooth transition on hover */
@media (min-width: 360px) and (max-width: 900px) {
  background-color:rgb(37,37,88);
  width:85%;
  border-radius:0px;
  border: 1px solid #d4d4d4; /* Light gray border */
    border-radius: 4px; /* Rounded corners */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
    transition: box-shadow 0.3s ease; /* Smooth transition on hover */
}

`

function MainComponenSLP() {
  const [count, setCount] = useState(0)
  const [nombre,setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [apellidos,setApellidos] = useState('')
  const [telefono, setTelefono] = useState('')
  const [tipoCliente, setTiipoCliente] =useState('')
  const [mail,setMail]= useState('')
  const [validEmail, setIsValidEmail] = useState(true)
  const [esVisible, setEsVisible] = useState(false)
  const [esVisibleContact, setEsVisibleContact] = useState(true)
  const [esVisibleBack, setEsVisibleBack] = useState(false)
  const [leftSideVisible,setLeftSideVisible] =useState(true)
  const [logoVisible, setLogoVisible] =useState(true)
  const [modalVisible,setModalVisible] = useState(false)

  const isSendDisabled = !nombre || !mail || !apellidos || !telefono || !tipoCliente || !mensaje

  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailEntered = (e) => {
    setMail(e.target.value)
     }

  const handleEmailValidation = () => {
    setIsValidEmail(emailRegex.test(mail))
  }

  const nameEntered = (e) => {
    setNombre(e.target.value)
  }

  const apellidoEntered = (e) => {
    setApellidos(e.target.value)
  }

  const telefonoEntered = (e) => {
    setTelefono(e.target.value)
  }
  const tipoClienteEntered = (e) => {
    setTiipoCliente(e.target.value)
  }

  const menuAbierto =(e) => {
    setTiipoCliente('')
  }

  const appearList = () => {
    setEsVisible(true)
    setEsVisibleContact(false)
}
  const appearContact = () => {
    setEsVisibleContact(true)
    setEsVisible(false)
}

const appearRegresarButton = () => {
setEsVisibleBack(true)
}

const mensajeEntered = (e) => {
setMensaje(e.target.value);
console.log(mensaje);

}

const modalActivado = (e) => {
  setModalVisible(true);
}
const modaDesactivado = (e) => {

  setModalVisible(false);
}

const templateParams = {
  to_name: `${nombre} ${apellidos}`,
  phone: telefono,
  email: mail,
  client_type: tipoCliente,
  message: mensaje
}

 useEffect(() => {
   if (window.innerWidth <900){
    setLogoVisible(true)
   }
 });[]

 

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_3c7f7qm',
    "template_hs6oopc",
    templateParams,
    "XUyd0V_5KWYe3BPf1"
  )
  .then((res) => {
    console.log("Mensaje enviado exitosamente",res)
  })
  .catch((err) =>{
    console.log("Hubo un error al enviar el correo",err)
  })

  setEsVisible (false)

  } 
    return (
    <>
    
<LandingPageContainer>

  
  
  <LeftImageContainer>
  <Imagenes src={image1} alt="hola"></Imagenes>
  </LeftImageContainer>
 
  <RightSideContainer>
    {esVisibleContact && (
  <ContactMenu appearList={appearList} appearRegresarButton={appearRegresarButton} setLeftSideVisible={setLeftSideVisible} setLogoVisible = {setLogoVisible}
  telefono={"4442081594"}
  etiqueta={'AW-16466862533'}
  conversion_event={'wYhyCKOB9LkaEMXDgaw9'}
  > </ContactMenu>
    )} 
  {esVisible && (
    <EmailForm
    onSubmit={handleSubmit}>
   <label for='mail'> Email:</label>
   <input
   type="text"
   id='mail'
   value={mail}
   onChange={emailEntered}
   onBlur = {handleEmailValidation}
   required
   placeholder='Escribe tu correo electrónico'
    />
    {!validEmail && mail !== '' && <p style={{ color: 'gray' }}>Este no es un correo válido</p>}

    <label>
      Nombre:
    </label>
    <input
    id='nombre'
    type="text"
    value={nombre}
    onChange = {nameEntered}
    placeholder='Escribe tu nombre'
    >
    </input>

    <label>
      Apellidos:
    </label>

    <input  
    type="text"
    id='apellidos'
    value = {apellidos}
    onChange={apellidoEntered}
    placeholder='Escribe tu apellido'
    >
    </input>

    <label >
      Teléfono
      </label> 
      <input
      id='telefono'
      type='text'
      value={telefono}
      placeholder='Escribe tu teléfono'
      onKeyDown={(e) => {
        if (!/[0-9]|Backspace/.test(e.key)) {
          e.preventDefault();
        }
      }}
      onChange={telefonoEntered}
      >
      </input>

      <label>
        Tipo de cliente
      </label>

    <input
    id='cliente'
    type='select'
    list='options'
    onFocus={menuAbierto}
    placeholder='Elige el tipo de cliente'
    value={tipoCliente}
    onKeyDown={(e) => {
      if (!/[0-9]|Backspace/.test(e.key)) {
        e.preventDefault();
      }
    }}
    onChange={tipoClienteEntered}
    >
    </input>
    <datalist id="options">
      <option value="Casa"/>
      <option value="Departamento"/>
      <option value="Negocio"/>
      <option value="Industrial"/>
      <option value="Otros"/>
    </datalist>
    <label>
      Descripción del problema
    </label>
    <input
    id='mensaje'
    type='text'
    placeholder='Describe tu problema'
    value={mensaje}
    onChange={mensajeEntered}
    >
    </input>
    <EnviarButton type='submit' disabled={isSendDisabled}
    onClick={modalActivado}
    >Enviar</EnviarButton>

    </EmailForm>
    )}
    <ContactosArriba appearContact={appearContact} esVisibleBack={esVisibleBack} setEsVisibleBack={setEsVisibleBack} setLeftSideVisible={setLeftSideVisible}
    telefono={"444-208-1594"}
    />

    <Imagenes2 src={image2} alt="logo insects out"></Imagenes2>
    </RightSideContainer>
    </LandingPageContainer>
    {modalVisible && (
    <Modal modaDesactivado={modaDesactivado}></Modal>
    )}
    
    </>
  )
}

export default MainComponenSLP

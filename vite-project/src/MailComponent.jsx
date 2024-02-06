import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com';
import styled from "styled-components";
import image1 from "../../assets/pictures/Pest-Control-Frost-1169748167-1.png"
import image2 from "../../assets/pictures/logo nombre'.png"
import image3 from  "../../assets/pictures/textura.svg"
import ContactMenu from "./ContactButton"
import ContactosArriba from"./ContactosArriba"
import Footer from './Footer';

import './App.css'
import { faDisplay } from '@fortawesome/free-solid-svg-icons';



const Anuncio = styled.div /*style*/`
  color: gray;
  `

  const EmailForm = styled.form /*style*/ `
width : 95%;
  height:75%;
  display:flex;
  flex-direction:column;
  gap: 1.5rem;
 color:gray;
 align-self:center;
 justify-content:flex-start;
 position: relative;
 bottom:8.5rem;

 @media (min-width: 360px) and (max-width: 900px) {
   display:flex;
   width:100%;
   flex-direction:column;
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
@media (min-width: 360px) and (max-width: 900px) {
   display:none;
  }
`
const RightSideContainer = styled.div /*style*/ `
  position: relative;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  



  @media (min-width: 360px) and (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;

const Imagenes = styled.img /*style*/ `
object-fit:cover;
width: 100%;
height: 100%;
aspect-ratio: 16/9;
`
const Imagenes2 = styled.img /*style*/ `
transform:scale(.75);

@media (min-width: 360px) and (max-width: 900px) {
  
  }

`

function MailComponent() {
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

const mensajeEntered = (e) => {
setMensaje(e.target.value);
console.log(mensaje);

}

const templateParams = {
  to_name: `${nombre} ${apellidos}`,
  phone: telefono,
  email: mail,
  client_type: tipoCliente,
  message: mensaje
}

// useEffect(() => {
//   // Update the document title using the browser API
//   appearList();
// });[]

 

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
  <ContactMenu appearList={appearList}> </ContactMenu>
    )} 
  {esVisible && (
    <EmailForm
    onSubmit={handleSubmit}>
   <label> Email:</label>
   <input
   type="text"
   value={mail}
   onChange={emailEntered}
   onBlur = {handleEmailValidation}
   placeholder='Escribe tu correo electrónico'
    />
    {!validEmail && mail !== '' && <p style={{ color: 'gray' }}>Este no es un correo válido</p>}

    <label>
      Nombre:
    </label>
    <input
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
    value = {apellidos}
    onChange={apellidoEntered}
    placeholder='Escribe tu apellido'
    >
    </input>

    <label>
      Teléfono
      </label> 
      <input
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
    type='text'
    value={mensaje}
    onChange={mensajeEntered}
    >
    </input>
    <button type='submit'>Enviar</button>

    </EmailForm>
    )}
    <ContactosArriba appearContact={appearContact}/>
    <Imagenes2 src={image2} alt="hola"></Imagenes2>
    </RightSideContainer>
    </LandingPageContainer>
    
    </>
  )
}

export default MailComponent

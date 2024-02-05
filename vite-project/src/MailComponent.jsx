import { useState } from 'react'
import styled from "styled-components";
import image1 from "../../assets/pictures/Pest-Control-Frost-1169748167-1.png"
import image2 from "../../assets/pictures/logo nombre'.png"
import image3 from  "../../assets/pictures/textura.svg"
import ContactMenu from "./ContactButton"

import './App.css'



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
 display:none;
  `
  const LandingPageContainer = styled.div /*style*/ `
width : 100%;
 height:100% ;
 display:inline-flex;

  `

const LeftImageContainer = styled.div /*style*/ `
width: 50%;
padding:2rem;
`
const RightSideContainer = styled.div /*style*/ `
width: 50%;
height:auto;
display:flex;
flex-direction:column-reverse;
justify-content:space-evenly;
background-image:url(${image3});
background-size: cover;

`

const Imagenes = styled.img /*style*/ `
object-fit:cover;
width: 100%;
height: 100%;
aspect-ratio: 16/9;
`
const Imagenes2 = styled.img /*style*/ `
transform:scale(.75);

`

function MailComponent() {
  const [count, setCount] = useState(0)
  const [nombre,setNombre] = useState('')
  const [apellidos,setApellidos] = useState('')
  const [telefono, setTelefono] = useState('')
  const [tipoCliente, setTiipoCliente] =useState('')
  const [mail,setMail]= useState('')
  const [validEmail, setIsValidEmail] = useState(true)

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

 

  const handleSubmit = (e) => {
  e.preventDefault();

  } 
    return (
    <>
<LandingPageContainer>
  <LeftImageContainer>
  <Imagenes src={image1} alt="hola"></Imagenes>
  </LeftImageContainer>
  <RightSideContainer  >
  <ContactMenu></ContactMenu>
    <EmailForm>
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

    </EmailForm>

    <Imagenes2 src={image2} alt="hola"></Imagenes2>

    </RightSideContainer>
    </LandingPageContainer>
    </>
  )
}

export default MailComponent

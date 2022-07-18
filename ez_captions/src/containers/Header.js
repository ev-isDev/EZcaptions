import Button from './Button'
import logo from '../EZ.jpg'
import React from 'react'


const Header = ({ onDownload, onImport, onLogin}) => {
  return (
    <header className='header'>
        <img className='logo' src= {logo} alt="logo"/>
        <Button color={'green'} text = 'import' onClick={onImport}/>
        <Button color={'blue'} text = 'export' onClick = {onDownload}/>
        <Button color={'black'} text = 'Login' onClick={onLogin}/>

        
    </header>
  )
}


export default Header;
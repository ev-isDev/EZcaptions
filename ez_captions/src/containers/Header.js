import Button from './Button'
import logo from '../EZ.jpg'
import React from 'react'


const Header = ({ onDownload, onImport, onLogin, onClear}) => {
  return (
    <header className='header'>
        <img className='logo' src= {logo} alt="logo"/>
        <Button color={'green'} text = 'Import' onClick={onImport}/>
        <Button color={'blue'} text = 'Export' onClick = {onDownload}/>
        <Button color={'red'} text = 'Clear' onClick={onClear}/>
        <Button color={'black'} text = 'Login' onClick={onLogin}/>
    </header>
  )
}


export default Header;
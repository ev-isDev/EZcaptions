import PropTypes from 'prop-types'
import Button from './Button'
import logo from '../EZ.jpg'


const Header = ({ onDownload }) => {
  return (
    <header className='header'>
        <img className='logo' src= {logo} alt="logo"/>
        <Button color={'green'} text = 'import'/>
        <Button color={'blue'} text = 'export' onClick = {onDownload}/>
        <Button color={'black'} text = 'Login'/>

        
    </header>
  )
}


export default Header;
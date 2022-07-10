import PropTypes from 'prop-types'
import Button from './Button'
import logo from './EZ.jpg'


const Header = ({ title }) => {
  return (
    //contains the header rendering. contains an onClick prop for the Download button
    // the title prop allows a developer to quickly change the text in the header
    <header className='header'>
        <img className='logo' src= {logo} alt="logo"/>
        
    </header>
  )
}

// these are default values for the Header text
Header.defaultProps = {
  title: "captions"
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title ,onClick}) => {
  return (
    //contains the header rendering. contains an onClick prop for the Download button
    // the title prop allows a developer to quickly change the text in the header
    <header className='header'>
        <h1>{title}</h1>
        <Button color = 'blue' text = "Download Caption File" onClick={onClick}/>
    </header>
  )
}

// these are default values for the Header text
Header.defaultProps = {
  title: "EZcaptions"
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
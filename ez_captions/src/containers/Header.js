import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title ,onClick}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color = 'blue' text = "Download Caption File" onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: "EZcaptions"
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
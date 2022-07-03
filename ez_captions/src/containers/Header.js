import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color = 'green' text = "Add Caption" />
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
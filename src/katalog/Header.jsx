import logo from '../assets/logo.png'
import '../css/class.css'
import arrow from '../assets/arrow-square-down.png'
import button from '../assets/Button.png'

function Header() {
  const now = new Date()
  return (
    <>
      <header>
        <nav>
          <div className='nav-logo'>
            <img src={logo} alt="" />
          </div>
          <div className='nav-text'>
            <div className='nav-text-left'>
              <p>about</p>
              <p>our services </p>
              <p>job openings</p>
            </div>
            <div className='nav-text-right'>
              <div>
                <p>EN</p>
                <button type="button">
                  <img src={arrow} alt="" />
                </button>
              </div>
              <a href="">
                <button type="button">
                  <p>CONTACT US</p>
                  <img src={button} alt="" />
                </button>
              </a>
            </div>
          </div>
        </nav>
        <div className='header-bottom'>
          <div>
            <p>Developing IT solutions to scale up your business</p>
            <div></div>
          </div>
          <div></div>
        </div>
      </header>
    </>
  )
}

export default Header

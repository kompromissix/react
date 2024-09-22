import logo from '../assets/logo.png'
import '../css/class.css'
import arrow from '../assets/arrow-square-down.png'
import button from '../assets/Button.png'
import button2 from '../assets/Button21.png'
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
          <div className='header-bottom-up'>
            <p>Developing IT solutions to scale up your business</p>
            <div></div>
          </div>
          <div>
            <img src={button2} alt="" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import putin from '/flnwxqh1.png'
import './novova.css'
import Header from './katalog/header'
import { ways } from './data'
import { photo } from './photo'
import { text } from './textinas'
import { slou } from './sloupok'
import { smehota } from './smeh'

function WayToTeach(props) {
  return(
    <div className="block-big">
      <div className='block'>
          <div>
            <span>{props.number}</span>
          </div>
          <div className='block-bottom'>
          <div className='block1'>
              <p>{props.title}</p>
          </div>
          <div className='block2'>
              <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
function PhotoMath(Zov) {
  return(
    <div className="block-big">
      <img src={Zov.img} alt="" />
    </div>
  )
}
function Texts(Voz) {
  return(
    <div className='text-texts-block'>
      <div className="text-texts">
        <div>
          <h1>{Voz.oglav}</h1>
        </div>
        <div>
          <p>{Voz.text}</p>
        </div>
      </div>
    </div>
  )
}
function Piss(Cloun) {
  return(
    <div className='Cloun'>
      <div className="Cloun-div">
        <div>
          <h1>{Cloun.oglav}</h1>
        </div>
        <div>
          <p>{Cloun.text}</p>
        </div>
      </div>
    </div>
  )
}
function Da(shlu) {
  return(
    <div className='shlu'>
      <img src={shlu.imgs} alt="" />
      <h1>{shlu.oglav}</h1>
      <hr/>
      <p>{shlu.text}</p>
    </div>
  )
}
export default function App() {
  const [content, setContent] = useState()
  return (
    <>
      <main>
        <section className='background1'>
          <p>What are our goals?</p>
          <div>
            <div className='block-collect'> 
              <div className='block-collect-top'>
                <WayToTeach {...ways[0]}/>
              </div>
              <div className='block-collect-top'>
                <WayToTeach {...ways[1]}/>
              </div>
              <div className='block-collect-top'>
                <PhotoMath {...photo[0]}/>
              </div>
            </div>
            <div className='block-collect'>
              <div>
                <PhotoMath {...photo[1]}/>
              </div>
              <div>
                <WayToTeach {...ways[2]}/>
              </div>
            </div>
            <div className='block-collect'>
              <div>
                <WayToTeach {...ways[3]}/>
              </div>
              <div>
                <PhotoMath {...photo[2]}/>
              </div>
            </div>
          </div>
        </section>

        <section className='background2'>
          <p>Why choose us?</p>
          <div>
            <p>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</p>
          </div>
          <div>
            <div className='left-button'>
              <button type="button">Team</button>
              <button type="button">Communication</button>
              <button type="button">Solution</button>
              <button type="button">Quality</button>
            </div>
            <div>
              <Texts {...text[0]}/>
            </div>
          </div>
        </section>

        <section className='background3'>
          <p>How we work?</p>
          <div>
            <div>
              <div className='po'>
                <p>Requirements analysis and statement of work</p>
              </div>
              <div className='hover'><Piss {...slou[0]}/></div>
              <div className='hover'><Piss {...slou[1]}/></div>
            </div>
            <div>
              <div className='hover'><Piss {...slou[2]}/></div>
              <div className='hover'><Piss {...slou[3]}/></div>
              <div className='hover'><Piss {...slou[4]}/></div>
            </div>
          </div>
          <div className='more'>
              <p>Learn <br />more</p>
          </div>
        </section>
        <section className='background4'>
          <p>Industries</p>
          <div>
            <div><Da {...smehota[0]}/></div>
            <div><Da {...smehota[1]}/></div>
            <div><Da {...smehota[2]}/></div>
          </div>
        </section>
      </main>
    </>
  )
}

import '../css/style.css'
import { ways } from '../data'
function block(props) {
    return (
        <>
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
                            <p>{props.description   }</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default block
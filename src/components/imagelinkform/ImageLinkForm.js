import React from 'react' ;
import './Imagelinkform.css' ;

const ImageLinkForm = ({onInputChange, onButtonDetect}) => {
    return (
        <div className='f5 '>
            <p className='f5'>dasd asdas asd as</p>
            <div className='center'>
                <div className=' form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' onClick={onButtonDetect}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm ;
import React from 'react' ;
import './face_recognition.css' ;

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='input_image' alt='img not detected. cek url' src={imageUrl} width='500vh' height='auto'/>
                <div className='bounding_box' style={{top: box.toprow , right: box.rightcol , bottom: box.bottomrow , left: box.leftcol}}></div>            
            </div>        
        </div>
    )
}

export default FaceRecognition ;
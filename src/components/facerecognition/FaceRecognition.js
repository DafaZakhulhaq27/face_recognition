import React from 'react' ;

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center'>        
            <img alt='img not detected. cek url' src={imageUrl} />
        </div>
    )
}

export default FaceRecognition ;
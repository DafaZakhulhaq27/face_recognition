import React from 'react' ;

const Rank = ({name, entries}) => {
    return (
        <div>        
            <div className='white f3 b'>
                {`${name} your score is`}
            </div>            
            <div className='white f1 b'>
                {`${entries}`}
            </div>            
        </div>
    )
}

export default Rank ;
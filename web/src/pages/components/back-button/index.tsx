import React from 'react'
import { IconContext } from 'react-icons'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { useHistory} from 'react-router-dom'
import { Cancel } from '../../../bot/main'


const BackButton:React.FC = () => {
    const history = useHistory()

    return (
        <button 
            onClick={() => {Cancel(); history.go(-1);}}
            style={{width: '40px',
            height: '40px',
            alignItems: 'center', 
            justifyContent: 'center', 
            marginRight: '10px', 
            border: 'none', 
            background: 'none', 
            cursor: 'pointer'
          }}>
            <IconContext.Provider value={{ color: "#00b083", size: '40'}}>
                <IoIosArrowDropleftCircle/>
            </IconContext.Provider>
        </button>
    )
}

export default BackButton
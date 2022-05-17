import './cardContent.scss'
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import { useState } from 'react'

const CardContent =(props)=>{

  const [image, setImage] = useState(0)

  const changeImage = ()=>{
    if(image){
      setImage(0)
    }else{
      setImage(1)
    }
  }

    return (
      <div className="CardContent">
        <span>
         <h1 className='title'>{props.title} </h1>
         <button onClick={changeImage}>
         {(image === 1 ? <FaCaretDown/> : <FaCaretUp/>)}
         </button>
        </span>
         <div className={'desc '+ ((image === 1)?'show':'hide')}>{props.description}</div>
         <div className={'body '+ ((image === 1)?'show':'hide')}>{props.children}</div>
          
      </div>
    );
  }

  export default CardContent


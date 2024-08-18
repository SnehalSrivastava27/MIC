import React, { useState,useEffect} from 'react';
import  './Slider.css'
import TypingEffect from './TypingEffect';
export default function Slider()
{
    return(
        <>
        <div className='image'>
        <img src="https://imageio.forbes.com/blogs-images/morraaaronsmele/files/2018/01/Screen-Shot-2014-09-29-at-12.27.24-PM-1024x583.jpg?format=jpg&width=1440"></img>
        <div className="text"><TypingEffect></TypingEffect></div>
        </div>
       
        </>
    )
}
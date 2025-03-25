import React from 'react';
import "../BannerBoxNew/style.css"
import { Link } from 'react-router-dom';

const BannerBoxNew = (props) => {
  return (
    <div className="bannerBoxNew w-full overflow-hidden rounded-md group relative">
        <img src={props.image} alt="" className="w-full transition-all duration-150 group-hover:scale-105" />

        <div className={`info  absolute p-5 top-0 ${props.info==="left" ? 'left-0' : 'right-0'} w-[70%] h-[100%] z-50 flex items-centerj justify-center flex-col gap-2 ${props.info==="left" ? '' : 'pl-15'}`}>
            <h2 className='text-[18px] font-[600]'>Samsung Gear VR Camera</h2>
            <span className='text-[20px] text-primary font-[600] w-full'>$129.00</span>
            <div className="w-full">
            <Link to='/' className='text-[16px] font-[600] link uppercase'>Shop Now</Link>
            </div>
        </div>
    </div>
    
  )
}

export default BannerBoxNew;
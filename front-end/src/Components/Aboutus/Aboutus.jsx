import React from 'react'
import img1 from '../../assets/dir.jpg'
import banner from '../../assets/banner.png'

const Aboutus = () => {
  return (
    <>
    <div className=''>
       
        <img src={banner} alt="" className='text-center h-[40vh] w-full mt-20 '/>
    <div className='max-w-[1320px]   md:py-[80px] py-5 flex mx-auto md:flex-row flex-col '>
        <div className='basis-[45%]'>
            <img src={img1} alt="" className='w-500px pb-5 mr-3'/>
        </div>
        <div className='basis-[55%] px-5'>
            <h1 className='text-5xl pb-4 font-bold text-cyan-600 '>Our Dream is Global Learning Transformation</h1>
            <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium iure vitae modi mollitia? Iure, sint sequi dignissimos velit voluptatibus facere quo consequatur. Reiciendis vero hic optio quia, laboriosam nostrum.</p>
            <p className='py-3' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci rerum illo, vero quos voluptatibus itaque tenetur quasi error dolorum id accusamus iusto repellat consequuntur mollitia odio nulla esse qui.</p>
            <p className='py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, molestiae nemo ipsa reprehenderit assumenda earum explicabo quae labore alias, sequi commodi voluptas sapiente, ex quam itaque. Odio pariatur quae ut.</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Aboutus
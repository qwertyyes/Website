import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat sed ratione eligendi eum repudiandae fuga porro voluptates reprehenderit consequatur mollitia eius incidunt molestiae quidem, doloremque quos quia perferendis quas earum adipisci rerum ducimus sequi in expedita optio? Magnam, necessitatibus quo.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quisquam error expedita earum natus, temporibus unde voluptates esse harum, veniam dolor repudiandae libero facere ut vitae laudantium omnis, commodi eveniet pariatur nulla obcaecati doloribus? Aut et nostrum voluptatum voluptatibus assumenda.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti perferendis exercitationem et blanditiis perspiciatis, maiores necessitatibus nemo ipsum saepe atque totam fugiat cum hic debitis adipisci voluptatem. Voluptates, quasi!</p>
      </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus eum quo tempore eveniet officiis deserunt unde! Obcaecati, quidem optio.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus eum quo tempore eveniet officiis deserunt unde! Obcaecati, quidem optio.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus eum quo tempore eveniet officiis deserunt unde! Obcaecati, quidem optio.</p>
        </div>
      </div>

      <NewletterBox/>
    </div>
  )
}

export default About

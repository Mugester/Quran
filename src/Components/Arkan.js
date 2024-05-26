import React from 'react'
import shahada from '../Images/Shahada.jpg'
import salah from '../Images/salah.jpg'
import roza from '../Images/Roza.jpg'
import zakat from '../Images/zakat.jpg'
import hajj from '../Images/hajj.jpg'

const Arkan = () => {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container mx-auto px-5 py-24">
    <div className="flex flex-wrap -m-4 justify-center text-center">
      <div className="lg:w-1/6 md:w-1/2 w-full p-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <img className='rounded-md mb-2' src={shahada}/>
          <h2 className="title-font font-medium text-3xl text-gray-900">الشهادة</h2>
          <p className="leading-relaxed">Profession of Faith</p>
        </div>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full p-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img className='rounded-md mb-2' src={salah}/>
          <h2 className="title-font font-medium text-3xl text-gray-900">صلاة</h2>
          <p className="leading-relaxed">prayer</p>
        </div>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full p-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img className='rounded-md mb-2' src={roza}/>
          <h2 className="title-font font-medium text-3xl text-gray-900">صوم</h2>
          <p className="leading-relaxed">Fasting</p>
        </div>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full p-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img className='rounded-md mb-2' src={zakat}/>
          <h2 className="title-font font-medium text-3xl text-gray-900">زكاة </h2>
          <p className="leading-relaxed">zakāt</p>
        </div>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full p-4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img className='rounded-md mb-2' src={hajj}/>
          <h2 className="title-font font-medium text-3xl text-gray-900">حَجّ</h2>
          <p className="leading-relaxed">pilgrimage</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Arkan

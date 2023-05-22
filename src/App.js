import React from 'react'
import {useState} from "react";
import Healthy from './healthy.png'
import Overweight from './overweight.png'
import Underweight from './underweight.png'

export default function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [message, setMessage] = useState('hello');

  let imgSrc = ''

  const calBmi = (e) => {
    e.preventDefault()
    if( weight === 0 || height === 0 ){
      alert('Please enter weight or height')
    }       else {
          let bmi = (weight / (height * height) * 703)
      setBMI(bmi.toFixed(1))
    }
  }

  const calMessage = () => {
    if (0 < bmi <= 18.5) {
      setMessage('Underweight')
    } else if( 18.5 < bmi <= 25){
          setMessage('Healthy')
    }   else{
      setMessage('Overweight')
    }
  }

  if(bmi < 1){
    imgSrc = ''
  } else if (1 < bmi <= 18.5 ){
    imgSrc = Underweight
  } else if ( 18.5 < bmi <= 25){
    imgSrc = Healthy
  }   else {
    imgSrc = Overweight
  }

  return (
    <div className='w-full h-screen py-10 flex '>
               <div className='mx-auto border-2 border-gray-200 rounded-xl h-full sm:w-4/12 grid p-4 pb-0'>
                 <form onSubmit={calBmi}>
                   <div>
                     <h2 className='text-3xl font-bold text-center'> BMI Calculator</h2>
                   </div>
                   <div className='mt-8'>
                     <label className='font-bold'> Weight (lbs)</label>
                     <input className='w-full mt-2 p-2 border border-gray-800' placeholder='Enter your weight in pounds' value={weight} onChange={(e) => {setWeight(e.target.value)}}/>
                   </div>
                   <div className='mt-4'>
                     <label className='font-bold'> Height (inc)</label>
                     <input className='w-full mt-2 p-2 border border-gray-800' placeholder='Enter your height in inches' value={height} onChange={(e) => {setHeight(e.target.value)}}/>
                   </div>
                   <div className='mt-8'>
                     <button className='w-full bg-black text-white p-2 rounded-xl' type={"submit"} onClick={calMessage} > Submit </button>
                     <button className='w-full bg-teal-400 text-white p-2 rounded-xl mt-4' type={"submit"} onClick={() => {window.location.reload()}} > Reset </button>
                   </div>
                 </form>

                 <div className='text-center mt-4'>
                                    <h3> Your BMI is: {bmi}</h3>
                                    <p> {message}</p>
                                  </div>
                 
                 <div className='text-center'>
                                    <img height={'20px'} src={imgSrc} alt={''}/>
                                  </div>
               </div>
    </div>
  )
}


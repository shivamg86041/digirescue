import React from 'react'
import dis from "../assets/dis.jpg"
import navigation from "../assets/navigation.png"
import chatbot from "../assets/chatbot.png"
import feedback from "../assets/feedback.png"
import hospital from "../assets/hospital.png"
import chatAgency from "../assets/chatAgency.png"
import ndrf from "../assets/ndrf.png"
import { Link } from "react-router-dom"
import "../App.css"
const home = () => {
    return (

        <div>
            <div className='bg-richblack-900 py-[140px] gap-25' id='homediv'>

                <div className='text-richblack-100 max-w-2xl '>
                    <h3 className='font-bold text-3xl text-yellow-500'>Welcome to DigiRescue -</h3>
                    <h3 className='font-bold text-3xl text-orange-600 '>Your Digital Lifeline in Emergencies</h3>

                    <div className='mt-6 text-justify text-xl italic space-y-6' id='paragraph'>
                        <p> In a world where disasters, both natural and man-made, can strike unexpectedly, having a reliable lifeline is paramount.
                            Introducing DigiRescue, your trusted companion during times of crisis. DigiRescue is your trusted partner during crises,
                            providing seamless communication, location services using <span className='text-green-600'>GPS</span> and direct access to
                            the agencies using  <span className='text-green-600'>Chat Box Assistance</span> dedicated to your safety</p>

                        <p>When you're in trouble, every second counts. Our <span className='text-green-600'>location services</span> help emergency responders reach you swiftly,
                            ensuring a faster and more effective response. In times of distress, DigiRescue bridges the gap between you and emergency agencies. Communicate directly
                            with National Disaster Response Force (NDRF) and State Disaster Response Force (SDRF) personnel using <span className='text-green-600'>Chat With Agencies</span>.</p>

                    </div>

                </div>

                <div >
                    <img src={dis} width={480} id='homeimg' />
                </div>
            </div>


            <div id='box' className='flex space-x-20 bg-richblack-900 pl-24 pb-32 pr-24 '>
                <div id='item' className='border-2 rounded-xl p-6'>
                    <Link to="https://ndmindia.mha.gov.in/contact-us">
                        <img src={hospital} width={100} />
                    </Link>
                    <div className='text-richblack-5'>
                        <h1 className='text-bold text-xl font-medium mt-3 mb-4 text-teal-600'>Hospital HelpLine Number</h1>
                        <p className='text-justify text-sm mt-2'>It is a vital service connecting individuals
                            to medical assistance and emergency support, ensuring prompt access to healthcare resources and guidance.</p>
                    </div>

                </div>
                <div id='item' className='border-2 rounded-xl p-6'>
                    <Link to="https://www.ndrf.gov.in/contact-us">
                        <img src={ndrf} width={100} />
                    </Link>
                    <div className='text-richblack-5'>
                        <h1 className='text-bold text-xl font-medium mt-3 mb-4 text-teal-600'>National Disaster Response Force</h1>
                        <p className='text-justify text-sm mt-2'>Instantly connect with trained responders who can provide real-time guidance
                            and support. Whether it's a medical crisis, natural disaster, or any urgent situation.</p>
                    </div>
                </div>
                <div id='item' className='border-2 rounded-xl p-5'>
                    <button>
                        <img src={chatAgency} width={100} />
                    </button>
                    <div className='text-richblack-5'>
                        <h1 className='text-bold text-xl font-medium mt-3 mb-4 text-teal-600'>Chat With Agencies</h1>
                        <p className='text-justify text-sm mt-2'>Communicate directly with
                            NDRF and SDRF personnel. Share critical information, request assistance,
                            and stay informed about their deployment status.</p>
                    </div>
                </div>
            </div>

            <div className='flex space-x-96 bg-richblack-900 pb-32 h' id='mapping'>
                <iframe width="1300" height="600" frameborder="0" scrolling="no" src="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=20.5937&lon=78.9629&zoom=5"></iframe>
            </div>

            <div id='boxes' className='flex bg-richblack-900 pb-32 '>
                <div id='items'>
                    <button>
                        <img src={navigation} width={100} />
                    </button>
                    <h1 className='text-richblack-5 text-bold text-xl  mt-2'>Navigation bar</h1>
                </div>

                <div id='items'>
                    <button>
                        <img src={chatbot} width={100} />
                    </button>
                    <h1 className='text-richblack-5 text-bold text-xl mt-2'>Chatbox Assistance</h1>
                </div>

                <div id='items'>
                    <button>
                        <img src={feedback} width={80} />
                    </button>
                    <a href="/shelter">
                    <h1 className='text-richblack-5 text-bold text-xl ml-2'>Feedback</h1>
                    </a>
                </div>
            </div>

        </div>

    )
}

export default home
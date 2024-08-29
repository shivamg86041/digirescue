import React from 'react'
import {FcGoogle} from "react-icons/fc"
import '../App.css'

const AgencyForm = () => {
    
  return (
    
         <div className=" " id='agencyform'>  
                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Organization Name <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Enter Organization Name"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Email Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="email"
                        placeholder="Enter Email Address"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>

                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        I'd Proof <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="id"
                        placeholder="Enter drive link of I'd"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>

                <label >
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        I'd Number <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="number"
                        placeholder="Enter I'd Number"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                
                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Landline Number <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="number"
                        placeholder="Enter Landline Number"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Disaster Type <sup className="text-pink-200">*</sup>
                    </p>
                    <div>
                        <input
                            required
                            type="checkbox"
                            name="disaster"
                            placeholder="Enter Disaster Type"
                            
                        />
                        <span>Fire</span>
                    </div>
                    <div>
                        <input
                            required
                            type="checkbox"
                            name="disaster"
                            placeholder="Enter Disaster Type"
                            
                        />
                        <span>Earthquake</span>
                    </div>
                    <div>
                        <input
                            required
                            type="checkbox"
                            name="disaster"
                            placeholder="Enter Disaster Type"
                            
                        />
                        <span>Tsunami</span>
                    </div>
                    <div>
                        <input
                            required
                            type="checkbox"
                            name="disaster"
                            placeholder="Enter Disaster Type"
                            
                        />
                        <span>Landslide</span>
                    </div>
                    <div>
                        <input
                            required
                            type="checkbox"
                            name="disaster"
                            placeholder="Enter Disaster Type"
                            
                        />
                        <span>Borewell</span>
                    </div>
                    <div>
                    <span>Others</span>
                        <input
                            required
                            type="text"
                            name="disaster"
                            placeholder="Specify"
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </div>
                    
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                
                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Medical Aid <sup className="text-pink-200">*</sup>
                    </p>
                    
                    <div>
                        <input
                            required
                            type="radio"
                            name="medical"
                            placeholder="Enter Medical Aid"
                            
                        />
                        <span>Yes</span>
                    </div>
                    <div>
                        <input
                            required
                            type="radio"
                            name="medical"
                            placeholder="Enter Medical Aid"
                            
                        />
                        <span>No</span>
                    </div>
                    
                </label>

                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Survival Kit <sup className="text-pink-200">*</sup>
                    </p>
                    
                    <div>
                        <input
                            required
                            type="radio"
                            name="survival"
                            placeholder="Enter Survival Kit"
                            
                        />
                        <span>Yes</span>
                    </div>
                    <div>
                        <input
                            required
                            type="radio"
                            name="survival"
                            placeholder="Enter Survival Kit"
                            
                        />
                        <span>No</span>
                    </div>
                    
                </label>

                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>

            <div className="flex gap-x-4">
                <label className='relative'>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Create Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    required
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                <label className='relative'>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Confirm Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    required
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />    
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
           </div>
                <button
                    type="submit"
                    className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] mb-5 font-medium text-richblack-900"
                    >
                    Create Account
                </button>        
    </div>
  )
}

export default AgencyForm
import React, {useState} from 'react'

export default function Dial112() {
    const[show, setShow] = useState(false);

    const showButton= ()=>{
        if(show == true){
            setShow(false);
        }
        else{
            setShow(true);
        }
    }
    return (
        <div id='dial'>
        <div id='called' className='bg-red-700' onClick={showButton}><svg id="svg" class="h-8 w-8 text-red-500"  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
        {
           show && <div id='call' className='bg-gray-700'  >
            <div> <a href="tel:112" ><svg id="svg" class="h-8 w-8 text-red-500"  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            </div>
            <div className='dial' onClick={showButton}>
            <a href="tel:112">
                        <h5 className="pt-1"> Dial 112</h5>
            </a>
                    </div>
            </div>
        }
        </div>
    )
}

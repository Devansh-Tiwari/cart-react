import React from 'react'

export default function Footer(props) {
  return (
    <div >
        <div className="row fixed-bottom ">
            <button className='btn btn-danger col-2 ' onClick={() => {props.resetquant()}}>Reset </button>
            <div className='col-8 bg-dark text-white text-center'>
                {props.amt}
            </div>
            <button className='btn btn-primary col-2'>Pay Now</button>

        </div>
    </div>
  )
}
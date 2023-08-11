import React from 'react'
import './index.css'

const Navbar = () => {

    return(
        <div className='container-fluid d-flex heght-50px align-items-center bg-warning'>
            
          <div className='container d-flex justify-content-between p-3'>
            <a href="" className='ancor-tag'>logo</a>
                <ul className='d-flex m-0 p-0 gap-5 align-items-center'>
                    <li className='list-none'>
                        <a href="" className='ancor-tag'>Home</a>
                    </li>
                    <li className='list-none'>
                        <a href="" className='ancor-tag'>Home</a>
                    </li>
                    <li className='list-none'>
                        <a href="" className='ancor-tag'>Home</a>
                    </li>
                     <li className='list-none'>
                        <a href="" className='ancor-tag'>Home</a>
                    </li>
                    <button type="button" class="btn btn-primary">Primary</button>
                    



                </ul>

            </div>
        </div>
    )
}

export default Navbar
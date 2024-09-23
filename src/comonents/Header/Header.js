import { React } from 'react';
import "./Header.css";
import reportWebVitals from './../../reportWebVitals';


function Header(){
    return(
        <header>
            <container>
            <div className='row ms-5'>
               <div className= "col-md-6">
                    <h2>Good food choices are good investments.</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button className='mt-5'>order now</button>
                    <button className='mt-5'>learn more</button>
                </div>
                <div className= "col-md-6"></div>
                </div>
            </container>
        </header>
    );
}
export default Header;
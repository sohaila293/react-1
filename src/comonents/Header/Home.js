import { React } from 'react';
import Header from "../Header/Header";
import "./Home.css";
import one from "../../images/1.png";
import two from "../../images/2.png";
import Data from "../../../src/Data";
import Carousel from 'react-bootstrap/Carousel';
import first from "../../images/1.jpg";
import second from "../../images/2.jpg";
import third from "../../images/3.jpeg";

function Home(){
    const blogitem = Data.map((item)=>{
        return(
            <div className='col-md-4'>
               <div className='box'>
               <img src ={item.img} />
               <h5> {item.title}</h5>
               <span> {item.time}</span>
                <h6>{item.price}</h6>
               </div>
               <button><a href='#'>order now</a></button>
            </div>
        )
    })
    return(
       <> 
       <Header />
       <section className='numbers'>
       <div className='cointainer'>
            <div className='row'>
                <div className= "col-md-3">
                    <h2>1287+</h2>
                    <h6>Savings</h6>
                </div>
                <div className= "col-md-3">
                <h2>5786+</h2>
                <h6>Photos</h6>
                </div>
                <div className= "col-md-3">
                <h2>1440+</h2>
                <h6>Rockets</h6>
                </div>
                <div className= "col-md-3">
                <h2>7110+</h2>
                <h6>Globes</h6>
                </div>
            </div>
           </div>
       </section>
       <section className='pride'>
       <div className='container'>
            <div className='row'>
                <div className= "col-md-6">
                    <img src = {one} alt='one'/>
                </div>
                <div className= "col-md-6 mt-5">
                    <h2>We pride ourselves on making real food from the best ingredients.
                    </h2>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button><a href='#'>Learn More</a></button>
                </div>
            </div>
            </div>
       </section>
       <section className='ingradients'>
        <div className='container'>
            < div className='row'>
                <div className="col-6">
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    <ul>
                        <li>Etiam sed dolor ac diam volutpat.</li>
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <li>purus a odio finibus bibendum.</li>
                    </ul>
                    <button><a href='#'>Learn More</a></button>
                </div>
                <div className="col-6">
                    <img src={two} alt='ingradients'/>
                </div>
            </div>
            </div>
       </section>
       <section className='paralex'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>When a man's stomach is full it makes no<br/>
                    difference whether he is rich or poor.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href='#'> Watch Our Story</a>
                </div>
            </div>
        </div>
       </section >
       <section className='blogs'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>

                </div>
            </div>
            <div className='row'>
            {blogitem}
            </div>
        </div>
       </section>
       <section className='sliderx'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>Testimonials</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
       <Carousel>
      <Carousel.Item>
        <img src ={first}/>
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <span>Maccy Doe - Front End</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src ={second}/>
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>Jonthnthan - UX Designer</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
          </div>
        </div>
       </section>
       <section className='asking'>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-12 col-md-12'>
            <h2>Frequently Asked Questions</h2>
        </div>
        </div>
            <div className='row'>
                <div className='col-lg-6 col-md-6'>
                    <h5>~ Is Foodera Bread really baked fresh each day?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <h5>~ Do you bake breads containing animal fats or products?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
            </div>
        </div>
       </section>
       </>
    );
}
export default Home;
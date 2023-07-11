import React from 'react';
import './Card.css';
import Button from './sub-component/Button';
import Hash from './sub-component/Hash';


const Card = () => {
  return (  

           <div class="row">
                <div class="col-md-3 ">
                    <div class="card">
                       <div>
                        <Hash />
                       </div>
                        <div class="card-body">
                            <h5 class="card-title">1.5 miles away from joblocation.</h5>
                            <div className='Button_div'>
                            <p class="card-text">Singles: $120 <br />Doubles: $145 </p>
                            <Button />
                            </div>
                        </div>
                    </div>
                </div>
              
                <div class="col-md-3 ">
                    <div class="card">
                        <div>
                        <Hash />
                       </div>

                       <div class="card-body">
                            <h5 class="card-title">1.5 miles away from joblocation.</h5>
                            <div className='Button_div'>
                            <p class="card-text">Singles: $120 <br />Doubles: $145 </p>
                            <Button />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 ">
                    <div class="card">
                    <div>
                        <Hash />
                       </div>
                       <div class="card-body">
                            <h5 class="card-title">1.5 miles away from joblocation.</h5>
                            <div className='Button_div'>
                            <p class="card-text">Singles: $120 <br />Doubles: $145 </p>
                            <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
  )
}

export default Card;

import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
  
        <div className='containerr'>
                <div className='child_div'>
                    <h3>St Judes Hospital <br />
                    <p className='para_main'>SarasotaFL 56789</p></h3>
                </div>

                <div className='child_div2'>
                    <div>
                      <h3>10  <p className='para_main'>Octuber</p> </h3>
                    </div>
                    <div>
                      <h3> - </h3>
                    </div>  
                    <div>
                      <h3>17 <p className='para_main'>December</p></h3>
                    </div> 
                </div>

                <div className='child_div3'>
                      <h3>20Rooms  <p className='para_main' >10 Singles , 10 Doubles</p></h3>
                </div>
        </div>
 
  )
}

export default Menu;

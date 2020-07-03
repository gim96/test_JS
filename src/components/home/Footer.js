import React, { Component } from 'react';



export default class Footer extends Component {
  

  render() {
                                                                                                                                                                                             

    return (
          <div>

        <br></br>
       <center> 
         <table align="center" width='50%' >
          <tr>
            <td align='center'>  Last Update : {this.props.timeStamp}    </td>
          </tr>
          <tr>
            <td align='center'>Source :<a href='https://arimaclanka.com/'> www.arimac.com</a>  </td>
           
          </tr>
          <tr>
          <td align='center'>Developer : Gim kelum  </td>
          </tr>
        </table></center>
     
      
      
       

       
      </div>
     
       
        
       
        
       
       
            


        
    
    );
  }
}
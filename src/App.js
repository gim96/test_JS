import React, {Component} from 'react';
import Myapp from './components/home/Myapp';
import Local from './components/home/Local';
import LocalDetails from './components/home/LocalDetails';
import Hospital from './components/home/Hospital';
import TimeLine from './components/home/TimeLine';
import Footer from './components/home/Footer';





class App extends Component{


  
  render(){
    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">COVID-19 Dashboard</a>
  </div>
</nav>
      <br></br>
      <br></br>
      <br></br>
      <table align="center" cellPadding="5" width='70%'>
       
        <tr>
        <td><Myapp /></td>
      
        
       
       
        </tr>  
          <tr>
          <td><Local /></td>
          </tr>
          <tr>
          <td><LocalDetails /></td>
          </tr>
          <tr>
          <td><TimeLine /></td>
          </tr>
          <tr>
          <td><Hospital /></td>
          
          </tr>
        <tr>
        <td><Footer /></td>
        </tr>
      </table>
      <br></br>
     
     
      </>
     
    );

  }

}

export default App;

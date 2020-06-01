import React, {Component} from 'react';
import Myapp from './components/home/Myapp';
import Local from './components/home/Local';
import Hospital from './components/home/Hospital';
import TimeLine from './components/home/TimeLine';
import Footer from './components/home/Footer';
//import Ex from './components/home/Ex';




class App extends Component{

  state = {
    loading: true,
    person: null,
    
  };

  async componentDidMount() {
    const url = "https://www.hpb.health.gov.lk/api/get-current-statistical";
    const response = await fetch(url);
    const data = await response.json();
  //  const obj=JSON.parse(data);
   // const arr=[];
  
    this.setState({ person: data, loading: false });
   // console.log(person);

  
  }
  
  render(){
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a href='http://localhost:3000' class="navbar-brand">COVID-19 Dashboard</a>
  </div>
</nav>
      
      <br></br>
      <br></br>

     
      <table align="center" cellPadding="5" width='90%' >
       
       <tr>
      
       </tr>
        <tr>
       
        <td width='50%' >
          <Myapp 

       newCases_g= {this.state.person.data.global_new_cases}
       totCases_g=  {this.state.person.data.global_total_cases}
       deathCases_g=  {this.state.person.data.global_deaths}
       recCases_g=  {this.state.person.data.global_recovered}
   
        />
        </td>
        <td width='50%'>
          <Local

            newCases_l={this.state.person.data.local_new_cases}
            totCases_l={this.state.person.data.local_total_cases}
            deathCases_l={this.state.person.data.local_deaths}
            recCases_l={this.state.person.data.local_recovered}
          
          />
        
        </td>
        
         
       
        </tr>  
          <tr>
         
          </tr>
          <tr>
        
          </tr>
          <tr>
          <td colSpan='2'>
            <TimeLine  />
          </td>
          </tr>

          <tr>
          <td colSpan='2'><Hospital /></td>
          </tr>
         
        <tr>
        <td colSpan='2'>
          <Footer 
        
        timeStamp={this.state.person.data.update_date_time}
        
        />
        </td>
        </tr>
      </table>

      <br></br>
     
     
      </>
     
    );

  }

}

export default App;

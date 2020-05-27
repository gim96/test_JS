import React from "react";
import ChartLocal from './ChartLocal';
import ChartLineLocal from './ChartLineLocal';

export default class Local extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://www.hpb.health.gov.lk/api/get-current-statistical";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
   // console.log(person);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div class="card">
        <div align="center" class="card-header">Local</div>
        <br></br>
        <br></br>
        <table align='center' cellPadding='5' width='50%'>
          <tr>
            <td width='25%'>
            <div class="card text-white bg-secondary mb-3">
           <div class="card-header" align='center'>New</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.local_new_cases}</h5>
           </div>
           </div>
            </td>
            <td width='25%'>
            <div class="card bg-light mb-3" >
           <div class="card-header" align='center'> Confirmed</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.local_total_cases}</h5>
           </div>
           </div>
            </td>
            <td width='25%'>
            <div class="card bg-light mb-3">
           <div class="card-header" align='center'> Deaths</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.local_deaths}</h5>
           </div>
           </div>
           </td>
           <td width='25%'>
           <div class="card bg-light mb-3">
           <div class="card-header" align='center'> Recovered</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.local_recovered}</h5>
           </div>
           </div>
           </td>
          </tr>
        </table>
        
        <table align='center' width='60%'>
          <tr>
            <td>
            <ChartLineLocal 

l_newCases={this.state.person.data.local_new_cases} 
l_totCases={this.state.person.data.local_total_cases} 
l_death={this.state.person.data.local_deaths} 
l_rec={this.state.person.data.local_recovered} 

  />
            </td>
          </tr>
        </table>
       
      
        <ChartLocal 

            l_newCases={this.state.person.data.local_new_cases} 
            l_totCases={this.state.person.data.local_total_cases} 
            l_death={this.state.person.data.local_deaths} 
            l_rec={this.state.person.data.local_recovered} 
        
        />
      </div>
    );
  }
}
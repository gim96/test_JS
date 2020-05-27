import React, { Component } from 'react';

import Chart from './Chart';
import ChartLine from './ChartLine';

export default class Myapp extends Component {
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
        <div align="center" class="card-header">Global</div>
        <br></br>
        <br></br>
       
        <table align='center' width='60%' cellPadding='5'>
          <tr>
            <td align='left'>
            
           <div class="card text-white bg-secondary mb-3">
           <div class="card-header" align='center'>New </div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.global_new_cases}</h5>
           </div>
           </div>
              </td>
            <td align='left'>
            <div class="card bg-light mb-3">
           <div class="card-header" align='center'> Confirmed</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.global_total_cases}</h5>
           </div>
           </div>

            </td>
            <td>
            <div class="card bg-light mb-3">
           <div class="card-header" align='center'>Deaths</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.global_deaths}</h5>
           </div>
           </div>
            </td>
            <td>
            <div class="card bg-light mb-3">
           <div class="card-header" align='center'>Recovered</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.global_recovered}</h5>
           </div>
           </div>
            </td>
          </tr>
       
        </table>
        <br></br>
        <table align='center' width='60%'>
          <tr>
            <td>
            <ChartLine

          g_newCases={this.state.person.data.global_new_cases} 
          g_totCases={this.state.person.data.global_total_cases} 
          g_death={this.state.person.data.global_deaths}    
          g_rec={this.state.person.data.global_recovered} 

          />
            </td>
          </tr>
        </table>
       
         <br></br>
         <center>Currunt Situation</center>
        <Chart 
          

          g_newCases={this.state.person.data.global_new_cases} 
          g_totCases={this.state.person.data.global_total_cases} 
          g_death={this.state.person.data.global_deaths} 
          g_rec={this.state.person.data.global_recovered} 

        />

        
      </div>
    );
  }
}
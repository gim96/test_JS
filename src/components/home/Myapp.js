import React, { Component } from 'react';

import Chart from './Chart';
import ChartLine from './ChartLine';

export default class Myapp extends Component {
  
  render() {
                                                                                                                                                                                                 

    return (
      <div class="card">
        <div align="center" class="card-header"><h5>Global</h5></div>
        <br></br>
        <br></br>
      
        <table align='center' width='80%' cellPadding='5'>
          <tr>
            <td align='left'>
            
           <div class="card text-white bg-secondary mb-3">
           <div class="card-header" align='center'>New </div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.props.newCases_g}</h5>
           </div>
           </div>
              </td>
            <td align='left'>
            <div class="card bg-light mb-3">
           <div class="card-header" align='center'> Confirmed</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.props.totCases_g}</h5>
           </div>
           </div>

            </td>
            <td>
            <div class="card bg-light mb-3">
           <div class="card-header" align='center'>Deaths</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.props.deathCases_g}</h5>
           </div>
           </div>
            </td>
            <td>
            <div class="card bg-light mb-3">
           <div class="card-header" align='center'>Recovered</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.props.recCases_g}</h5>
           </div>
           </div>
            </td>
          </tr>
       
        </table>

        <hr></hr>
        <br></br>
        
        <table align='center' width='80%'>
          <tr>
            <td>
            <ChartLine

          g_newCases={this.props.newCases_g}
          g_totCases={this.props.totCases_g}
          g_death={this.props.deathCases_g}
          g_rec={this.props.recCases_g}
          />
            </td>
          </tr>
        </table>
       
         <br></br>
         <hr></hr>
         
        <Chart 
          
          

          g_newCases={this.props.newCases_g}
          g_totCases={this.props.totCases_g}
          g_death={this.props.deathCases_g}
          g_rec={this.props.recCases_g}

        />
        <br></br>
        <br></br>
        
      </div>
    );
  }
}
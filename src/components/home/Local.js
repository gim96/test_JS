import React from "react";
import ChartLocal from './ChartLocal';
import ChartLineLocal from './ChartLineLocal';

export default class Local extends React.Component {

  
  render() {
  

    return (
      <div class="card">
        <div align="center" class="card-header"><h5>Local</h5></div>
        <br></br>
        <br></br>
        <table align='center' cellPadding='5' width='80%'>
          <tr>
            <td width='25%'>
            <div class="card text-white bg-secondary mb-3">
           <div class="card-header" align='center'>New</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.props.newCases_l}</h5>
           </div>
           </div>
            </td>
            <td width='25%'>
            <div class="card bg-light mb-3" >
           <div class="card-header" align='center'> Confirmed</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.props.totCases_l}</h5>
           </div>
           </div>
            </td>
            <td width='25%'>
            <div class="card bg-light mb-3">
           <div class="card-header" align='center'> Deaths</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.props.deathCases_l}</h5>
           </div>
           </div>
           </td>
           <td width='25%'>
           <div class="card bg-light mb-3">
           <div class="card-header" align='center'> Recovered</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.props.recCases_l}</h5>
           </div>
           </div>
           </td>
          </tr>
        </table>
        
       
        <hr></hr>
        <br></br>
        <table align='center' width='80%'>
          <tr>
            <td >
            <ChartLineLocal 

l_newCases={this.props.newCases_l}
l_totCases={this.props.totCases_l}
l_death={this.props.deathCases_l}
l_rec={this.props.recCases_l}

  />
            </td>
          </tr>
        </table>
       
        <br></br>
        <hr></hr>
        
        <ChartLocal 

            l_newCases={this.props.newCases_l}
            l_totCases={this.props.totCases_l}
            l_death={this.props.deathCases_l}
            l_rec={this.props.recCases_l}
        
        />
        <br></br>
        <br></br>

      </div>
    );
  }
}
import React, { Component } from 'react';

import ChartTime from './ChartTime';


export default class TimeLine extends Component {
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
        <div align="center" class="card-header">Daliy Test</div>
        <br></br>
        <br></br>
        <table align="center" width='30%'>
            <tr>
                <td> <div class="card bg-light mb-3">
           <div class="card-header" align='center'> Total Testing Count</div>
           <div class="card-body">
          <h5 class="card-title" align='center'>{this.state.person.data.total_pcr_testing_count}</h5>
           </div>
           </div></td>
            </tr>
        </table>
       
        
             
        <br></br>
        
         <ChartTime 
         
           pcr_data={this.state.person.data.daily_pcr_testing_data}
         
         
         />
         <br></br>
         <br></br>
      

        
      </div>
    );
  }
}
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
         
           day_1={this.state.person.data.daily_pcr_testing_data[0].date}
           day_2={this.state.person.data.daily_pcr_testing_data[10].date}
           day_3={this.state.person.data.daily_pcr_testing_data[20].date}
           day_4={this.state.person.data.daily_pcr_testing_data[30].date}
           day_5={this.state.person.data.daily_pcr_testing_data[40].date}
           day_6={this.state.person.data.daily_pcr_testing_data[50].date}
           day_7={this.state.person.data.daily_pcr_testing_data[60].date}
           day_8={this.state.person.data.daily_pcr_testing_data[70].date}
           day_9={this.state.person.data.daily_pcr_testing_data[80].date}
           day_10={this.state.person.data.daily_pcr_testing_data[90].date}
           day_11={this.state.person.data.daily_pcr_testing_data[98].date}
         
           count_1={this.state.person.data.daily_pcr_testing_data[0].count} 
           count_2={this.state.person.data.daily_pcr_testing_data[10].count} 
           count_3={this.state.person.data.daily_pcr_testing_data[20].count} 
           count_4={this.state.person.data.daily_pcr_testing_data[30].count} 
           count_5={this.state.person.data.daily_pcr_testing_data[40].count} 
           count_6={this.state.person.data.daily_pcr_testing_data[50].count} 
           count_7={this.state.person.data.daily_pcr_testing_data[60].count} 
           count_8={this.state.person.data.daily_pcr_testing_data[70].count} 
           count_9={this.state.person.data.daily_pcr_testing_data[80].count} 
           count_10={this.state.person.data.daily_pcr_testing_data[90].count} 
           count_11={this.state.person.data.daily_pcr_testing_data[98].count} 
         
         
         
         />
         <br></br>
         <br></br>
      

        
      </div>
    );
  }
}
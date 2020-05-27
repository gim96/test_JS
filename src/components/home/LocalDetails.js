import React from 'react';

export default class LocalDeatils extends React.Component {
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
          
        <div align="center" class="card-header">Local Details</div>
        <table class="table table-bordered" >
          <tr>
            <td>Cumulative local</td>
            <td>{this.state.person.data.hospital_data[0].cumulative_local}</td>
          </tr>
          <tr>
            <td>Cumulative foreign</td>
            <td>{this.state.person.data.hospital_data[0].cumulative_foreign}</td>
          </tr>
          <tr>
            <td>Cumulative Treatment Local</td>
            <td>{this.state.person.data.hospital_data[0].treatment_local}</td>
          </tr>
          <tr>
            <td>Cumulative Treatment foreign</td>
            <td>{this.state.person.data.hospital_data[0].treatment_foreign}</td>
          </tr>
          <tr>
            <td>Cumulative Treatment Total</td>
            <td>{this.state.person.data.hospital_data[0].treatment_total}</td>
          </tr>
          
        </table>
        
       

      
        
      </div>
    );
  }
}
import React, { Component } from 'react';



export default class Footer extends Component {
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
     
        <div align='center' >
        <br></br>
        <br></br>
        
        Last Update : {this.state.person.data.update_date_time} <br></br>
        Source :<a href='https://arimaclanka.com/'> www.arimac.com</a>
        <br></br>
       

        </div>
        
       
        
       
       
            


        
    
    );
  }
}
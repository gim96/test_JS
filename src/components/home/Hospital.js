import React from "react";

export default class Hospital extends React.Component {
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
          
        <div align="center" class="card-header">Hospitals Details</div>
        <br></br>
        <table border='1' width='50%' align='center' class="table table-bordered" >
        <tr>
            <th scope="col"> No</th>
            <th scope="col"> Name</th>
            <th scope="col"> Cumulative Local</th>
            <th scope="col"> Cumulative Foreign</th>
            <th scope="col"> Treatment Local</th>
            <th scope="col"> Treatment Foreign</th>
        </tr>
        {
       
        this.state.person.data.hospital_data.map(book => (
        <tr>
            <td>{book.hospital.id} </td>
            <td>{book.hospital.name}  </td>
            <td>{book.cumulative_local}</td>
            <td>{book.cumulative_foreign}</td>
            <td>{book.treatment_local}</td>
            <td>{book.treatment_foreign}</td>
        </tr>
            
          
            
        ))
        }

        
        </table>
         
           
          
          
       
        <br></br>
     
      </div>
    );
  }
}
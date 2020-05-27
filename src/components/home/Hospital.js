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
          
        <div align="center" class="card-header">Names of Hospitals </div>

        <table align='center' cellPadding="5" class="table table-bordered" >
          
            <tr>
                <td>1. {this.state.person.data.hospital_data[0].hospital.name} </td>
                <td>19. {this.state.person.data.hospital_data[19].hospital.name} </td>
            </tr>
            <tr>
                <td>2. {this.state.person.data.hospital_data[1].hospital.name} </td>
                <td>20. {this.state.person.data.hospital_data[20].hospital.name} </td>
            </tr>
            <tr>
                <td>3. {this.state.person.data.hospital_data[2].hospital.name} </td>
                <td>21. {this.state.person.data.hospital_data[21].hospital.name} </td>
            </tr>
            <tr>
                <td>4. {this.state.person.data.hospital_data[3].hospital.name} </td>
                <td>22. {this.state.person.data.hospital_data[22].hospital.name} </td>
            </tr>
            <tr>
                <td>5. {this.state.person.data.hospital_data[4].hospital.name} </td>
                <td>23. {this.state.person.data.hospital_data[23].hospital.name} </td>
            </tr>
            <tr>
                <td>6. {this.state.person.data.hospital_data[5].hospital.name} </td>
                <td>24. {this.state.person.data.hospital_data[24].hospital.name} </td>
            </tr>
            <tr>
                <td>7. {this.state.person.data.hospital_data[6].hospital.name} </td>
                <td>25. {this.state.person.data.hospital_data[25].hospital.name} </td>
            </tr>
            <tr>
                <td>8. {this.state.person.data.hospital_data[7].hospital.name} </td>
                <td>26. {this.state.person.data.hospital_data[26].hospital.name} </td>
            </tr>
            <tr>
                <td>9. {this.state.person.data.hospital_data[8].hospital.name} </td>
                <td>27. {this.state.person.data.hospital_data[27].hospital.name} </td>
            </tr>
            <tr>
                <td>10. {this.state.person.data.hospital_data[9].hospital.name} </td>
                <td>28. {this.state.person.data.hospital_data[28].hospital.name} </td>
            </tr>
            <tr>
                <td>11. {this.state.person.data.hospital_data[10].hospital.name} </td>
                <td>29. {this.state.person.data.hospital_data[29].hospital.name} </td>
            </tr>
            <tr>
                <td>12. {this.state.person.data.hospital_data[11].hospital.name} </td>
                <td>30. {this.state.person.data.hospital_data[30].hospital.name} </td>
            </tr>
            <tr>
                <td>13. {this.state.person.data.hospital_data[12].hospital.name} </td>
                <td>31. {this.state.person.data.hospital_data[31].hospital.name} </td>
            </tr>
            <tr>
                <td>14. {this.state.person.data.hospital_data[13].hospital.name} </td>
                <td>32. {this.state.person.data.hospital_data[32].hospital.name} </td>
            </tr>
            <tr>
                <td>15. {this.state.person.data.hospital_data[14].hospital.name} </td>
                <td>33. {this.state.person.data.hospital_data[33].hospital.name} </td>
            </tr>
            <tr>
                <td>16. {this.state.person.data.hospital_data[15].hospital.name} </td>
                <td>34. {this.state.person.data.hospital_data[34].hospital.name} </td>
            </tr>
            <tr>
                <td>17. {this.state.person.data.hospital_data[16].hospital.name} </td>
                <td>35. {this.state.person.data.hospital_data[35].hospital.name} </td>
            </tr>
            <tr>
                <td>18. {this.state.person.data.hospital_data[17].hospital.name} </td>
                <td>36. {this.state.person.data.hospital_data[18].hospital.name} </td>
            </tr>
            <tr>
               
              
            </tr>
         
           
          
          
        </table>
        <br></br>
     
      </div>
    );
  }
}
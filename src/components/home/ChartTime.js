import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


export default class ChartTime extends Component{

    
    constructor(props){
        super(props);

       
        let pcr_datax = [];

        for (let i = 0; i < this.props.pcr_data.length; i += 10) {
          pcr_datax.push({
            date: this.props.pcr_data[i].date,
            count: this.props.pcr_data[i].count,
            backgroundColor: "rgb(214,212,228)",
          });
        }
      
        this.state = {

            charData:{

                labels: pcr_datax.map((data) => data.date),
                        

                    datasets:[
                        
                            {

                                label:'Active',
                                borderWidth: 1,
                                data: pcr_datax.map((data) => data.count),

                                backgroundColor: pcr_datax.map((data) => data.backgroundColor),

                            }
                   
                        ]   

                    }
        }

    }

    render(){

        return(

            <div>
                 
                 <table align='center' width='80%'>
                     <tr>
                         <td>
                         <Bar
            
                             data={this.state.charData}
                             width={100}
                                height={400}
                             options={{
                             maintainAspectRatio: false
                             }}
                         />
                         </td>
                     </tr>
                 </table>
                
              
             
            </div>
        );

    }
}

 
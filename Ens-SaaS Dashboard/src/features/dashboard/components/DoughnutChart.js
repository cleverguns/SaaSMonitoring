import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  // eslint-disable-next-line no-unused-vars
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';


ChartJS.register(ArcElement, Tooltip, Legend,
    Tooltip,
    Filler,
    Legend);

function DoughnutChart(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
      
      const labels = ['GWS', 'Zoom', 'Zendesk', 'JumpCloud', 'LinkedIn'];
      
      const data = {
        labels,
        datasets: [
            {
                label: '# Misconfigured',
                data: [122, 219, 30, 51, 82],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  
                ],
                borderWidth: 1,
              }
        ],
      };

    return(
        <TitleCard title={"Policies"}>  <div>Total Misconfigured Applications</div>
                <Doughnut options={options} data={data} />   
        </TitleCard>

      
    )
}


export default DoughnutChart
import React from "react";
import {Bar} from 'react-chartjs-2';

const ChartComponent = ({playerOne, playerTwo}) => {

    return (
    <div id = 'bar-chart'>
        <Bar 
            data = {{
                labels: ['Player 1', 'Player 2'],
                datasets: [
                    {
                        label: 'Number of Wins',
                        data: [10, 7],
                        backgroundColor: [
                            'rgb(255,0,0, 0.5)',
                            'rgb(255,255,0, 0.5)'
                        ] ,
                        borderColor: [
                            'red',
                            'yellow'
                        ],
                        borderWidth : 2
                    }
                ]
            }}
            height={100}
            width={100}
            options = {{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {ticks: {beginAtZero: true}}
                    ]
                }
            }}
        />
    </div>
)
}

export default ChartComponent

// type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
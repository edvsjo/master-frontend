import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

function SupportedVersions({year, month}) {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState({});
    const [data, setData] = useState([]);

    fetch(`http://localhost:3001/monthlyScan/${year}/${month}`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log("DATA");
        console.log(data);
        console.log(Object.keys(data));
        setChartData({
            labels: Object.keys(data),
            datasets: [
                {
                    label: "Support Versions of TLS",
                    data: Object.values(data),
                    backgroundColor: "rgba(75,192,192,1)",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 2,
                },
            ],
        });
        setLoading(false);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
    console.log(data.keys()); 

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Support Versions of TLS</h2>
            {console.log("HELLO")}
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    title: { text: "Support Versions of TLS", display: true },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    );
};

export default SupportedVersions;

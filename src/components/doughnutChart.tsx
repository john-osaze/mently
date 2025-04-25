import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    TooltipItem
} from 'chart.js';

// Register the required Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<'doughnut'> | null>(null);

    // Sample data for the doughnut chart
    const data: ChartData<'doughnut'> = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 19, 3, 5, 2],
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
            },
        ],
    };

    // Chart configuration options
    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Data Distribution',
                font: {
                    size: 16,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context: TooltipItem<'doughnut'>) {
                        const label = context.label || '';
                        const value = context.raw as number || 0;
                        const dataset = context.chart.data.datasets[0];
                        const total = (dataset.data as number[]).reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${label}: ${value} (${percentage}%)`;
                    }
                }
            }
        },
        cutout: '60%', // Controls the size of the hole in the middle
    };

    useEffect(() => {
        // Clear any existing chart
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Create new chart
        if (chartRef.current) {
            chartInstance.current = new Chart(chartRef.current, {
                type: 'doughnut',
                data: data,
                options: options,
            });
        }

        // Cleanup on unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="relative">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-3xl font-bold">240</div>
                    <div className="text-gray-500 text-sm">Users</div>
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
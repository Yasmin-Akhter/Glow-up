import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div>
            <div className="chart-container">
                <div className="lineChart">
                    <LineChart width={400} height={300} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                        <XAxis dataKey="month"></XAxis>
                        <YAxis />
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>

                <div className="barCart">
                    <BarChart width={200} height={150} data={data}>
                        <Bar dataKey="sell" fill="#8884d8" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>

                </div>

                <div className="areaChart">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react'
import './Chart.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Legend } from 'chart.js';

function Chart({title, data, dataKey, grid}) {
    // const  data = [{
    //     month: "Jan",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // },
    // {
    //     month: "Feb",
    //     ActiveUser: 1000,
    //     pv: 3000,
    //     amt: 8000
    // },
    // {
    //     month: "Mar",
    //     ActiveUser: 2000,
    //     pv: 5000,
    //     amt: 1000
    // },
    // {
    //     month: "Apr",
    //     ActiveUser: 2000,
    //     pv: 5000,
    //     amt: 1000
    // },
    // {
    //     month: "May",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // },
    // {
    //     month: "June",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // },
    // {
    //     month: "July",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // },
    // {
    //     month: "Aug",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // },
    // {
    //     month: "Sep",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // },
    // {
    //     month: "Oct",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // },
    // {
    //     month: "Nov",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // },
    // {
    //     month: "Dec",
    //     ActiveUser: 4000,
    //     pv: 4000,
    //     amt: 3000
    // }]

    return (
        <div className="container chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="month" stroke="green"/>
                    <YAxis dataKey="amt" stroke="black"/>
                    <Line type="monotone" dataKey={dataKey} stroke="blue"></Line>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart

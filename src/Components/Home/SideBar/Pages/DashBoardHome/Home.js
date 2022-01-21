import React from 'react'
import './Home.css'
import Chart from '../../../visualization/Chart';
import FeaturedData from '../FeaturedData/FeaturedData';

function Home() {

    const data = [{
        month: "Jan",
        ActiveUser: 4000,
        pv: 4000,
        amt: 3000
    },
    {
        month: "Feb",
        ActiveUser: 1000,
        pv: 3000,
        amt: 8000
    },
    {
        month: "Mar",
        ActiveUser: 2000,
        pv: 4000,
        amt: 1000
    },
    {
        month: "Apr",
        ActiveUser: 2300,
        pv: 3000,
        amt: 1000
    },
    {
        month: "May",
        ActiveUser: 1000,
        pv: 1000,
        amt: 2000
    },
    {
        month: "June",
        ActiveUser: 3000,
        pv: 3000,
        amt: 3000
    },
    {
        month: "July",
        ActiveUser: 2100,
        pv: 4000,
        amt: 3000
    },
    {
        month: "Aug",
        ActiveUser: 1500,
        pv: 4000,
        amt: 3000
    },
    {
        month: "Sep",
        ActiveUser: 500,
        pv: 4000,
        amt: 3000
    },
    {
        month: "Oct",
        ActiveUser: 4000,
        pv: 4000,
        amt: 3000
    },
    {
        month: "Nov",
        ActiveUser: 4000,
        pv: 4000,
        amt: 3000
    },
    {
        month: "Dec",
        ActiveUser: 4000,
        pv: 4000,
        amt: 3000
    }]

    return (
        <div>
            <FeaturedData />
            <Chart data={data} title="User Analytics" dataKey="ActiveUser" grid />
        </div>
    )
}

export default Home

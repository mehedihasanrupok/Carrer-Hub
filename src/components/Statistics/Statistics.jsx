import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const Statistics = () => {
    const data = [
        {
            name: 'Assignment 1',
            Number: 49,
            
        },
        {
            name: 'Assignment 2',
            Number: 60,
            
        },
        {
            name: 'Assignment 3',
            Number: 60,
           
        },
        {
            name: 'Assignment 4',
            Number: 60,
            
        },
        {
            name: 'Assignment 5',
            Number: 60,
            
        }, {
            name: 'Assignment 6',
            Number: 53,
        },
        {
            name: 'Assignment 7',
            Number: 59,
        },
        {
            name: 'Assignment 8',
            Number: 30,
        },
    ];
    return (
        <div>
            <ComposedChart
                width={1400}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 10,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Number" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Number" stroke="green" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;
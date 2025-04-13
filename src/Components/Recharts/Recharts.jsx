import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { id: 101, math: 85, physics: 78, chemistry: 92 },
    { id: 102, math: 90, physics: 88, chemistry: 84 },
    { id: 103, math: 76, physics: 69, chemistry: 72 },
    { id: 104, math: 92, physics: 95, chemistry: 89 },
    { id: 105, math: 65, physics: 70, chemistry: 68 },
    { id: 106, math: 88, physics: 82, chemistry: 90 },
    { id: 107, math: 74, physics: 77, chemistry: 79 },
    { id: 108, math: 81, physics: 85, chemistry: 87 },
    { id: 109, math: 59, physics: 62, chemistry: 60 },
    { id: 110, math: 95, physics: 98, chemistry: 94 }
  ];
  
const Recharts = () => {
    return (
        <div>
            <LineChart width={600} height={600} data={data}>
                <Line dataKey={"math"}></Line>
                <Line dataKey={"physics"} stroke="red"></Line>
                <Tooltip></Tooltip>
                <XAxis dataKey={"id"}></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default Recharts;
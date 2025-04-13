import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Axios = ({axiosPromise }) => {
    const useAxios = use(axiosPromise )
    console.log (useAxios.data);
    
    // data processing for the chart
    const dataProcessing = useAxios.data.map(studentData =>{
        const mainData ={
            id: studentData.id,
            name: studentData.name,
            math: studentData.math,
            physics : studentData.physics,
            chemistry : studentData.chemistry
        }

        const avg =(studentData.math + studentData.physics + studentData.chemistry)/3;
        mainData.avg = avg;

        return mainData;
    })
    console.log(dataProcessing)

    
    return (
        <div>
            <BarChart width={600} height={600} data={dataProcessing}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={"name"} fill='green'></Bar>
                <Bar dataKey={"math"} fill='blue'></Bar>
                <Bar dataKey={"physics"} fill='red'></Bar>
                <Bar dataKey={"chemistry"} fill='yellow'></Bar>
            </BarChart>
        </div>
    );
};

export default Axios;
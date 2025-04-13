import React, { use } from 'react';

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
            
        </div>
    );
};

export default Axios;
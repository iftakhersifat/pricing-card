import React, { use } from 'react';

const Axios = ({axiosPromise }) => {
    const useAxios = use(axiosPromise )
    console.log (useAxios.data)
    return (
        <div>
            
        </div>
    );
};

export default Axios;
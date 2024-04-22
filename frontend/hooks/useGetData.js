import { useState, useEffect } from "react";

const useGetData = (url) => {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
        
            //setDomain('google.com');
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data);
            })
            .catch(err => {
                console.error(err);
                setData({message: 'request error'});
            });
       
    },[url]);

    return [ data ];
}

export default useGetData;
import {useState, useEffect} from "react"

const useLocalStorage = (key, initialValue) => {

    const [currentValue, setCurrentValue] = useState(initialValue);
    useEffect(() => {
        const getValue = JSON.parse(localStorage.getItem(key));
        
        if (getValue === null) {
            localStorage.setItem(key, JSON.stringify(currentValue));
        } else {
            setCurrentValue(getValue);
        }
    }, [])
    
    const updateStorage = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setCurrentValue(value);
    }
    
    return [currentValue, updateStorage];

}

export default useLocalStorage
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useGeceModu = (value) => {
    const [localvar, setLocalvar] = useLocalStorage('mode', value);
    return [localvar, setLocalvar];
}
export default useGeceModu;
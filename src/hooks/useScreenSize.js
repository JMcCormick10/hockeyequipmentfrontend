import React, {useState, useEffect} from "react";
import { BREAKPOINTS } from "utilities/constants/Constants";

const useScreenSize = () => {
    const isWindowClient = typeof window === "object";
    const [windowSize, setWindowSize] = useState(isWindowClient ? _determineScreenSize(window.innerWidth) : undefined);

    useEffect(() => {
        const setSize = () => {
            setWindowSize(_determineScreenSize(window.innerWidth));
        }
        if(isWindowClient){
            window.addEventListener("resize", setSize);
        }

        //un-register listener.
        return () => window.removeEventListener("resize", setSize);

    }, [isWindowClient, setWindowSize]);

    return windowSize;

};

const _determineScreenSize = (width) => {
    let size;
    
    if(width >= BREAKPOINTS.xlarge){
        size = 'xlarge';
    }
    else if(width >= BREAKPOINTS.large){
        size = 'large';
    }
    else if(width >= BREAKPOINTS.medium){
        size = 'medium';

    }
    else if(width >= BREAKPOINTS.small){
        size = 'small';
    }
    else{
        size = 'mobile';
    }    
    return size;
}

export default useScreenSize;
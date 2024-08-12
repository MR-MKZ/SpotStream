const timeConverter = (ms: number): string => {  
    const totalSeconds = Math.floor(ms / 1000);  
    const hours = Math.floor(totalSeconds / 3600);  
    const minutes = Math.floor((totalSeconds % 3600) / 60);  
    const seconds = totalSeconds % 60;  

    if (hours > 0) {  
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;  
    } else {  
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;  
    }  
}

export default timeConverter;
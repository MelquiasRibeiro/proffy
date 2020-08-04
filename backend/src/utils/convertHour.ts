export default function convertHour(time:string){

    const[hour, minutes]= time.split(':').map(Number)
    const timeInMnutes =hour *60 + minutes;
    
    return timeInMnutes;
}
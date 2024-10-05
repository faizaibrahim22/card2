
const Card=(props:any)=>{
    return(
        
        <div className=" bg-slate-300 m-14 w-29 h-30 pt-4 rounded-lg text-red-950 text-balance">
            <h1>Name:{props.Name}</h1>
            <h1>Age:{props.Age}</h1>
            <h1>Distance Learning:{props.DistanceLearning}</h1>
            <h1>Rollno:{props.Rollno}</h1>
            <h1>City:{props.City}</h1>
            <h1>Day:{props.Day}</h1>
            <h1>Center:{props.Center}</h1>
            <h1>Campus:{props.Campus}</h1>
            <h1>Batch:{props.Batch}</h1>
    
     </div>
     
    )
}
export default Card
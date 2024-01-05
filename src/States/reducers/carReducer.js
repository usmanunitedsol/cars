
const initialState=[
    {
    Category:"",
    car:"",
    color:"",
    make:"",
    model:"",
    registration_num:"",
    carid:"",
    }
]

const carreducer=(cars=initialState,action)=>{

    console.log(action.success)
    

    if (action.type==='CAR_SUCCESS')
    {
        
        console.log("payload",action.payload)
        const carsArray = action.payload.cars;
        carsArray.map((car)=>{
            cars =  [{
                ...cars,
                Category:car.Category,
                car:action.payload.car,
                color:action.payload.color,
                make:action.payload.make,
                model:action.payload.model,
                registration_num:action.payload.registration_num,
                carid:action.payload._id,
                error:null,
            }]
            
        })
        console.log('redux car:', {
            cars
        });

        return cars  
        }
    else{
        return cars;
    }
}

export default   carreducer;
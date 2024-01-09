
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
                car:car.car,
                color:car.color,
                make:car.make,
                model:car.model,
                registration_num:car.registration_num,
                carid:car._id,
                error:null,
            }
            ]
            
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
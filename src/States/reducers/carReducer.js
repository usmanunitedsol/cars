
const initialState=[
    {
    Category:"",
    car:"",
    color:"",
    make:"",
    model:"",
    registration_num:"",
    carid:"",
    user:"",
    }
]

const carreducer=(cars=initialState,action)=>{

    console.log(action.success)
    

    if (action.type==='CAR_SUCCESS')
    {
        
        console.log("payload",action.payload)
        const carsArray = action.payload;
        const updatearray= carsArray.map((car)=>({         
                category:car.category,
                car:car.car,
                color:car.color,
                make:car.make,
                model:car.model,
                registration_num:car.registration_num,
                carid:car._id,
                user:car.user,
                error:null,
        }))
        console.log('redux car:', {
            updatearray
        });

        return updatearray  
        }
        
    else if(action.type=='logoutuser')
    {
        cars =  initialState
   
        return cars   
    }
    else{
        return cars;
    }
}

export default   carreducer;
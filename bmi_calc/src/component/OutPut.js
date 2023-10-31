export default function OutPut(props){
    return(
        <>
        <div className='center'>
            <h3>You BMI is : {props.bmi}</h3>
            <p>{props.message}</p>
          </div>
        </>
    )
}
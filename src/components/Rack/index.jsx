import './styles.css'


export function Rack(props){
    return (
                   
        <div className='firstrack'>
                <div className='rack'>
                    <p><strong>{props.name}</strong></p>
                    <small>R$ {props.value}</small>
                    <small>{props.amount}x</small>
                    <small>R$ {props.total}</small>                                           
                </div>    
                                      
        </div>
    )
}
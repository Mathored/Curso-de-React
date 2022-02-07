import React from 'react'

export default function ItemCount() {
    const [stock, setStock] = React.useState(5);
    const [chosen, setChosen] = React.useState(0);
 
    return (
        <div className='stockBox'>
            <div>
                <p>Stock: {stock <= 0 ? stock == 0 : stock}</p>
                
            </div>
            <div className="count">
                <button onClick={()=> {
                        setStock(stock - 1 );
                        setChosen( chosen + 1);

                }}>+</button>
                <p>{chosen < 0 ? chosen == 0 : chosen}</p>
                <button onClick={()=>{
                        setStock(stock + 1);
                        setChosen(chosen-1);

                }}>-</button>
            </div> 
        </div>
    )
}


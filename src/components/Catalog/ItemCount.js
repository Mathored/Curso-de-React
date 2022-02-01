import React from 'react'

export default function ItemCount() {
    const [stock, setStock] = React.useState(5);
    const [chosen, setChosen] = React.useState(0);
    
    const NoNeg = () => {
        if (stock <= 0) {
            setStock(0);
        }
        if (chosen <= 0) {
            setChosen(0);
        }
    } //No entiendo por qué da error esta función//
    
    return (
        <div className='stockBox'>
            <div>
                <p>Stock: {stock}</p>
            </div>
            <div className="count">
                <button onClick={()=> {
                        setStock(stock - 1 );
                        setChosen( chosen + 1);

                }}>+</button>
                <p>{chosen}</p>
                <button onClick={()=>{
                        setStock(stock + 1);
                        setChosen(chosen-1);

                }}>-</button>
            </div> 
        </div>
    )
}


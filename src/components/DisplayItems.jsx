import SimgleItem from "./SimgleItem"

const DisplayItems = ({ subs, eliminarItem, editarItem }) => {
    return (
        <>
            <h2>Suscripciones</h2>
            {
                subs.map(item => (
                    <SimgleItem 
                        key={item.id}
                        id={item.id} 
                        price={item.price} 
                        type={item.type}
                        eliminarItem={eliminarItem}
                        editarItem={editarItem}
                        />
                ))
            }
        </>
    ) 
}

export default DisplayItems
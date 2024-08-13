import { moneyFormat } from "../helpers";

const SimgleItem = ({ price, type, id, eliminarItem }) => {

    //Le pasamos un evento e.preventDefault() para que evite recargar
    const HandleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Borrar Suscripcion a ${type}`);
        if (answer){
            eliminarItem(id);
        }
    }

    const HandleEdit = e => {
        e.preventDefault();
        editItem(id);
    }

    const urlImage = `/src/images/${type}.png`;
    return (
        <div className="single-item">
            <img src={ urlImage } alt="Services" />
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" className="delete" onClick={HandleDelete}>Borrar</a>
            <a href="" className="edit" onClick={HandleEdit}>Editar</a>
        </div>
    )
}

export default SimgleItem;
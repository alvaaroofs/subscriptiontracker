import { useEffect, useState } from "react";
import { moneyFormat } from "../helpers"

const Balance = ({ count, subs, spent, setSpent }) => {

    const updateBalance = () => {
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() => {
        updateBalance();
    }, [subs]);

    return (
        <div className="balance">
            <h3>💸 Presupuesto total: {moneyFormat(count)}</h3>
            <h3>🤑 Disponible: {moneyFormat(count - spent)}</h3>
            <h3>😢 Gastado: {moneyFormat(spent)}</h3>
        </div>
    )
}

export default Balance
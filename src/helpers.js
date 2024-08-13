export const moneyFormat = amount => {
    return amount.toLocaleString('es', {
        style: 'currency', 
        currency: 'EUR'
    })
}
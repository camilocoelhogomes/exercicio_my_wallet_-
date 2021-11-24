import * as repositories from "../repositories/repositories.js";

const getFinancialEventsSum = async ({id}) => {
    
    const events = await repositories.readFinancialEvents({id})
    const sum = events.rows.reduce((total, event) => event.type === 'INCOME' ? total + event.value : total - event.value, 0);

  return sum
}

export default getFinancialEventsSum;
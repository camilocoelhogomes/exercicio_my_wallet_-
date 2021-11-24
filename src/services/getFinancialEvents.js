import * as repositories from "../repositories/repositories.js"

const getFinancialEvents = async ({id}) => {
  const result = await repositories.readFinancialEvents({ id });
  return result
}

export default getFinancialEvents;
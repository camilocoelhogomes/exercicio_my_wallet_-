import * as repositories from '../repositories/repositories.js'

const financialEvents = async ({ id, value, type }) => {
    if (!value || !type) {
      return {error: 'invalid body'};
    }

    if (!['INCOME', 'OUTCOME'].includes(type)) {
      return {error: 'invalid body'};
    }

    if (value < 0) {
      return {error: 'invalid body'};
    }

  const result = await repositories.insertFinancialEvents({ id, value, type });
}

export default financialEvents;
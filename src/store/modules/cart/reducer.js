import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@@cart/ADD_TO_CART':
      return produce(state, draft => {
        const product = draft.findIndex(p => p.id === action.product.id);
        if (product >= 0) {
          draft[product].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case '@@cart/REMOVE_FROM_CART':
      return produce(state, draft => {
        const product = draft.findIndex(p => p.id === action.id);

        if (product >= 0) {
          draft.splice(product, 1);
        }
      });

    case '@@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const product = draft.findIndex(p => p.id === action.id);

        if (product >= 0) {
          draft[product].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}

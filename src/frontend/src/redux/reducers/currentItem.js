import { type as findCurrentItemType } from '../actions/findCurrentItem';
import items from '../../data/items';

const defaultState = [];
//encuentra el item actual por el atributo del id
function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
            return items.find(n => n.file === payload);
        }

        default:
            return state;
    }
}

export default reducer;

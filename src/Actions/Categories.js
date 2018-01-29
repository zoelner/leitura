import { RECEIVE_CATEGORIES } from "./ActionTypes";

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories: categories.categories
    }
}
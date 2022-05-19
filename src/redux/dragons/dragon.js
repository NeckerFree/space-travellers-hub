import showConnectionError from '../shared/error';
import * as API from '../shared/api';

// actions
const RECEIVE_DRAGONS = 'spacetraveler/dragons/RECEIVE_DRAGONS';

// reducer
export default function dragons(state = [], action) {
  switch (action.type) {
    // case ADD_BOOK:
    //   return [...state, {
    //     id: action.book.id,
    //     title: action.book.title,
    //     category: action.book.category,
    //     author: action.book.author,
    //     completion: action.book.completion,
    //   }];
    // case REMOVE_BOOK:
    //   return state.filter((book) => book.id !== action.id);
    // case TOGGLE_BOOK:
    //   return state.map((book) => {
    //     if (book.id !== action.id) {
    //       return book;
    //     }
    //     return { ...book, complete: !book.complete };
    //   });
    case RECEIVE_DRAGONS:
      return action.dragons;
    default:
      return state;
  }
}

// action creators
function receiveDragons(dragons) {
  return {
    type: RECEIVE_DRAGONS,
    dragons,
  };
}
// function removeBook(id) {
//   return {
//     type: REMOVE_BOOK,
//     id,
//   };
// }
// function toggleBook(id) {
//   return {
//     type: TOGGLE_BOOK,
//     id,
//   };
// }

// Thunk action creators
// export function handleAddBook(appid, bookobj) {
//   return (dispatch) => {
//     dispatch(addBook(bookobj));

//     return createBook(appid, bookobj)
//       .catch(() => {
//         showConnectionError();
//         dispatch(removeBook(bookobj.id));
//       });
//   };
// }

export function handleReceiveDragons(dragons) {
  return (dispatch) => API.getAllDragons(dragons)
    .then((dragons) => {
      const reserved = { reserved: false };
      const modifiedDragons = dragons.map((dragon) => {
        const modifiedDragon = { ...dragon, ...reserved };
        return modifiedDragon;
      });

      dispatch(receiveDragons(modifiedDragons));
    })
    .catch(() => {
      showConnectionError();
    });
}

import RECEIVE_DATA from '../shared/actions';
// import showConnectionError from '../shared/error';

// actions
const RESERVE_ROCKET = 'spacetraveler/rocket/RESERVE_ROCKET';
// const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
// const TOGGLE_BOOK = 'bookstore/books/TOGGLE_BOOK';

// reducer
export default function rockets(state = [], action) {
  switch (action.type) {
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    // case REMOVE_BOOK:
    //   return state.filter((book) => book.id !== action.id);
    // case TOGGLE_BOOK:
    //   return state.map((book) => {
    //     if (book.id !== action.id) {
    //       return book;
    //     }
    //     return { ...book, complete: !book.complete };
    //   });
    case RECEIVE_DATA:
      return action.rockets;
    default:
      return state;
  }
}

// action creators
function reserveRocket(id) {
  return {
    type: RESERVE_ROCKET,
    id,
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
export function handleReserveRocket(rocket) {
  return (dispatch) => {
    dispatch(reserveRocket(rocket.id));

    // return createBook(appid, bookobj)
    //   .catch(() => {
    //     showConnectionError();
    //     dispatch(removeBook(bookobj.id));
    //   });
  };
}

// export function handleDeleteBook(appid, book) {
//   return (dispatch) => {
//     dispatch(removeBook(book.id));

//     return deleteBook(appid, book)
//       .catch(() => {
//         showConnectionError();
//         dispatch(addBook(book));
//       });
//   };
// }

// export function handleToggleBook(id) {
//   return (dispatch) => {
//     dispatch(toggleBook(id));
//   };
// }

import RECEIVE_DATA from '../shared/actions';
// import showConnectionError from '../shared/error';

// actions
// const ADD_BOOK = 'bookstore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
// const TOGGLE_BOOK = 'bookstore/books/TOGGLE_BOOK';

// reducer
export default function missions(state = [], action) {
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
    case RECEIVE_DATA:
      return action.missions;
    default:
      return state;
  }
}

// action creators
// function addBook(book) {
//   return {
//     type: ADD_BOOK,
//     book,
//   };
// }
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

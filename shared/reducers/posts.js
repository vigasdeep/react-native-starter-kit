const initialState = [];

export default function postReducer(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case 'POSTS_REPLACE_ALL': {
      let posts = [];

      // Only add the properties we need
      if (data && typeof data === 'object') {
        posts = data.map(item => ({
          author: item.author || '',
          body: item.body || '',
          id: item.id || 0,
          image: item.image || '',
          title: item.title || '',
        }));
      }

      return posts;
    }

    default:
      return state;
  }
}

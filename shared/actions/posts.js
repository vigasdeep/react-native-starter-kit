import Api from '../lib/api';

/**
 * Fetch all posts
 */
const fetchPosts = () => (async (dispatch) => {
  try {
    const res = await Api.get('/v2/5c0a32b13500006c00a85fb3?mocky-delay=1000ms'); // Fetch
    dispatch({ ...res.data, type: 'POSTS_REPLACE_ALL' }); // Store
    return res.data.message || 'Success'; // Return success message to UI
  } catch (error) { throw error; }
});

export { fetchPosts };

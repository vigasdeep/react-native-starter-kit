import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPosts } from '../actions/posts';

class PostListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    fetchPosts: PropTypes.func.isRequired,
  }

  componentDidMount = () => this.fetchPosts();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchPosts = () => {
    const { fetchPosts } = this.props;
    return fetchPosts()
      .then(() => fetchMeals())
      .catch((err) => {
        console.log(`Error: ${err}`);
        return showError(err);
      });
  }

  render = () => {
    const { Layout, posts, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        recipeId={id}
        error={posts.error}
        loading={posts.loading}
        posts={posts.posts}
        reFetch={() => this.fetchPosts()}
      />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts || {},
});

const mapDispatchToProps = {
  fetchPosts: getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListing);

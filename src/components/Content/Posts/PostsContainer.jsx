import { connect } from 'react-redux';

import { addPost } from '../../Redux/profile-reducer.ts';

import Posts from './Posts';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const PostsContainer = connect(mapStateToProps, { addPost })(Posts);

export default PostsContainer;

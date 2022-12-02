import { compose } from 'redux';

import { WithAuthRedirect } from '../../HOC/withAuthRedirect';

import s from './Content.module.css';
import PostsContainer from './Posts/PostsContainer';
import ProfileContainer from './ProfileContainer/ProfileContainer';

const Content = () => {
  return (
    <div className={s.mainPage}>
      <ProfileContainer />
      <PostsContainer />
    </div>
  );
};

export default compose(WithAuthRedirect)(Content);

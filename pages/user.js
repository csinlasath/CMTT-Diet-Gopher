import Main from "../compositions/main/Main";
import UserJumbotron from "../components/UserJumbotron/UserJumbotron";
import Userprofile from "../components/user/userprofile";
import SecondaryUserProfile from "../components/secondaryuserprofile";

const User = () => (
  <Main>
    <UserJumbotron>
      <Userprofile />
  </UserJumbotron>
  <SecondaryUserProfile></SecondaryUserProfile>
  </Main>
);

export default User;

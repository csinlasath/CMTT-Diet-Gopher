import Main from "../compositions/main/Main";
import UserJumbotron from "../components/UserJumbotron/UserJumbotron";
import UserProfile from "../components/user/userprofile";

const User = () => (
  <Main>
    <UserJumbotron>
      <UserProfile />
  </UserJumbotron>
  </Main>
);

export default User;

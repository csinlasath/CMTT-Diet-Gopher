import Main from "../compositions/main/Main";
import UserJumbotron from "../components/UserJumbotron/UserJumbotron";
import Userprofile from "../components/user/userprofile";

const User = () => (
  <Main>
    <UserJumbotron>
      <Userprofile />
  </UserJumbotron>
  </Main>
);

export default User;

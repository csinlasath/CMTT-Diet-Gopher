import Main from "../compositions/main/Main";
import EditJumbotron from "../components/EditJumbotron/EditJumbotron";
import Edit from "../components/useredit/Edit";
import SecondaryEdit from "../components/secondaryedit";

const Useredit = () => (
  <Main>
    <EditJumbotron>
      <Edit> </Edit> 
      <SecondaryEdit> </SecondaryEdit>
  </EditJumbotron>
  </Main>
);

export default Useredit;

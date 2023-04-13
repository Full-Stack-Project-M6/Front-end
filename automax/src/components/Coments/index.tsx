import { StyleComments } from "./style";
import Announcer from "../Announcer/index";
import { Body2 } from "../Typography";

const Comment = () => {
  return (
    <StyleComments>
      <div>
        <Announcer />
      </div>
      <div>
        <Body2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Body2>
      </div>
    </StyleComments>
  );
};

export default Comment;

import { useContext } from "react";
import Announcer from "../Announcer";
import { Body2 } from "../Typography";
import { StyleComments } from "./style";
import { CommentsContext } from "../../context/commentsContext";

export const ListComments = () => {
  const { commentsList } = useContext(CommentsContext);

  const dateComment = (date_comment: string) => {
    const dateNow = new Date();
    const dateComment = new Date(date_comment);

    const diff = dateNow.getTime() - dateComment.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `há ${years} ano${years > 1 ? "s" : ""}`;
    } else if (months > 0) {
      return `há ${months} mês${months > 1 ? "es" : ""}`;
    } else if (days > 0) {
      return `há ${days} dia${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `há ${hours} hora${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `há ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    } else {
      return `há ${seconds} segundo${seconds > 1 ? "s" : ""}`;
    }
  };

  return (
    <ul>
      {commentsList.map((elm, index) => {
        return (
          <li key={index}>
            <StyleComments>
              <div className="divUser">
                <Announcer data={elm} />
                <p className="date">{dateComment(elm.createdAt)}</p>
              </div>
              <div className="comment">
                <Body2>{elm.comment}</Body2>
              </div>
            </StyleComments>
          </li>
        );
      })}
    </ul>
  );
};

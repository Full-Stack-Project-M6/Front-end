import { ReactNode, createContext, useState } from "react";
import { instance } from "../services/apiKenzie";
import { IComment, ICommentResponse } from "../interfaces/announce";

interface ICommentsProviderData {
  createComment: (
    id_comment: string | undefined,
    comment: IComment
  ) => Promise<void>;
  commentsList: ICommentResponse[];
  setCommentsList: React.Dispatch<React.SetStateAction<ICommentResponse[]>>;
  listComments: (id_comment: string | undefined) => Promise<void>;
}

export interface ICommentsProvider {
  children: ReactNode;
}

export const CommentsContext = createContext<ICommentsProviderData>(
  {} as ICommentsProviderData
);

export const CommentsProvider = ({ children }: ICommentsProvider) => {
  const [commentsList, setCommentsList] = useState<ICommentResponse[]>([]);

  const createComment = async (
    id_comment: string | undefined,
    comment: IComment
  ) => {
    await instance.post(`/announce/comment/${id_comment}`, comment);
  };

  const listComments = async (id_comment: string | undefined) => {
    const { data } = await instance.get(`/announce/comment/${id_comment}`);

    setCommentsList(data.comments);
  };

  return (
    <CommentsContext.Provider
      value={{ createComment, commentsList, setCommentsList, listComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

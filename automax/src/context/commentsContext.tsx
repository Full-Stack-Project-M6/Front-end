import { ReactNode, createContext } from "react";
import { instance } from "../services/apiKenzie";
import { IComment } from "../interfaces/announce";

interface ICommentsProviderData {
  createComment: (
    id_comment: string | undefined,
    comment: IComment
  ) => Promise<void>;
}

export interface ICommentsProvider {
  children: ReactNode;
}

export const CommentsContext = createContext<ICommentsProviderData>(
  {} as ICommentsProviderData
);

export const CommentsProvider = ({ children }: ICommentsProvider) => {
  const createComment = async (
    id_comment: string | undefined,
    comment: IComment
  ) => {
    await instance.post(`/announce/comment/${id_comment}`, comment);
  };

  return (
    <CommentsContext.Provider value={{ createComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

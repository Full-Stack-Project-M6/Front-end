import { ReactNode, createContext, useState } from "react";
import { instance } from "../services/apiKenzie";
import {
  IComment,
  ICommentResponse,
  IUpdateComment,
} from "../interfaces/announce";

interface ICommentsProviderData {
  loading: number;
  setLoading: React.Dispatch<React.SetStateAction<number>>;
  createComment: (
    id_announce: string | undefined,
    comment: IComment
  ) => Promise<void>;
  commentsList: ICommentResponse[];
  setCommentsList: React.Dispatch<React.SetStateAction<ICommentResponse[]>>;
  listComments: (id_announce: string | undefined) => Promise<void>;
  editComment: (
    id_comment: string | undefined,
    comment: IUpdateComment
  ) => Promise<void>;
  deleteComment: (id_comment: string | undefined) => Promise<void>;
  idUpdate: string;
  setIdUpdate: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICommentsProvider {
  children: ReactNode;
}

export const CommentsContext = createContext<ICommentsProviderData>(
  {} as ICommentsProviderData
);

export const CommentsProvider = ({ children }: ICommentsProvider) => {
  const [commentsList, setCommentsList] = useState<ICommentResponse[]>([]);
  const [loading, setLoading] = useState(0);
  const [idUpdate, setIdUpdate] = useState("");

  const createComment = async (
    id_announce: string | undefined,
    comment: IComment
  ) => {
    await instance.post(`/announce/comment/${id_announce}`, comment);
  };

  const listComments = async (id_announce: string | undefined) => {
    const { data } = await instance.get(`/announce/comment/${id_announce}`);

    setCommentsList(data.comments);
  };

  const editComment = async (
    id_comment: string | undefined,
    comment: IUpdateComment
  ) => {
    const { data } = await instance.patch(
      `/announce/comment/${id_comment}`,
      comment
    );
  };

  const deleteComment = async (id_comment: string | undefined) => {
    const { data } = await instance.delete(`/announce/comment/${id_comment}`);
  };

  return (
    <CommentsContext.Provider
      value={{
        loading,
        setLoading,
        createComment,
        commentsList,
        setCommentsList,
        listComments,
        editComment,
        deleteComment,
        idUpdate,
        setIdUpdate,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

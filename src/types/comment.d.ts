import { User } from "user";

declare module "comment" {
  export interface ParentComment {
    id: string;
    content: string;
    reviewId: string;
    createdAt: Date;
    user: User;
    childComments: ChildComment[];
  }

  export interface ChildComment {
    id: string;
    content: string;
    createdAt: Date;
    user: User;
  }
}

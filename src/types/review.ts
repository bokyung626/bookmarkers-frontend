import { ParentComment } from "./comment";
import { User } from "./user";

export interface Review {
  id: string;
  title: string;
  content: string;
  memory: string;
  createdAt: Date;
  image: string;
  isbn: string;
  user: User;
  comments: ParentComment[];
}

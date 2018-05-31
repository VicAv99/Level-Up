import { Comment } from "./comment";

export interface Post {
  id: number;
  content: string;
  username: string;
  comments: Comment[];
}

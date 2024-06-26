export interface Joke {
  _id: string;
  title: string;
  content: string;
  author: string;
  authorName: string;
  isActive: boolean;
  category: string;
  likes: number;
  dislikes: number;
  comments: { commentId: string }[];
  isArchived: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

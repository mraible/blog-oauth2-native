import { IPost } from 'app/entities/post/post.model';

export interface ITag {
  id: number;
  name?: string | null;
  entries?: Pick<IPost, 'id'>[] | null;
}

export type NewTag = Omit<ITag, 'id'> & { id: null };

import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 27730,
  title: 'emu state homogeneous',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-06-10T16:51'),
};

export const sampleWithPartialData: IPost = {
  id: 99201,
  title: 'Operations East Car',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-06-10T15:00'),
};

export const sampleWithFullData: IPost = {
  id: 15906,
  title: 'Northeast Mountain Electronics',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-06-10T22:00'),
};

export const sampleWithNewData: NewPost = {
  title: 'approach Blues',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-06-10T13:20'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

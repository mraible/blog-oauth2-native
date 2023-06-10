import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 67370,
  name: 'East World Bicycle',
  handle: 'Reggae Credit Southwest',
};

export const sampleWithPartialData: IBlog = {
  id: 44786,
  name: 'black ew synthesizing',
  handle: 'Mariela Music',
};

export const sampleWithFullData: IBlog = {
  id: 9545,
  name: 'engage Southwest',
  handle: 'withdrawal District',
};

export const sampleWithNewData: NewBlog = {
  name: 'Tuna painfully Audi',
  handle: 'transmit',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

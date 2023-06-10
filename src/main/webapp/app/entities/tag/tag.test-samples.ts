import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 95022,
  name: 'Global Tricycle',
};

export const sampleWithPartialData: ITag = {
  id: 47436,
  name: 'Mouse Passenger Rock',
};

export const sampleWithFullData: ITag = {
  id: 79820,
  name: 'Rustic',
};

export const sampleWithNewData: NewTag = {
  name: 'pish',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

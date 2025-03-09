import { DreamStatus } from './types';

export const statusFilters: DreamStatus[] = ['completed', 'in-progress', 'planned'];

export const getStatusLabel = (status: DreamStatus): string => {
  return status.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};
export type DreamStatus = 'completed' | 'in-progress' | 'planned';

export interface Dream {
  id: number;
  title: string;
  imageUrl: string;
  status: DreamStatus;
  description?: string;
  category: DreamCategory;
}

export type DreamCategory = 
  | 'travel'
  | 'service'
  | 'planet'
  | 'health' 
  | 'spiritual';
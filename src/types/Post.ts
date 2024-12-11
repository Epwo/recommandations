export interface Post {
    id: number;
    title: string;
    content: string;
    category: 'music' | 'code' | 'other';
    date: string;
  }
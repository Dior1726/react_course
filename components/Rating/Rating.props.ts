import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEdiatble?: boolean;
  rating: number;
  setRating?: (rating: number) => void 
}
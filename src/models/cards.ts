export interface ICardProps {
  title: string;
  lastUpdated: string;
  step: number;
  status: number;
}
export enum CardStatus {
  'Not Started' = 0,
  'In Progress' = 1,
  'Completed' = 2,
}

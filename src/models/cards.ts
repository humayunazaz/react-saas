export interface ICardProps {
  title: string;
  lastUpdated: string;
  step: number;
  status: number;
}
export enum CardStatus {
  NotStarted = 0,
  InProgress = 1,
  Completed = 2,
}

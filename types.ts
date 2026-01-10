
export interface PrayerState {
  name: string;
  isOpening: boolean;
  insight: string;
  loadingInsight: boolean;
}

export enum PrayerType {
  OPENING = 'OPENING',
  CLOSING = 'CLOSING'
}

import { TypeColors } from '../constants/type-colors';

export interface NotificationData {
  type: TypeColors;
  msg: string;
  timeout: number;
}

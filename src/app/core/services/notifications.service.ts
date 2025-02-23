import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { TypeColors } from '../constants/type-colors';
import { NotificationData } from '../models/notifications.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: any[] = [];
  duration = 6000;

  constructor() {}

  showNotification(message: string, type: TypeColors) {
    const notification: NotificationData = {
      type,
      msg: message,
      timeout: this.duration,
    };
    this.notifications = [...this.notifications, notification];
    timer(this.duration).subscribe(() => this.clearNotification(notification));
  }

  clearNotification(notification: NotificationData) {
    this.notifications = this.notifications.filter(
      (data: NotificationData) => data !== notification
    );
  }

  success(message: string) {
    this.showNotification(`${message}`, 'success');
  }

  error(message: string) {
    this.showNotification(`${message}`, 'danger');
  }

  warning(message: string) {
    this.showNotification(`${message}`, 'warning');
  }

  info(message: string) {
    this.showNotification(`${message}`, 'info');
  }

  getAlerts() {
    return this.notifications;
  }
}

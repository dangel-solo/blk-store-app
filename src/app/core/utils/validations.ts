import { RATINGS_COLORS } from '../constants/rating-colors';

export class CustomValidators {
  static validUrl(domain: string): string {
    return domain
      ? domain.startsWith('http')
        ? domain
        : 'https://' + domain
      : '/';
  }

  static getRatingColor(value: string): string {
    return RATINGS_COLORS[value];
  }
}

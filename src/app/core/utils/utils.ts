import { RATINGS_COLORS } from '../constants/rating-colors';

export class CustomUtils {
  static validUrl(domain: string | null | undefined): string {
    return domain?.trim()
      ? domain.startsWith('http')
        ? domain
        : 'https://' + domain
      : '/';
  }

  static getRatingColor(value: string): string {
    return RATINGS_COLORS[value];
  }

  static isNotEmpty(value: string | null | undefined): string {
    return value?.trim() ? value : 'NO DATA';
  }

  static isNotImage(value: string | null | undefined): string {
    return value?.trim() ? value : 'assets/img/square2.png';
  }
}

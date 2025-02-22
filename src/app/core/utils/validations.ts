export class CustomValidators {
  static validUrl(domain: string): string {
    return domain
      ? domain.startsWith('http')
        ? domain
        : 'https://' + domain
      : '/';
  }
}

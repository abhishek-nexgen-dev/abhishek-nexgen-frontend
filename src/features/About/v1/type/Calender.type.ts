export type Platform = 'github' | 'leetcode' | 'codeforces' | 'other';
export type PlatformFilter = Platform | 'all';

export interface ContributionData {
  day: string;
  value: number;
  platform: Platform;
  details: string;
}

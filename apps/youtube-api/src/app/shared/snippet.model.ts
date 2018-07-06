export interface Snippet {
  channelTitle: string;
  description: string;
  publishedAt: string;
  thumbnails: { high: { url: string } };
  title: string;
  resourceId?: { videoId?: string }
}

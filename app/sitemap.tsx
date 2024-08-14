
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://maceock.me',
      lastModified: new Date(),
    },
    {
      url: 'https://maceock.me/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://maceock.me/contact',
      lastModified: new Date(),
    }
  ]
}
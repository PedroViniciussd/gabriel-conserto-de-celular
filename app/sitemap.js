import { products } from './produtos/data'

const baseUrl = 'https://gabrieltechelite.vercel.app'

export default function sitemap() {
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/produtos/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...productUrls,
  ]
}
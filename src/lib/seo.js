export function webApplicationSchema(name, description, path) {
  const configuredSite = import.meta.env.PUBLIC_SITE_URL?.trim();
  const base = configuredSite ? new URL(configuredSite).origin : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    url: base ? `${base}${path}` : path,
    description,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    inLanguage: 'en',
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'USD',
    },
  };
}

export function webSiteSchema() {
  const configuredSite = import.meta.env.PUBLIC_SITE_URL?.trim();
  const base = configuredSite ? new URL(configuredSite).origin : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DnD Arena',
    inLanguage: 'en',
    ...(base ? { url: base } : {}),
    description: 'Original, browser-based fantasy name tools for tabletop stories.',
  };
}

export function articleSchema(headline, description, path, datePublished = '2026-02-10T00:00:00Z') {
  const configuredSite = import.meta.env.PUBLIC_SITE_URL?.trim();
  const base = configuredSite ? new URL(configuredSite).origin : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: base ? `${base}${path}` : path,
    inLanguage: 'en',
    datePublished,
    author: {
      '@type': 'Organization',
      name: 'DnD Arena',
      ...(base ? { url: base } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: 'DnD Arena',
      ...(base ? { url: base } : {}),
    },
  };
}

export function faqPageSchema(items) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

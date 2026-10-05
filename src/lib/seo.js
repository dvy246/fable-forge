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

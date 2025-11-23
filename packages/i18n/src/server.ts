import {getTranslations} from 'next-intl/server';

export async function getMeta(locale: string) {
  const t = await getTranslations({locale, namespace: 'meta'});
  return {
    title: t('title'),
    description: t('description')
  };
}

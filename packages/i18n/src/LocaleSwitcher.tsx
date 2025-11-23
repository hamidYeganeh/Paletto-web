"use client";
import {useLocale} from 'next-intl';

type Props = {
  className?: string;
};

function cx(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function LocaleSwitcher({className = ''}: Props) {
  const locale = useLocale();

  function switchTo(nextLocale: 'en' | 'fa') {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    window.location.reload();
  }

  return (
    <div className={cx('flex gap-2', className)}>
      <button
        onClick={() => switchTo('en')}
        className={cx('px-3 py-2 rounded-md text-sm', locale === 'en' ? 'bg-black text-white' : 'bg-gray-200')}
      >
        EN
      </button>
      <button
        onClick={() => switchTo('fa')}
        className={cx('px-3 py-2 rounded-md text-sm', locale === 'fa' ? 'bg-black text-white' : 'bg-gray-200')}
      >
        FA
      </button>
    </div>
  );
}

import { writable, derived } from 'svelte/store';
import en from './locales/en.json';
import zh from './locales/zh.json';

export const locales: { [key: string]: { [key: string]: string } } = {
	en,
	zh
};

export const locale = writable('en');

function translate(locale: string, key: string, vars: { [key: string]: string }) {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	let text = locales[locale][key];

 if (!text) throw new Error(`no translation found for ${locale}.${key}`);

 if (vars && Object.keys(vars).length > 0) {
  Object.keys(vars).forEach((k) => {
  	const regex = new RegExp(`{{${k}}}`, 'g');
  	text = text.replace(regex, vars[k]);
  });
 }

  return text;
}

export const t = derived(
  locale,
  ($locale) =>
    (key: string, vars = {}) =>
      translate($locale, key, vars)
);
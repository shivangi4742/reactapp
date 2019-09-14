/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './lang-provider.constants';

export function changeLocale(languageLocale) {
    return {
        type: CHANGE_LOCALE,
        locale: languageLocale,
    };
}

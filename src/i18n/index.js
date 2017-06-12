import { englishMessages } from 'admin-reactjs';
import frenchMessages from 'aor-language-french';

import customFrenchMessages from './fr';
import customEnglishMessages from './en';

export default {
    fr: { ...frenchMessages, ...customFrenchMessages },
    en: { ...englishMessages, ...customEnglishMessages },
};

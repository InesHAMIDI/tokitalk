import {Language, LanguageUtils} from 'typesbcp47';

export type LanguageType = {
    code: string;
    language: string;
}

export function stringToLanguageType(langCode: string): LanguageType {
    let lang: LanguageType | undefined = languages.find((lang: LanguageType) => lang.code === langCode);
    if (lang === undefined) lang = languages[0];
    return lang;
}

export const languages: LanguageType[] = initLanguages();

function initLanguages(): LanguageType[] {
    return LanguageUtils.getCommonLanguages().map((lang: Language) => {
        return {
            code: lang.getCode().normalize(),
            language: lang.getDescription(),
        };
    });
}
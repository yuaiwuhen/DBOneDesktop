import {
    app
} from "electron";

import {
    DEBUG
} from '../utils/consts';
import {
    logInfo
} from "../utils/log";
import {
    LangHelper
} from '../utils/lang';
import langData from './lang.json'

const langHelper = new LangHelper();

export const initLang = () => {
    let langName = app.getLocale()
    logInfo(`langName=${langName}`)

    langName = langName.toLowerCase()
    if (langName.startsWith('zh-')) {
        langName = 'zh-cn';
    } else {
        langName = 'en';
    }

    loadLanguage(langName)
};

export const loadLanguage = (langName) => {
    if (!langName) {
        return
    }

    if (langName !== langHelper.name) {
        langHelper.change(langName, langData[langName]);
    }
};

if (DEBUG) {
    global.$lang = langHelper;
}

export default langHelper;
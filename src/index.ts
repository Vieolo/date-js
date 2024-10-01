// Classes and functions
import { VDate } from './date'

export { dateDuration } from './duration'
export { I18N } from './i18n'
export default VDate;

// Types
import {
	DateDurationType as DDT,
	DateFormats as DF,
	Week as W,
	SupportedLanguage as SL
} from './types';

export type DateDurationType = DDT;
export type DateFormats = DF;
export type Week = W;
export type SupportedLanguage = SL
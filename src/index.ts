// Classes and functions
import { VDate } from './date'

export { dateDuration } from './duration'
export default VDate;

// Types
import {
	DateDurationType as DDT,
	DateFormats as DF,
	Week as W,
} from './types';

export type DateDurationType = DDT;
export type DateFormats = DF;
export type Week = W;
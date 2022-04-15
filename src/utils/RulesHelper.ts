import moment, {Moment} from "moment";
import DateConstants from "../constants/DateConstants";
const f = DateConstants.DATE_FORMAT;

export const RulesHelper = {
    required: (message: string) => ({
        message,
        required: true
    }),
    checkDate: (message: string) => ({
        validator(_: any, value: Moment) {
            if(value.isSameOrAfter(moment()) || value.format(f) === moment().format(f)) {
                return Promise.resolve();
            }

            return Promise.reject(new Error(message));
        }
    })
};
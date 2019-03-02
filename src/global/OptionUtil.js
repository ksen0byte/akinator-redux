import {optionList, tags} from "../datasource";

const getFilteredOptionList = filters => {
    if (filters == null) return [];
    if (filters.length === 0) return optionList;
    return [...new Set(filters
        .map(filter => optionList.filter(option => !option.tags.includes(filter.text) ^ filter.positive))
        .reduce((prev, cur) => prev.filter(x => cur.includes(x))))];
};

const nextFilter = filters => {
    const activeOptions = getFilteredOptionList(filters);
    return tags
        .filter(tag => !filters.map(filter => filter.text).includes(tag))
        .map(tag => {
            return {
                tag: tag,
                rate: Math.abs((activeOptions.length / 2) - (activeOptions.filter(opt => opt.tags.includes(tag)).length))
            }
        })
        .sort((left, right) => left.rate - right.rate)
        .map(tagWithRate => tagWithRate.tag)[0];
};

export {getFilteredOptionList, nextFilter} ;
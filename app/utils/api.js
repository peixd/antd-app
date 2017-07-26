const axios = require('axios');
// debug only...
// window.axios = axios;

// content-type from json to form data
const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } };
const URL = "http://134.70.103.102:8080/ssm/services";

export const queryPhoneNumber = (params, isGeneralQuery=false) => {
    const queryParams = `service=phoneNumberQueryService&method=${isGeneralQuery ? "generalQuery" : "advancedQuery"}&params=${JSON.stringify(params)}`;
    return axios.post(URL, queryParams, config)
        .then(res => res.data)
        .catch(err => err.message);
}

export const queryTotal = (params, isGeneralQuery=false) => {
    const queryParams = `service=phoneNumberQueryService&method=${isGeneralQuery ? "generalQueryTotal" : "advancedQueryTotal"}&params=${JSON.stringify(params)}`;
    return (axios.post(URL, queryParams, config)
        .then(res => res.data)
        .catch(err => err.message));
}

export const queryPhoneNumberAndTotal = (params, isGeneralQuery) => {
    return axios.all([
        queryPhoneNumber(params, isGeneralQuery),
        queryTotal(params, isGeneralQuery)
    ]).then(data => ({phoneNumberList: data[0].data, total: data[1].data}));
}


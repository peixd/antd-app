const axios = require('axios');
// debug only...
// window.axios = axios;

// content-type from json to form data, config the timeout to 10 sec.
const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } ,
    timeout: 10000
};
const URL = "http://218.22.140.154:99/ssm/services";

export const queryPhoneNumber = (params, isGeneralQuery=false) => {
    const queryParams = `service=phoneNumberQueryService&method=${isGeneralQuery ? "generalQuery" : "advancedQuery"}&params=${JSON.stringify(params)}`;
    return axios.post(URL, queryParams, config)
        .then(res => res.data)
}

export const queryTotal = (params, isGeneralQuery=false) => {
    const queryParams = `service=phoneNumberQueryService&method=${isGeneralQuery ? "generalQueryTotal" : "advancedQueryTotal"}&params=${JSON.stringify(params)}`;
    return axios.post(URL, queryParams, config).then(res => res.data)
}

export const queryPhoneNumberAndTotal = (params, isGeneralQuery) => {
    return axios.all([
        queryPhoneNumber(params, isGeneralQuery),
        queryTotal(params, isGeneralQuery)
    ]).then(data => ({phoneNumberList: data[0].data, total: data[1].data}));
}


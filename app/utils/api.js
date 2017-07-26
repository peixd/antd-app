const Qs = require('qs');
const axios = require('axios');
window.axios = axios;
window.qs = Qs;

/**
 * login ****
  const data = "serviceType=1&empeeAcct=000091&authType=00&randomCodeOrPassword=Simple277";
  const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } };
  const URL = "http://134.70.103.102:8080/ssm/enhancedLogin.do";
  axios.post(URL, data, config)
    .then(res=>{ console.log(res) })
    .catch(err=>{ console.log(err) });
 */

// content-type from json to form data
const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } };
const URL = "http://134.70.103.102:8080/ssm/services";

export const queryPhoneNumber = (params, isAdvancedQuery=false) => {
    const queryParams = `service=phoneNumberQueryService&method=${isAdvancedQuery ? "advancedQuery" : "generalQuery"}&params=${JSON.stringify(params)}`;
    return axios.post(URL, queryParams, config)
        .then(res => res.data)
        .catch(err => err.message);
}

export const queryTotal = (params, isAdvancedQuery=false) => {
    const queryParams = `service=phoneNumberQueryService&method=${isAdvancedQuery ? "advancedQueryTotal" : "generalQueryTotal"}&params=${JSON.stringify(params)}`;
    return axios.post(URL, queryParams, config)
        .then(res => res.data)
        .catch(err => err.message);
}

export const queryPhoneNumberAndTotal = (params, isAdvancedQuery=false) => {
    axios.all([
        queryPhoneNumber(params, isAdvancedQuery),
        queryTotal(params, isAdvancedQuery)
    ]).then(data => ({
            phoneNumberList: data[0],
                total: data[1]
        })
    ).catch(err => err.message);
}

export const advancedQuery = params => {
    const data = Qs.stringify({"service":"phoneNumberQueryService","method":"advancedQuery", "params":params});
    return axios.post(URL, data, config)
        .then(res=>{ console.log(res) })
        .catch(err=>{ console.log(err) });
}


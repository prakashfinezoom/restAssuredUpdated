import supertest from "supertest"
import quiklyz from "../Confiq/quiklyz";
import { assert, expect } from 'chai'
const request = supertest(quiklyz.baseUrlcrm)
let endpoint = quiklyz.nupayCreateMandateURL
let endpoint1=quiklyz.nupayEmandateCategory
let endpoint2=quiklyz.nupayGetStatusL
let endpoint3=quiklyz.nupayEmandateBankList
describe('quiklyz', () => {
    it('Create EMandate', () => {
        const data={
            "esbRequest": {
                "header": {
                    "apiVersion": "1",
                    "channelID": "qw",
                    "deviceID": "2",
                    "languageId": "3",
                    "serviceName": "CreateeMandate",
                    "os": "4",
                    "osVersion": "5",
                    "uniqueReqNo": "44756926143",
                    "timestamp": "2019-02-20T00:00:00",
                    "geoLocation": "8"
                },
                "request": {
                  "loan_no": "NP123456",
                  "seq_tp": "RCUR",
                  "frqcy": "ADHO",
                  "frst_colltn_dt": "2025-03-07",
                  "fnl_colltn_dt": "2022-09-08",
                  "colltn_until_cncl": true,
                  "colltn_amt": 100,
                  "debit_type":true,
                  "mobile_no": "8777350601",
                  "tel_no": "",
                  "email": "abhimanyu.gupta@nupay.co.in",
                  "category_id": 7,
                  "account_holder_name": "Abhimanyu Gupta",
                  "bank_id": 7,
                  "auth_type": "",
                  "account_type": "Savings",
                  "ifsc_code": "ICIC0001234",
                  "bank_account_no": "0151177111",
                  "bank_account_no_confirmation": "0151177111"
                }
            }
        }
        
        return request

    .post(`${endpoint}`)
    .set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
    .set('Content-Type', 'application/json')
    .send(data)
    .then((res) => {
        console.log(res.body);
        expect(res.statusCode).to.eq(200);
    })        
});
it('EMandate category list', () => {
    const data1={
        "esbRequest": {
            "header": {
                "apiVersion": "1",
                "channelID": "qw",
                "deviceID": "2",
                "languageId": "3",
                "serviceName": "eMandateCategoryList",
                "os": "4",
                "osVersion": "5",
                "uniqueReqNo": "44756926143",
                "timestamp": "2019-02-20T00:00:00",
                "geoLocation": "8"
            }
            
        }
    }
  
    return request

.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data1)
.then((res) => {
    console.log(res.body);
    expect(res.statusCode).to.eq(200);
})        
});
it('Get Status ID', () => {
    const data1={
        "esbRequest": {
            "header": {
                "apiVersion": "1",
                "channelID": "qw",
                "deviceID": "2",
                "languageId": "3",
                "serviceName": "GetStatusById",
                "os": "4",
                "osVersion": "5",
                "uniqueReqNo": "12756922143",
                "timestamp": "2019-02-20T00:00:00",
                "geoLocation": "8"
            },
            "request": {
           "id": "02462021044639c565"
            }
        }
    }
    return request

.post(`${endpoint2}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data1)
.then((res) => {
    console.log(res.body);
    expect(res.statusCode).to.eq(200);
})        
});
it('EMandate Bank List', () => {
    const data1={
        "esbRequest": {
            "header": {
                "apiVersion": "1",
                "channelID": "qw",
                "deviceID": "2",
                "languageId": "3",
                "serviceName": "eMandateBankList",
                "os": "4",
                "osVersion": "5",
                "uniqueReqNo": "1255255",
                "timestamp": "2019-02-20T00:00:00",
                "geoLocation": "8"
            }
            
        }
    }
  
    return request

.post(`${endpoint3}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data1)
.then((res) => {
    console.log(res.body);
    expect(res.statusCode).to.eq(200);
})        
});
});
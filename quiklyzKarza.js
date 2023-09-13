import supertest from "supertest"
import quiklyz from "../Confiq/quiklyz";
import { assert, expect } from 'chai';
const request = supertest(quiklyz.baseUrlcrm)
let endpoint = quiklyz.karzaNameSimilarity
let endpoint1=quiklyz.karzaEbillVerfication
let endpoint2=quiklyz.karzaEmailAuth
describe('quiklyz', () => {
    it('Karza Name Similarity', () => {
        const data={
            "esbRequest": {
                "header": {
                    "apiVersion": "",
                    "channelID": "ESB",
                    "deviceID": "",
                    "languageId": "",
                    "serviceName": "NAMESIMILARITY",
                    "os": "",
                    "uniqueReqNo": "testbre61212",
                    "timestamp": "q1211",
                    "geoLocation": ""
                },
        
                "request": {
                    "name1": "SHIRHATTI OMKAR MILIND",
                      "name2": "OMKAR SHIRHATTI",
                      "type": "individual",
                     "preset": "L"
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
        let resBody=res.body;
        expect(res.statusCode).to.eq(200)
        expect(resBody.esbResponse.header.apiVersion).to.be.a("string")
        expect(resBody.esbResponse.header.channelID).to.be.a("string")
        expect(resBody.esbResponse.header.deviceID).to.be.a("string")
        expect(resBody.esbResponse.header.languageId).to.be.a("string")
        expect(resBody.esbResponse.header.serviceName).to.be.a("string")
        expect(resBody.esbResponse.header.os).to.be.a("string")
        expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
        expect(resBody.esbResponse.header.timestamp).to.be.a("string")
        expect(resBody.esbResponse.header.geoLocation).to.be.a("string")
        expect(resBody.esbResponse.header.isSuccess).to.be.a("boolean")
        expect(resBody.esbResponse.header.statusCode).to.be.a("string") 
        expect(resBody.esbResponse.header.message).to.be.a("string") 

});
});


it('Karza eBillVerification', () => {
    
    const data1={
        "esbRequest": {
            "header": {
                "channelID": "CD",
                "serviceName": "EBILLVERIFICATION",
                "uniqueReqNo": "1620052021894",
                "timestamp": "1620052021894"
            },
            "request": {
                "consent": "y",
                "consumerID": "6602763933",
                "serviceProvider": "BESCOM"
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
    let resBody=res.body;
    expect(resBody.esbResponse.header.channelID).to.be.a("string")
    expect(resBody.esbResponse.header.serviceName).to.be.a("string")
    expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
    expect(resBody.esbResponse.header.timestamp).to.be.a("string")
    expect(resBody.esbResponse.header.isSuccess).to.be.a("boolean")
    expect(resBody.esbResponse.header.statusCode).to.be.a("string") 
    expect(resBody.esbResponse.header.message).to.be.a("string")
    expect(resBody.esbResponse.response.address).to.be.a("string") 
    expect(resBody.esbResponse.response.amountPayble).to.be.a("string")
    expect(resBody.esbResponse.response.billAmount).to.be.a("string")
    expect(resBody.esbResponse.response.billDate).to.be.a("string")
    expect(resBody.esbResponse.response.billDueDate).to.be.a("string")
    expect(resBody.esbResponse.response.billIssueDate).to.be.a("string")
    expect(resBody.esbResponse.response.billNo).to.be.a("string")
    expect(resBody.esbResponse.response.consumerName).to.be.a("string")
    expect(resBody.esbResponse.response.consumerNumber).to.be.a("string")
    expect(resBody.esbResponse.response.emailAddress).to.be.a("string")
    expect(resBody.esbResponse.response.mobileNumber).to.be.a("string")
    expect(resBody.esbResponse.response.totalAmount).to.be.a("string")
})   
});

it('Karza PassportVerification', () => {
    const data2={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "ESB",
                "deviceID": "",
                "languageId": "",
                "serviceName": "PASSPORTVERIFICATION",
                "os": "",
                "uniqueReqNo": "12re",
                "timestamp": "1750",
                "geoLocation": ""
            },
            "request": {
                "consent": "y",
                "fileNo": "BO3072344560818",
                "dob": "17/08/1987",
                "passportNo": "S3733862",
                "doi": "14/05/2018",
                "name": "OMKAR MILIND SHIRHATTI"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data2)
.then((res) => {
    console.log(res.body);
    expect(res.statusCode).to.eq(200)
    let resBody=res.body;
    expect(resBody.esbResponse.header.apiVersion).to.be.a("string")
    expect(resBody.esbResponse.header.channelID).to.be.a("string")
    expect(resBody.esbResponse.header.deviceID).to.be.a("string")
    expect(resBody.esbResponse.header.languageId).to.be.a("string")
    expect(resBody.esbResponse.header.serviceName).to.be.a("string")
    expect(resBody.esbResponse.header.os).to.be.a("string")
    expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
    expect(resBody.esbResponse.header.timestamp).to.be.a("string")
    expect(resBody.esbResponse.header.geoLocation).to.be.a("string")
    expect(resBody.esbResponse.header.isSuccess).to.be.a("boolean")
    expect(resBody.esbResponse.header.statusCode).to.be.a("string") 
    expect(resBody.esbResponse.header.message).to.be.a("string")
    expect(resBody.esbResponse.result.passportNo).to.be.a("string")
    expect(resBody.esbResponse.result.passportNoMatch).to.be.a("boolean")
    expect(resBody.esbResponse.result.applicationDate).to.be.a("string")
    expect(resBody.esbResponse.result.typeOfApplication).to.be.a("string")
    expect(resBody.esbResponse.result.dateOfIssueMatch).to.be.a("boolean")
    expect(resBody.esbResponse.result.dispatchedOnFromSource).to.be.an("string")
    expect(resBody.esbResponse.result.nameScore).to.be.a("number")
    expect(resBody.esbResponse.result.nameMatch).to.be.a("boolean")
    expect(resBody.esbResponse.result.surnameFromPassport).to.be.a("string")
    expect(resBody.esbResponse.result.nameFromPassport).to.be.a("string")
})        
});
it('Karza VotersIDVerification', () => {
    
    const data3={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "CD",
                "deviceID": "",
                "languageId": "",
                "serviceName": "VOTERIDVERIFICATION",
                "os": "",
                "osVersion": "",
                "uniqueReqNo": "7",
                "timestamp": "256589",
                "geoLocation": "8"
            },
            "request": {
                "consent": "y",
                "epicNo": "RCU0780940"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data3)
.then((res) => {
    console.log(res.body);
    let resBody=res.body;
    expect(res.statusCode).to.eq(200)
    expect(resBody.esbResponse.header.apiVersion).to.be.a("string")
    expect(resBody.esbResponse.header.channelID).to.be.a("string")
    expect(resBody.esbResponse.header.deviceID).to.be.a("string")
    expect(resBody.esbResponse.header.languageId).to.be.a("string")
    expect(resBody.esbResponse.header.serviceName).to.be.a("string")
    expect(resBody.esbResponse.header.os).to.be.a("string")
    expect(resBody.esbResponse.header.osVersion).to.be.a("string")
    expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
    expect(resBody.esbResponse.header.timestamp).to.be.a("string")
    expect(resBody.esbResponse.header.geoLocation).to.be.a("string")
    expect(resBody.esbResponse.header.isSuccess).to.be.a("boolean")
    expect(resBody.esbResponse.header.statusCode).to.be.a("string") 
    expect(resBody.esbResponse.header.message).to.be.a("string")
    expect(resBody.esbResponse.response.psLatLong).to.be.a("string")
    expect(resBody.esbResponse.response.rlnNameV1).to.be.a("string")
    expect(resBody.esbResponse.response.rlnNameV2).to.be.a("string")
    expect(resBody.esbResponse.response.rlnNameV3).to.be.a("string")
    expect(resBody.esbResponse.response.partNo).to.be.a("string")
    expect(resBody.esbResponse.response.rlnType).to.be.a("string")
    expect(resBody.esbResponse.response.sectionNo).to.be.a("string")
    expect(resBody.esbResponse.response.ID).to.be.a("string")
    expect(resBody.esbResponse.response.nameV1).to.be.a("string")
    expect(resBody.esbResponse.response.rlnName).to.be.a("string")
    expect(resBody.esbResponse.response.district).to.be.a("string")
    expect(resBody.esbResponse.response.lastUpdate).to.be.a("string")
    expect(resBody.esbResponse.response.state).to.be.a("string")
    expect(resBody.esbResponse.response.acNo).to.be.a("string")
    expect(resBody.esbResponse.response.houseNo).to.be.a("string")
    expect(resBody.esbResponse.response.psName).to.be.a("string")
    expect(resBody.esbResponse.response.pcName).to.be.a("string")
    expect(resBody.esbResponse.response.slnoInpart).to.be.a("string")
    expect(resBody.esbResponse.response.name).to.be.a("string")
    expect(resBody.esbResponse.response.partName).to.be.a("string")
    expect(resBody.esbResponse.response.stCode).to.be.a("string")
    expect(resBody.esbResponse.response.gender).to.be.a("string")
    expect(resBody.esbResponse.response.age).to.be.an("number")
    expect(resBody.esbResponse.response.acName).to.be.a("string")
    expect(resBody.esbResponse.response.epicNo).to.be.a("string")
    expect(resBody.esbResponse.response.nameV3).to.be.a("string")
    expect(resBody.esbResponse.response.nameV2).to.be.a("string")
    expect(resBody.esbResponse.response.dob).to.be.a("string")

})   

});
it('Karza OCRExtraction', () => {
    
    const data4={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "CD",
                "deviceID": "",
                "languageId": "",
                "serviceName": "VOTERIDVERIFICATION",
                "os": "",
                "osVersion": "",
                "uniqueReqNo": "7",
                "timestamp": "256589",
                "geoLocation": "8"
            },
            "request": {
                "consent": "y",
                "epicNo": "RCU0780940"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data4)
.then((res) => {
    console.log(res.body);
    let resBody=res.body;
    expect(res.statusCode).to.eq(200)
    expect(resBody.esbResponse.header.apiVersion).to.be.a("string")
    expect(resBody.esbResponse.header.channelID).to.be.a("string")
    expect(resBody.esbResponse.header.deviceID).to.be.a("string")
    expect(resBody.esbResponse.header.languageId).to.be.a("string")
    expect(resBody.esbResponse.header.serviceName).to.be.a("string")
    expect(resBody.esbResponse.header.os).to.be.a("string")
    expect(resBody.esbResponse.header.osVersion).to.be.a("string")
    expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
    expect(resBody.esbResponse.header.timestamp).to.be.a("string")
    expect(resBody.esbResponse.header.geoLocation).to.be.a("string")
    expect(resBody.esbResponse.header.isSuccess).to.be.a("boolean")
    expect(resBody.esbResponse.header.statusCode).to.be.a("string") 
    expect(resBody.esbResponse.header.message).to.be.a("string")
    expect(resBody.esbResponse.response.psLatLong).to.be.a("string")
    expect(resBody.esbResponse.response.rlnNameV1).to.be.a("string")
    expect(resBody.esbResponse.response.rlnNameV2).to.be.a("string")
    expect(resBody.esbResponse.response.rlnNameV3).to.be.a("string")
    expect(resBody.esbResponse.response.partNo).to.be.a("string")
    expect(resBody.esbResponse.response.rlnType).to.be.a("string")
    expect(resBody.esbResponse.response.sectionNo).to.be.a("string")
    expect(resBody.esbResponse.response.ID).to.be.a("string")
    expect(resBody.esbResponse.response.nameV1).to.be.a("string")
    expect(resBody.esbResponse.response.rlnName).to.be.a("string")
    expect(resBody.esbResponse.response.district).to.be.a("string")
    expect(resBody.esbResponse.response.lastUpdate).to.be.a("string")
    expect(resBody.esbResponse.response.state).to.be.a("string")
    expect(resBody.esbResponse.response.acNo).to.be.a("string")
    expect(resBody.esbResponse.response.houseNo).to.be.a("string")
    expect(resBody.esbResponse.response.psName).to.be.a("string")
    expect(resBody.esbResponse.response.pcName).to.be.a("string")
    expect(resBody.esbResponse.response.slnoInpart).to.be.a("string")
    expect(resBody.esbResponse.response.name).to.be.a("string")
    expect(resBody.esbResponse.response.partName).to.be.a("string")
    expect(resBody.esbResponse.response.stCode).to.be.a("string")
    expect(resBody.esbResponse.response.gender).to.be.a("string")
    expect(resBody.esbResponse.response.age).to.be.an("number")
    expect(resBody.esbResponse.response.acName).to.be.a("string")
    expect(resBody.esbResponse.response.epicNo).to.be.a("string")
    expect(resBody.esbResponse.response.nameV3).to.be.a("string")
    expect(resBody.esbResponse.response.nameV2).to.be.a("string")
    expect(resBody.esbResponse.response.dob).to.be.a("string")

})   

});
it('Karza EMailAuthentication', () => {
    
    const data5={
        "esbRequest": {
            "header": {
                "apiVersion": "1",
                "channelID": "qw",
                "deviceID": "2",
                "languageId": "3",
                "serviceName": "EmailAuthentication",
                "os": "4",
                "osVersion": "5",
                "uniqueReqNo": "12756922100",
                "timestamp": "2019-02-20T00:00:00",
                "geoLocation": "8"
            },
            "request": {
           "email": "chakri.dattu@gmail.com"
            }
        }
    }  
    return request
.post(`${endpoint2}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.set('Origin','cdmobuat.mahindrafs.com')
.send(data5)
.then((res) => {
    console.log(res.body);
    let resBody=res.body;
    expect(res.statusCode).to.eq(200)
    expect(resBody.esbResponse.header.apiVersion).to.be.a("string")
    expect(resBody.esbResponse.header.channelID).to.be.a("string")
    expect(resBody.esbResponse.header.deviceID).to.be.a("string")
    expect(resBody.esbResponse.header.languageId).to.be.a("string")
    expect(resBody.esbResponse.header.serviceName).to.be.a("string")
    expect(resBody.esbResponse.header.os).to.be.a("string")
    expect(resBody.esbResponse.header.osVersion).to.be.a("string")
    expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
    expect(resBody.esbResponse.header.timestamp).to.be.a("string")
    expect(resBody.esbResponse.header.geoLocation).to.be.a("string")
//    expect(resBody.esbResponse.response.result).to.be.a("array")
    expect(resBody.esbResponse.response.request_id).to.be.a("string")
 //   expect(resBody.esbResponse.response.status-code).to.be.a("string")
    

})   

});

it('Karza AddressMatching', () => {
    
    const data6={
        "esbRequest": {
            "header": {
                "apiVersion": "1",
                "channelID": "qw",
                "deviceID": "2",
                "languageId": "3",
                "serviceName": "AddressMatching",
                "os": "4",
                "osVersion": "5",
                "uniqueReqNo": "12756922143",
                "timestamp": "2019-02-20T00:00:00",
                "geoLocation": "8"
            },
            "request": {
           "address1": "SR NO-52,ROAD NO-3 NR DATA MANDIR 411015",
           "address2": "ROAD NO-3, SR NO-52 411015"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data6)
.then((res) => {
    console.log(res.body);
    let resBody=res.body;
    expect(res.statusCode).to.eq(200)
    expect(resBody.esbResponse.header.apiVersion).to.be.a("string")
    expect(resBody.esbResponse.header.channelID).to.be.a("string")
    expect(resBody.esbResponse.header.deviceID).to.be.a("string")
    expect(resBody.esbResponse.header.languageId).to.be.a("string")
    expect(resBody.esbResponse.header.serviceName).to.be.a("string")
    expect(resBody.esbResponse.header.os).to.be.a("string")
    expect(resBody.esbResponse.header.osVersion).to.be.a("string")
    expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
    expect(resBody.esbResponse.header.timestamp).to.be.a("string")
    expect(resBody.esbResponse.header.geoLocation).to.be.a("string")
    expect(resBody.esbResponse.header.isSuccess).to.be.a("boolean")
    expect(resBody.esbResponse.header.statusCode).to.be.a("string") 
    expect(resBody.esbResponse.header.message).to.be.a("string")
})   

});
it('Karza PNG Authentication', () => {
    
    const data7={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "ESB",
                "deviceID": "",
                "languageId": "",
                "serviceName": "PNGAUTHENTICATION",
                "os": "",
                "uniqueReqNo": "testbre61212",
                "timestamp": "q1211",
                "geoLocation": ""
            },
    
            "request": {
                "consent": "Y",
                "consumerId": "1000082138",
                "bpNo": "",
                "serviceProvider": "AG"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data7)
.then((res) => {
    console.log(res.body);
    let resBody=res.body;
    expect(res.statusCode).to.eq(200)
    expect(resBody.esbResponse.header.apiVersion).to.be.a("string")
    expect(resBody.esbResponse.header.channelID).to.be.a("string")
    expect(resBody.esbResponse.header.deviceID).to.be.a("string")
    expect(resBody.esbResponse.header.languageId).to.be.a("string")
    expect(resBody.esbResponse.header.serviceName).to.be.a("string")
    expect(resBody.esbResponse.header.os).to.be.a("string")
    expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
    expect(resBody.esbResponse.header.timestamp).to.be.a("string")
    expect(resBody.esbResponse.header.geoLocation).to.be.a("string")
    expect(resBody.esbResponse.header.isSuccess).to.be.a("boolean")
    expect(resBody.esbResponse.header.statusCode).to.be.a("string") 
    expect(resBody.esbResponse.header.message).to.be.a("string")
    expect(resBody.esbResponse.header.message).length(62)
})   

});
it('Karza LPG Authentication', () => {
    
    const data8={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "ESB",
                "deviceID": "",
                "languageId": "",
                "serviceName": "LPGIDAUTHENTICATION",
                "os": "",
                "uniqueReqNo": "testbre61212",
                "timestamp": "q1211",
                "geoLocation": ""
            },
    
            "request": {
                "lpgId" : "10000000050431060"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data8)
.then((res) => {
    console.log(res.body);
    let resBody=res.body;
    expect(res.statusCode).to.eq(200)
    expect(resBody.esbResponse.header.apiVersion).to.be.a("string")
    expect(resBody.esbResponse.header.channelID).to.be.a("string")
    expect(resBody.esbResponse.header.deviceID).to.be.a("string")
    expect(resBody.esbResponse.header.languageId).to.be.a("string")
    expect(resBody.esbResponse.header.serviceName).to.be.a("string")
    expect(resBody.esbResponse.header.os).to.be.a("string")
    expect(resBody.esbResponse.header.uniqueReqNo).to.be.a("string")
    expect(resBody.esbResponse.header.timestamp).to.be.a("string")
    expect(resBody.esbResponse.header.geoLocation).to.be.a("string")
    expect(resBody.esbResponse.header.isSuccess).to.be.a("boolean")
    expect(resBody.esbResponse.header.statusCode).to.be.a("string") 
    expect(resBody.esbResponse.header.message).to.be.a("string")
})   

});
});
import supertest from "supertest"
import quiklyz from "../Confiq/quiklyz";
import { assert, expect } from 'chai';
const request = supertest(quiklyz.baseUrlVkyc)
const request1 = supertest(quiklyz.baseUrlVkycCustomer)
const request2 = supertest(quiklyz.customerToken)
let endpoint = quiklyz.vkycURL
let endpoint1=quiklyz.addCustomerUrl
let endpoint2=quiklyz.customerTokenURL
let karzaToken
describe('quiklyz', () => {
    it('VKYC Session', () => {
        const data={
            "productId": [
              "video_kyc"
            ]
        }  
        return request

    .post(`${endpoint}`)
    .set('x-karza-key', 'kXhA2j9O12h6W93S')
    .set('Content-Type', 'application/json')
    .send(data)
    .then((res) => {
        console.log(res.body);
        karzaToken = res.body.result.data.karzaToken;
        let resBody=res.body;
        expect(res.statusCode).to.eq(200)
        expect(resBody.requestId).to.be.a("string")
        expect(resBody.result.data.karzaToken).to.be.a("string")
        expect(resBody.result.success).to.be.a("boolean")
        expect(resBody.result.reason).to.be.a("null")

        
    })        
});
    it('Add Customer', () => {
        const data1={
            "customerId": "Customer50678",
            "consent": "Y",
            "applicantFormData": {
                "applicationType": "GENERAL",
                "applicantType": "APPLICANT",
                "applicationId": "Cust1AppID1",
                "phone": "8128448584",
                "firstName": "UserNew",
                "email": "abc.r@karza.in",
                "lastName": "Ramanuj"
            },
            "autoSchedule": false
        }
        return request1

        .post(`${endpoint1}`)
        .set('karzatoken', `${karzaToken}`)
        .set('Content-Type', 'application/json')
        .send(data1)
        .then((res) => {
            console.log(res.body);
            let resBody=res.body;
        expect(res.statusCode).to.eq(200)
        expect(resBody.statusCode).to.be.an("number")
        expect(resBody.result.data.customerId).to.be.a("string")
        expect(resBody.result.data.transactionId).to.be.a("string")
         expect(resBody.result.success).to.be.a("boolean")
        expect(resBody.result.reason).to.be.a("null")
        expect(resBody.requestId).to.be.a("string")

        })        
});
it('Generate customer token', () => {
    return request2
    .get(`${endpoint2}`)
    .set('karzatoken', `${karzaToken}`)
    .then((res) => {
        console.log(res.body);
        let resBody=res.body;
        expect(res.statusCode).to.eq(200)
        expect(resBody.statusCode).to.be.an("number")
        expect(resBody.result.data.userToken).to.be.a("string")
         expect(resBody.result.success).to.be.a("boolean")
        expect(resBody.result.reason).to.be.a("null")
        expect(resBody.requestId).to.be.a("string")
    })        
});


});
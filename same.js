import supertest from "supertest"
import { expect } from 'chai'
import dms from '../Confiq/dms'
const request = supertest(dms.baseUrl)
let tokenGen = dms.ticketGenURL
let dataPassing = dms.dataPassingURL
let auth = dms.token
let getToken,sasTok
//let sasTok
let sas
let docID
describe('DMS API', () => {
    it('Token Generation', () => {
        const data = `grant_type=client_credentials`;
        return request
            .post(`${tokenGen}`)
            .set('Authorization', `${auth}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send(data)
            .then((res) => {
                console.log(res.body);
                getToken = res.body.access_token;
                console.log(getToken)
                expect(res.body.refresh_token_expires_in).to.be.an("number")
                expect(res.body.token_type).to.be.a("string")
                expect(res.body.issued_at).to.be.a("string")
                expect(res.body.access_token).to.be.a("string")
                expect(res.body.application_name).to.be.a("string")
                expect(res.body.scope).to.be.a("string")
                expect(res.body.expires_in).to.be.an("number")
                expect(res.body.refresh_count).to.be.a("string")
                expect(res.body.status).to.be.a("string")
                expect(res.statusCode).to.eq(200)
                //expect(res.body.status).equals('approved')
            })
    });


    it('Data passing', () => {

        const data1 = {
            "docsetId": 1,
            "metadata": {
                "1": "100000",
                "2": "RE",
                "3": "KYC",
                "4": "PAN",
                "5": "CUSTID0001",
                "6": "Avijitkumar Bhowmik",
                "7": "SEC",
                "8": "LAP",
                "9": "type",
                "10": "subtype",
                "11": "01/01/2022",
                "12": "Avijitkumar Bhowmik",
                "13": "27021792",
                "14": "CRemarks",
                "15": "01/01/2022",
                "16": "Avijitkumar Bhowmik",
                "17": "27021792",
                "18": "RRemarks",
                "19": "true",
                "20": "inProgress",
                "21": "LN123456789",
                "22": "2022-2023",
                "24": "systemRef",
                "27": "ALVPB6509R",
                "28": "DL123456789",
                "29": "PP1234567890",
                "30": "VID1234567890",
                "31": "01/01/2022",
                "32": "01/01/2022",
                "33": "UCP",
                "34": "ucp@mahindra.com",
                "35": "test.pdf",
                "36": "321",
                "37": "BCF/19/00010000",
                "38": "BCF/19/00010000",
                "39": "RE"
            }
        }

        return request
            .post(`${dataPassing}`)
            .set('Authorization', `Bearer ${getToken}`)
            .set('user-id', 'ucp@mahindra.com')
            .set('Content-Type', 'application/json')
            .send(data1)
            .then((res) => {
                console.log(res.body);
                expect(res.statusCode).to.eq(200)
                docID = res.body.result.documentId;
                sasTok = res.body.result.sasToken;
                sas = (sasTok?.substr(26));
                console.log(sas)

            });
    })
    it('Updating', async () => {
        return request
            .put(`${sas}`)
            .set('x-ms-blob-type', 'BlockBlob')
            .set('x-ms-blob-content-disposition', 'attachment')
            .set('Content-Type', 'application/octet-stream')
            .then((res) => {
                console.log(res.body);
                expect(res.statusCode).to.eq(201)

            })
    })
    it('Fetch', () => {
        return request
            .get(`${docID}`)
            .set('Authorization', `Bearer ${getToken}`)
            .set('user-id', 'ucp@mahindra.com')
            .then((res) => {
                console.log(res.body);
                expect(res.statusCode).to.eq(404)
            })

    })



    // it('401 Authentication failed', async () => {
    //     const data = `grant_type=client_credentials`;
    //     return request
    //         .post('oauth/cc/v1/token')
    //         .set('Authorization', 'Basic mNEdmxwQTNySnBxOW5nbWxJQ0JCR1FMbFp1QzZwMFZDaHhBVFpiZ3BwNzlWcjViOmtZbEJjZHlnS3FlS3ZGcnNZUlFQYjhHRlBRbnNKa1hUUUM1YnpTcG9ybTNJZXZHY3doY3JiVEUydjNuY2xNVEc==')
    //         .set('Content-Type', 'application/x-www-form-urlencoded')
    //         .set('Accept', 'application/json')
    //         .send(data)
    //         .then((res) => {
    //             console.log(res.body);
    //             expect(res.statusCode).to.eq(401)
    //             expect(res.body.error).to.eq('invalid_client');
    //         });

    // });
});

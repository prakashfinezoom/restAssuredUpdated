import supertest from "supertest"
import { assert, expect } from 'chai'
import dms from '../Confiq/dms'
const request = supertest(dms.baseUrl)
let tokenGen = dms.ticketGenURL
let dataPassing = dms.dataPassingURL
let auth = dms.token
let getToken,sasTok
//let sasTok
let sas
describe('DMS API', () => {
    
    it('Token Generation request body', () => {
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
            })
        })


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

        console.log(data1.metadata[37])
        assert.typeOf(data1.metadata[17],'string')
       // assert.lengthOf(data1.metadata[1],'6')
       
       
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
            })
        })
    })
        



            
    

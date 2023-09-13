import supertest from "supertest"
import quiklyz from "../Confiq/quiklyz";
import { assert, expect } from 'chai'
const request = supertest(quiklyz.baseUrlcrm)
let endpoint = quiklyz.nsdlURL
describe('quiklyz', () => {
    it('NSDL Pan verification', () => {
        const data={
            "PanNo":"AKKPH5250K",
            "ModuleCode":"LP",
            "ChkNSDL":"Yes",
            "AccessType":"WS",
            "UserId":""
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
            expect(resBody.Pan_Response[0].FillerFirst).to.be.a("string")
            expect(resBody.Pan_Response[0].FillerSecond).to.be.a("string")
            expect(resBody.Pan_Response[0].FillerThirdDate).to.be.a("string")
            expect(resBody.Pan_Response[0].FirstName).to.be.a("string")
            expect(resBody.Pan_Response[0].LastName).to.be.a("string")
            expect(resBody.Pan_Response[0].LastUpdate).to.be.a("string")
            expect(resBody.Pan_Response[0].MiddleName).to.be.a("string")
            expect(resBody.Pan_Response[0].PanNumber).to.be.a("string")
            expect(resBody.Pan_Response[0].PanRemarks).to.be.a("string")
            expect(resBody.Pan_Response[0].PanResponseStatus).to.be.a("string")
            expect(resBody.Pan_Response[0].PanStatus).to.be.a("string")
            expect(resBody.Pan_Response[0].PanTitle).to.be.a("string")


        })        
    });

    });   
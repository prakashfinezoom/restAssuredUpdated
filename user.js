import supertest from "supertest";
import { expect } from 'chai';
const request = supertest('https://dev65963.service-now.com/')
//const token= YWRtaW46RStpQmhORnB6MzUk;
describe('New incident', () => {

    it('Request body validation', () => {
        const data = {

            "short_description": "new Incident",
            "category": "hardware"
        }
        return request
            .post('api/now/table/incident')
            .set('Authorization', 'Basic YWRtaW46RStpQmhORnB6MzUk')
            .send(data)
            .then(() => {
                expect(data.short_description).to.be.a("string");
                expect(data.category).to.be.a("string");
            });

    })

})







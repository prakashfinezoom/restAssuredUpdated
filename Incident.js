import { expect } from "chai";
import supertest from "supertest";
const request = supertest('https://dev65963.service-now.com/')
//const token= YWRtaW46RStpQmhORnB6MzUk;
describe('New incident',()=>
{

    it('Incident creation',()=>
    {
        const data ={
            
                "short_description": "new Incident",
                "category": "hardware"
        }
        expect(data.short_description).to.be.a("string");
        expect(data.category).to.be.a("string")
        expect(data.short_description).length(12)
        expect(data.category).length(8)
        return request
        .post('api/now/table/incident')
        .set('Authorization', 'Basic YWRtaW46RStpQmhORnB6MzUk')
        //.set("Authorization", `Basic ${token}`)
        .send(data)
        .then((res) =>{
              console.log(res.body);
        });

    })

})
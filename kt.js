import { expect } from "chai";
import supertest from "supertest";
const request = supertest('https://reqres.in/')
describe.only('New request',()=>
{
    it('POST Method',()=>
    {
        const data ={
            "name": "morpheus",
            "job": "leader"
        }
         expect(data.name).to.be.a("string");
         expect(data.job).to.be.a("string");
         expect(data.name).length(8);
        return request
        .post('api/users')
        .send(data)
        .then((res) =>{
              console.log(res.body);
              expect(res.statusCode).to.eq(201)
        });
    })
    it('GET Method',()=>
    {
        return request
            .get('api/unknown')
            .then((res) => {
                console.log(res.body);
                expect(res.statusCode).to.eq(200)
            })

    });
    

})
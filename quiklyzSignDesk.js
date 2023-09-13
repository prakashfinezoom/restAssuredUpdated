import supertest from "supertest"
import quiklyz from "../Confiq/quiklyz";
import { assert, expect } from 'chai'
const request = supertest(quiklyz.baseUrlcrm)
let endpoint = quiklyz.signDeskEstampAndEsign
let endpoint1=quiklyz.signDeskEsignStatus
describe('quiklyz', () => {
    it('Sign Desk EstampAndEsign', () => {
        const data={
            "reference_id": "2021082228",
            "appl_no": "2021081803",
            "source_type": "template",
            "initiator_email_id": "bhowal.sreeja2@mahindra.com",
            "self_signer": "false",
            "document_info": {
                "docket_title": "Test1628054013",
                "docket_description": "descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest descriptiontest ",
                "docket_remark": "xxxx",
                "signature_sequence": "sequential",
                "signature_type": "digital"
            },
            "esign_link_validity": 365,
            "signer_info": [
                {
                    "signer_ref_id": "abc",
                    "signer_name": "Ramya KV",
                    "signer_email": "ramya.kv@abc.com",
                    "signer_remarks": "fghj",
                    "signer_mobile": "9000650031",
                    "esign_type": "otp",
                    "signing_mode": "aadhaar",
                    "access_type": "otp"
                }
            ],
            "first_party_name": "Mahindra and Mahindra",
            "second_party_name": "Ramya",
            "first_party_address": {
                "street_address": "aasd",
                "locality": "sdf",
                "city": "asd",
                "state": "KA",
                "pincode": "560006",
                "country": ""
            },
            "second_party_address": {
                "street_address": "sdfsd",
                "locality": "ssdfd",
                "city": "sdfg",
                "state": "KA",
                "pincode": "560006",
                "country": ""
            },
            "document_reference_no": "2021081803",
            "stamp_duty_paid_by": "First Party",
            "document_category": "1",
            "stamp_amount": "200",
            "stamp_state": "KA",
            "consideration_amount": 12,
            "duty_payer_phone_number": "9449651131",
            "template_info": {
                "template_id": "6103c47a3ad89441ee72c339",
                "template_params": {
                    "agreement_date": "27/12/2019",
                    "place_of_execution": "xxxx",
                    "borrower_name": "xx",
                    "borrower_address": "XXX, XXX, 6435",
                    "name_of_coborrower": "XXXX",
                    "name_of_guarantor": "XXXX",
                    "loan_amount": "5500",
                    "loan_amount_inwords": "Fife thousand five hundrade only",
                    "loan_account_number": "XXXX"
                }
            }
        }
              
        
        return request

        .post(`${endpoint}`)
        .set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
        .set('Content-Type', 'application/json')
        .set('Request_token','100001')
        .set('Channel','LEASINGPORTAL')
        .set('esign_required','Y')
        .send(data)
        .then((res) => {
            console.log(res.body);
            let resBody=res.body;
        expect(res.statusCode).to.eq(200)
        expect(resBody.status).to.be.a("string")
        expect(resBody.message).to.be.a("string")
        expect(resBody.reference_id).to.be.a("string")
        expect(resBody.response_time_stamp).to.be.a("string")
        //expect(resBody.stamp_paper_number).to.be.a("number")
        })        
    });
    it('Sign Desk EstampAndEsignNew', () => {
        const data={
            "reference_id": "2021122f0787cs20220512077",
            "appl_no": "2021081803",
            "source_type": "template",
            "initiator_email_id": "quiklyz.service@mahindra.com",
            "self_signer": "false",
            "document_info": {
                "docket_title": "Leasing Agreement",
                "docket_description": "Leasing Agreement for Quiklyz",
                "docket_remark": "xxxx",
                "signature_sequence": "sequential",
                "signature_type": "digital"
            },
            "esign_link_validity": 365,
            "first_party_name": "Mahindra and Mahindra",
            "second_party_name": "Anil Yadav",
            "first_party_address": {
                "street_address": "aasd",
                "locality": "sdf",
                "city": "asd",
                "state": "KA",
                "pincode": "560006",
                "country": ""
            },
            "second_party_address": {
                "street_address": "sdfsd",
                "locality": "ssdfd",
                "city": "sdfg",
                "state": "KA",
                "pincode": "560006",
                "country": ""
            },
            "document_reference_no": "2021081803",
            "stamp_duty_paid_by": "First Party",
            "document_category": "1",
            "stamp_amount": "100",
            "stamp_state": "KA",
            "consideration_amount": 100,
            "duty_payer_phone_number": "9449651131",
            "template_info": {
                "template_id": "623093917d5a2bda75254e7e",
                "template_params": {
                    "date":"11",
                    "month": "April",
                    "year":"2022",
                    "cust_name": "Anil Yadav",
                    "age": "35",
                    "pan_aadhar_passport_no": "AKLPK1234P",
                    "city_village": "Maharastra",
                    "address": "C101/3,Rama Vihar",
                    "make_name": "Mahindra",
                    "variant_name": "1.5 W4",
                    "colour": "Black",
                    "tenure": "48",
                    "lock_in": "12",
                    "lease_rent": "21299",
                    "security_deposit": "5000",
                    "mileage": "20",
                    "excess_km_charge": "4",
                    "preclose_amount_one": "39799",
                    "preclose_amount_two": "28799",
                    "preclose_amount_three": "24899",
                    "preclose_amount_four": "22699",
                    "preclose_example_one": "(28,799 - 24,899) x 18 + 24,899 = 95,099",
                    "preclose_example_two": "(39,799 - 24,899) x 24 + 39,799 x (12 - 10) + 24,899 = 4,62,097",
                    "lesse": "Anil Yadav",
                    "esign_two": "Anil Yadav",
                    "addr": "C101/3,Rama Vihar",
                    "id_proof_name_number": "AKLPK1234P",
                    "date_of_agreement_by_lesser": "11/04/2022",
                    "date_of_agreement_by_lesse": "11/04/2022"
                }
            },
            "estamping_no": "",
            "signer_info": [
                {
                    "signer_ref_id": "abc",
                    "signer_name": "Anil Yadav",
                    "signer_email": "anilkumar.s@bluescopetech.com",
                    "signer_remarks": "fghj",
                    "signer_mobile": "9665894707",
                    "esign_type": "otp",
                    "signing_mode": "aadhaar",
                    "access_type": "otp",
                    "sequence": "1"
                }
            ]
        }        
        return request

        .post(`${endpoint}`)
        .set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
        .set('Content-Type', 'application/json')
        .set('Request_token','100001')
        .set('Channel','LEASINGPORTAL')
        .set('esign_required','Y')
        .send(data)
        .then((res) => {
            console.log(res.body);
            let resBody=res.body;
        expect(res.statusCode).to.eq(200)
        expect(resBody.status).to.be.a("string")
        expect(resBody.message).to.be.a("string")
        expect(resBody.error_code).to.be.a("string")
        expect(resBody.reference_id).to.be.a("string")
        expect(resBody.response_time_stamp).to.be.a("string")
        //expect(resBody.stamp_paper_number).to.be.a("number")
        })        
    });
    it('SignDesk Esign Status', () => {
        const data={ 
            "appl_no": "2021091403",
            "reference_id": 2021091135,
            "transaction_id": "TXNLFN5Z6SS16",
            "document_id": "6152b0aaedd6ce1e0bebcb12"
        }
        
        return request

        .post(`${endpoint1}`)
        .set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
        .set('Content-Type', 'application/json')
        .send(data)
        .then((res) => {
        console.log(res.body);
        let resBody=res.body;
        expect(res.statusCode).to.eq(200)
        expect(resBody.status).to.be.a("string")
        expect(resBody.signer_info[0].signer_id).to.be.a("string")
        expect(resBody.signer_info[0].signature_sequence).to.be.an("number")
        expect(resBody.signer_info[0].status).to.be.a("string")
        expect(resBody.appl_no).to.be.a("string")
        expect(resBody.transaction_id).to.be.a("string")
        expect(resBody.reference_id).to.be.an("number")
        expect(resBody.document_id).to.be.a("string")
        })        
    });
    });   
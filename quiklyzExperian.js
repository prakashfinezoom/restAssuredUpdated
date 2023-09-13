import supertest from "supertest"
import quiklyz from "../Confiq/quiklyz";
const request = supertest(quiklyz.baseUrlcrm)
let endpoint = quiklyz.experianRegularMatch
let endpoint1= quiklyz.experianAnalytics
describe('quiklyz', () => {
    it('Experian Regular Match', () => {
        const data={
            "INProfileRequest": {
                    "Application": {
                    "CustomerReferenceID": "1234",
                    "FTReferenceNumber": "1234",
                    "EnquiryReason": "99",
                    "FinancePurpose": "99",
                    "AmountFinanced": "50000",
                    "DurationOfAgreement": "20",
                    "ScoreFlag": "1",
                    "PSVFlag": ""
                },
                "Applicant": {
                    "Surname": "T",
                    "FirstName": "LAKSHMI",
                    "MiddleName1": "",
                    "MiddleName2": "",
                    "MiddleName3": "",
                    "GenderCode": "2",
                    "IncomeTaxPAN": "ATLPT0223G",
                    "PAN_Issue_Date": "",
                    "PAN_Expiration_Date": "",
                    "PassportNumber": "",
                    "Passport_Issue_Date": "",
                    "Passport_Expiration_Date": "",
                    "VoterIdentityCard": "",
                    "Voter_ID_Issue_Date": "",
                    "Voter_ID_Expiration_Date": "",
                    "Driver_License_Number": "",
                    "Driver_License_Issue_Date": "",
                    "Driver_License_Expiration_Date": "",
                    "Ration_Card_Number": "",
                    "Ration_Card_Issue_Date": "",
                    "Ration_Card_Expiration_Date": "",
                    "Universal_ID_Number": "",
                    "Universal_ID_Issue_Date": "",
                    "Universal_ID_Expiration_Date": "",
                    "DateOfBirth": "19920116",
                    "STDPhoneNumber": "",
                    "PhoneNumber": "8985488284",
                    "Telephone_Extension": "",
                    "Telephone_Type": "",
                    "MobilePhone": "8985488284",
                    "EMailId": "vids.reddy93@gmail.com"
                },
                "Details": {
                    "Income": "",
                    "MaritalStatus": "",
                    "EmployStatus": "",
                    "TimeWithEmploy": "",
                    "NumberOfMajorCreditCardHeld": ""
                },
                "Address": {
                    "FlatNoPlotNoHouseNo": "FlatNO205",
                    "BldgNoSocietyName": "VasaviNagar",
                    "RoadNoNameAreaLocality": "",
                    "City": "Nellore",
                    "Landmark": "",
                    "State": "27",
                    "PinCode": "524305"
                },
                "AdditionalAddressFlag": {
                    "Flag": ""
                },
                "AdditionalAddress": {
                    "FlatNoPlotNoHouseNo": "",
                    "BldgNoSocietyName": "",
                    "RoadNoNameAreaLocality": "",
                    "City": "",
                    "Landmark": "",
                    "State": "",
                    "PinCode": ""
                }
            }
        }
        
        
        return request

        .post(`${endpoint}`)
        .set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
        .set('Content-Type', 'application/json')
        .set('Scrub_Type','RM')
        .set('Request_Token','1001')
        .send(data)
        .then((res) => {
            console.log(res.body);
        })        
    });
    it('Experian smart match', () => {
        const data1={
            "INProfileRequest": {
                "Applicant": {
                     "SurName": "Unmesh",
                    "FirstName": "jadhao",
                    "MobilePhone": "9527345500"
                }
            }
        }
        return request

        .post(`${endpoint}`)
        .set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
        .set('Content-Type', 'application/json')
        .set('Scrub_Type','RM')
        .set('Request_Token','1005')
        .send(data1)
        .then((res) => {
            console.log(res.body);
        })        
    });
    it('Experian Analytics', () => {
        const data2={
            "Bureau_Identifier":"040621111458796458000",
            "Additional_Parameter": {
                    "Self_Declared_Income": "50000",
                    "Monthly_Lease_Rental": "5000",
                    "Tenure": "10",
                    "Verified_income": "50000",
                    "Appl_No": "1290",
                    "Make": "",
                    "Model": "",
                    "Variant": "",
                    "Asset_Id": "",
                    "Posidex":"",
                    "Employment_Type":"",
                    "Hunter":"",
                    "Type_Of_Service": "REGULAR_MATCH"
                }
            }
            
        return request

        .post(`${endpoint1}`)
        .set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
        .set('Content-Type', 'application/json')
        .send(data2)
        .then((res) => {
            console.log(res.body);
        })        
    });

    });   
// http://jeonghwan-kim.github.io/%EC%9D%B5%EC%8A%A4%ED%94%84%EB%A0%88%EC%8A%A4-api-%EC%84%9C%EB%B2%84-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0/
// https://stackoverflow.com/questions/35234718/how-to-unit-test-express-router-routes
// https://jestjs.io/docs/en/tutorial-async
// https://docs.pact.io/
var pet = require("./pet");

it("should 200", async ()=> {
    let result = await pet.addPet();
    
    expect(result).toStrictEqual({
        status: 200,
        data: "addPet ok!"
    });
});
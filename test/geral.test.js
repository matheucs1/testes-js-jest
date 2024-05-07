let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3131",()=> {
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
});

test("Deve retornar azul como cor favorita do Matheus", ()=> {
    return request.get("/cor/matheus").then(res => { 
        expect(res.statusCode).toEqual(200);
        expect(res.body.cor).toEqual("azul")});
});
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
require("./database/connection");
const routes_1 = __importDefault(require("./routes"));
const handler_1 = __importDefault(require("./errors/handler"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads')));
app.use(handler_1.default);
//Parâmetros
//Query Params: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (identificar um recurso)
//Body: http://localhost:3333/users 
app.listen(process.env.PORT || 3333);
//Driver nativo(requisiçoes normais), query builder(req com js), ORM (cada reg na tabela uma classe obj)

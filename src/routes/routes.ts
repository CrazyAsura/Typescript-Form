import { config } from "dotenv";
config()
const app = require('express');
const port: string = process.env.PORT || "4006";
const get = (path: string, controller: Function) => {
    app.get(path, controller)
};
const post = (path: string, controller: Function) => {
    app.post(path, controller)
};
const pacth = (path: string, controller: Function) => {
    app.pacth(path, controller)
};
const put = (path: string, controller: Function) => {
    app.put(path, controller)
};
const deleti = (path: string, controller: Function) => {
    app.delete(path, controller)
};

app.listen(port, console.log(`Execução na porta: ${port}`))

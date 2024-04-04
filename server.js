const express = require('express');
const app = express();
let {run_db_server} = require('./lib/config/mongodb');
const globalErrorHandler = require('./lib/middlewares/handlingGlobalError');
const PORT = 9000;
const subjectRoutes = require('./lib/routes/subject/index');
const testRoutes = require('./lib/routes/tests/index');
run_db_server();

app.use(express.json());
app.use("/api/v1/subjects", subjectRoutes);
app.use("/api/v1/tests", testRoutes);



app.use((err, req, res, next) =>{
    // stack
    globalErrorHandler(err, req, res, next);
});
app.listen(PORT, console.log(`Server is up and running on ${PORT}`));
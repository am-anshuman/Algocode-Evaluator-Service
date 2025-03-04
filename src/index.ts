import express from "express";
import serverConfig from "./config/server.config";
import apiRouter from "./routes";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import sampleWorker from "./workers/sampleWorker";

const app = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server started at port ${serverConfig.PORT}`);

    sampleWorker('SampleQueue');
    
    sampleQueueProducer('SampleJob', {
        name: "Aman",
        company: "Inovaare",
        position: "Associate Product Engineer",
        location: "BBSR"
    }, 2);

    sampleQueueProducer('SampleJob', {
        name: "Anshuman",
        company: "Inovaare",
        position: "Associate Product Engineer",
        location: "BBSR"
    }, 1);
})
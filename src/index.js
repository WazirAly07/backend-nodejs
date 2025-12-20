import app from './app.js';
import {connectDb} from './db/index.js';

connectDb()
.then(() => {
    app.listen(8000, () => {
        console.log("Server is running on port 8000");
    });
})
.catch((err) => {
    console.log("Failed to connect to database:", err.message);
});
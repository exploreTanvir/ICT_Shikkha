const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.post('/api/compile', (req, res) => {
    const { code } = req.body;
    const filePath = path.join(__dirname, 'temp.c');

    // Save the C code to a temporary file
    fs.writeFileSync(filePath, code);

    // Compile the C code
    exec(`gcc ${filePath} -o temp.out`, (compileErr, stdout, stderr) => {
        if (compileErr) {
            // Send compilation errors back to the frontend
            return res.json({ error: stderr });
        }

        // Run the compiled C code
        exec('./temp.out', (runErr, runStdout, runStderr) => {
            if (runErr) {
                // Send runtime errors back to the frontend
                return res.json({ error: runStderr });
            }

            // Send the output of the program back to the frontend
            res.json({ output: runStdout });
        });
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>Task 5 - Kubernetes</title>
            </head>
            <body>
                <h1>Hello from Kubernetes! 🚀</h1>
                <h2>Task 5: Minikube Deployment</h2>
                <p>Node.js application running inside a Kubernetes Pod.</p>
                <p>Deployment and Service are working successfully.</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Kubernetes Node.js app running on port ${PORT}`);
});
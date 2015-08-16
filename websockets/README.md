# WebScokets
---

WebSockets can build chat room, real-time notification systems etc.

## Before WebSockets
1. traditional http is `stateless`
    > that mean a web server will connect to a web server, get the connect, and then close the connection. This made it very difficult to do a live features on a web site.
2. initial workaround: Comet
    > It was a technology that use iFrames,JavaScript and Long Polling to get around http statelessness. JavaScript would make another request to the server just as the last one was timing out.
3. second workaround: Flash
    > Flash has the advantage of working the same on every platform that Flash is installed on. Of cousrse, the downside to this is that you need to have Flash installed on the client-side in order for it to work.


## Why web socket
1. bi-directional communication between browser and server
2. use TCP instead of HTTP
3. native to the browsers that support it.
    - no hacks
    - no IFrames
    - no Flash
4. disadvantage: inconsistent support

## Frameworks recommend - Socket.io

- Socket.io is a front-end and back-end solution designed for Node.
- font-end and back-end API in JavaScript
- comes with all the code you need
- automatically detects and uses the best protocal


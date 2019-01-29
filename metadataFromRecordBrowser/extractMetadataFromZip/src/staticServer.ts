// import { createReadStream } from "fs";
// import { createServer, IncomingMessage, Server, ServerResponse } from "http";
// import { join } from "path";

// // TODO moved to misc
// export async function staticServer(basePath: string, port = 9999, killTimeout=0): Promise<Server> {
//   let server: Server
//   if(killTimeout){
//     setTimeout(() => {
//       server.emit('close')
//     }, killTimeout);
//   }
//   return createServer((req: IncomingMessage, res: ServerResponse) => {
//     var stream = createReadStream(join(basePath, req.url||''));
//     stream.on('error', function () {
//       res.writeHead(404);
//       res.end();
//     });
//     stream.pipe(res);
//   }).listen(port);
// }

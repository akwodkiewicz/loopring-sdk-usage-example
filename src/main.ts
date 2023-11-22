// just an example import that is eventually transpiled into a `require` if the project is CJS
import { info } from "node:console";
import * as nodeFetch from "node-fetch";
import * as sdk from "@loopring-web/loopring-sdk";
async function main() {
  info("Hello, World!");

  info("imported nodeFetch:", nodeFetch);
  info("imported loopringSdk:", sdk);
}

main().then(() => {
  process.exit(0);
});

// just an example import that is eventually transpiled into a `require` if the project is CJS
import { info } from "node:console";

async function main() {
  info("Hello, World!");

  // Dynamic import of an ESM library (it's impossible to import it statically)
  const nodeFetch = await import("node-fetch");
  info("imported default:", nodeFetch);

  // Dynamic import of @loopring-web/loopring-sdk that claims to be ESM
  const library = await import("@loopring-web/loopring-sdk"); // runtime error
  info("imported default:", library);
}

main().then(() => {
  process.exit(0);
});

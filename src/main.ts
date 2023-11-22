import { info } from "node:console";

async function main() {
  info("Hello, World!");
  /**
   * This line causes a runtime error:
   *    ReferenceError: module is not defined in ES module scope
   */
  const library = await import("@loopring-web/loopring-sdk");
}

main().then(() => {
  process.exit(0);
});

import { getInput } from "@actions/core";

export async function run() {
    console.log("Hello World" + getInput("name"));
}

if (!process.env.JEST_WORKER_ID) {
    run();
  }
  
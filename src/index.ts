import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

export async function run() {
  const token = getInput("gh-token");
  const label = getInput("label");

//  const octokit = getOctokit(token);
//  const pullRequest = context.payload.pull_request;

  try {
    console.log("context", context.payload);
  } catch (error) {
    setFailed((error as Error)?.message ?? "Unknown error");
  }
}

if (!process.env.JEST_WORKER_ID) {
  run();
}

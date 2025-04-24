import * as child_process from "child_process";

function invokeGit(args: readonly string[]): Promise<string> {
  const resolvers = Promise.withResolvers<string>();
  child_process.execFile("git", args, {
    cwd: import.meta.dirname,
  }, (error, stdout) => {
    if (error) {
      resolvers.reject(error);
    } else {
      resolvers.resolve(stdout.trim());
    }
  });
  return resolvers.promise;
}

/** Gets the current git HEAD value. */
export function getGitHead(): Promise<string> {
  return invokeGit(["rev-parse", "HEAD"]);
}

export async function getGitVersionSpec(): Promise<string> {
  const tagSpec = await invokeGit(["describe", "--tags", "--match", "v-*"]);
  return tagSpec;
}

export function getGitCommitDate(revision: string): Promise<string> {
  return invokeGit(["show", "-s", "--format=%ci", revision]);
}

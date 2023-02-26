import path from "path";
import shell from "../utils/shell";

export async function download(repo: string, targetPath: string): Promise<boolean>{
  const clone = await shell("get", ["clone", repo, targetPath])
  if(clone){
    return await shell("rm", ["-rf", path.join(targetPath, ".git")])
  }else{
    return false
  }
}

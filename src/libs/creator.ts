import { download } from "./download";

const TEMPLATE_CONFIG_PATH = "git@github.com:cell-wall/redcell-template.git";

class Creator{
  constructor(){};
  async exec(path: string): Promise<boolean>{
    // step0：获取模板
    const temp = TEMPLATE_CONFIG_PATH;
    // step1：将模板复制到指定目录下
    const ret = await download(temp, path);
    return ret;
  }
}

export default Creator;

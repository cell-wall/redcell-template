import path from "path";
import fs from "fs";
import Creator from "./creator";

class Project{
  private _name: string;
  private _path: string;
  private _creator: Creator = new Creator()
  private _err: string = "";
  constructor(name: string) {
    this._name = name;
    const realPath = fs.realpathSync(process.cwd())
    this._path = path.join(realPath, name)
  }

  get name(): string{
    return this._name;
  }

  get path(): string{
    return this._path;
  }

  get error(): string{
    return this._err
  }

  exists(): boolean{
    return fs.existsSync(this._path);
  }
  async create(): Promise<boolean>{
    if(this.exists()){
      this._err = `${this._path} already exists`;
      return false;
    }
    const ret = await this._creator.exec(this._path);
    if(ret === false){
      this._err = `create project to ${this._path} fail`;
    }
    return ret;
  }
}

export default Project;
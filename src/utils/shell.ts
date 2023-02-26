import spawn from "cross-spawn";

function shell(command: string, args: string[]): Promise<boolean>{
  return new Promise<boolean>((resolve, reject)=>{
    const process = spawn(command, args);
    // 监听进程结束
    process.on("close",(code: number)=>{
      const ret: boolean = code === 0;
      resolve(ret)
    })
    // 监听进程报错
    process.on("error",(err: Error)=>{
      reject(err)
    })

  })
}

export default shell;
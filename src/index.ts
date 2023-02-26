import commander from "commander";
import Project from "./libs/project";

const program = new commander.Command();
const version: string = process.env.npm_package_version || '0.0.0';

program
  .version(version)
  .usage('<command> [options]');

program
  .command('rct create <app-name>')
  .description('使用【redcell-template】创建一个新项目')
  .action(async function (location: string) {
    const project = new Project(location);
    const ret = await project.create()
    if (ret) {
      console.log('finish')
    } else {
      console.log(`fail: ${project.error}`)
    }
  });

  program.parse(process.argv);
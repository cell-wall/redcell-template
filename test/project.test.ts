import assert from 'power-assert';
import Project from "../src/lib/project";
import shell from '../src/util/shell';


describe('Project', () => {
  const location = './test/output/exp1'
  test('create', async () => {
    const project = new Project(location)
    const ret = await project.create()
    assert(ret === true)
  })
  test('duplicate create', async() => {
    const project = new Project(location)
    const ret = await project.create()
    assert(ret === false)
    assert(project.error.includes('already exists'))
  })
  afterAll(async() => {
    await shell('rm', ['-rf', location])
  })
})
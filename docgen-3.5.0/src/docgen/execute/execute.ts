import { promisify } from 'util';
import { exec } from 'child_process';

const execPromise = promisify(exec);
export async function execute(command) {
  try {
    const { stdout, stderr } = await execPromise(command);
    return {stdout, stderr}
  } catch (e) {
    console.error(e);
  }
}

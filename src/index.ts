import * as tl from 'azure-pipelines-task-lib/task';
import { lintApiSpec } from './lint';
import * as fs from 'fs';
import * as path from 'path';

async function run() {
    try {
        const apiSpecPath = tl.getInput('apiSpecPath', true);
        const rulesetPath = tl.getInput('rulesetPath', true);

        if (!fs.existsSync(apiSpecPath)) {
            throw new Error(`API specification file not found at path: ${apiSpecPath}`);
        }

        if (!fs.existsSync(rulesetPath)) {
            throw new Error(`Ruleset file not found at path: ${rulesetPath}`);
        }

        const lintResults = await lintApiSpec(apiSpecPath, rulesetPath);

        if (lintResults.length > 0) {
            tl.setResult(tl.TaskResult.Failed, `Linting failed with the following issues:\n${lintResults.join('\n')}`);
        } else {
            tl.setResult(tl.TaskResult.Succeeded, 'Linting completed successfully with no issues found.');
        }
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
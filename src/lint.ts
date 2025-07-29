import { Spectral, RuleType } from '@stoplight/spectral-core';
import { oas2, oas3 } from '@stoplight/spectral-rulesets';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function lintApiSpec(apiSpecPath: string, rulesetPath: string): Promise<void> {
    const spectral = new Spectral();

    // Load custom ruleset
    const ruleset = readFileSync(join(__dirname, rulesetPath), 'utf-8');
    spectral.setRuleset(JSON.parse(ruleset));

    // Load API specification
    const apiSpec = readFileSync(apiSpecPath, 'utf-8');

    // Lint the API specification
    const results = await spectral.run(apiSpec);

    // Output results
    if (results.length > 0) {
        console.error('Linting errors found:');
        results.forEach(result => {
            console.error(`- ${result.message} (path: ${result.path.join('.')}, severity: ${result.severity})`);
        });
        process.exit(1);
    } else {
        console.log('No linting errors found.');
    }
}
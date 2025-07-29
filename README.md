# Azure DevOps Lint Task

This project provides a custom Azure DevOps extension task to lint API specification files against custom Spectral rulesets. It can be integrated into your Azure DevOps pipelines across your organization.

## Features

- Lint API specification files using custom rules defined in Spectral.
- Easy integration into Azure DevOps pipelines.
- Configurable rulesets for different linting requirements.

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (Node package manager)
- Azure DevOps account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/azure-devops-lint-task.git
   cd azure-devops-lint-task
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Usage

To use the lint task in your Azure DevOps pipeline, include the following in your `azure-pipelines.yml`:

```yaml
- task: AzureDevOpsLintTask@1
  inputs:
    apiSpecFile: 'path/to/your/api-spec.yaml'
    rulesetFile: 'path/to/your/custom-ruleset.yaml'
```

### Custom Ruleset

You can define your own linting rules by modifying the `src/rules/custom-ruleset.yaml` file. Refer to the [Spectral documentation](https://meta.stoplight.io/docs/spectral/docs/guides/getting-started) for more information on how to create custom rules.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

### Contact

For any inquiries, please reach out to [your-email@example.com].
const JIRA_WORKSPACES = ['INHEART'];

module.exports = {
  extends: ['jira'],
  plugins: ['commitlint-plugin-jira-rules', 'commitlint-plugin-function-rules'],
  rules: {
    'function-rules/subject-case': [2, 'always', ({ header }) => {
      const parts = header.split(':');
      if (parts.length !== 2) {
        return [false, 'Use exactly one colon, only to separate ticket number and subject'];
      }
      const subject = parts[1].trim();
      if (subject[0] !== subject[0].toUpperCase()) {
        return [false, 'Write subject as a sentence (starting with capital letter)'];
      }
      return [true];
    }],
    'jira-commit-message-separator': [2, 'always', ': '],
    'jira-task-id-max-length': [0],
    'jira-task-id-project-key': [2, 'always', JIRA_WORKSPACES],
    'jira-task-id-separator': [2, 'always', '-'],
  },
};

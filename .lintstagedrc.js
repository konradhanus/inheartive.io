module.exports = {
  '{apps,libs}/**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '{apps,libs}/**/*.{ts,tsx}': [() => 'tsc-files --noEmit'],
  '*.json': ['prettier --config .prettierrc --write'],
  '*.md': ['prettier --write --print-width 80 --prose-wrap always'],
  'yarn.lock': ['yarn-deduplicate'],
};

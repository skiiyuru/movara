import antfu from '@antfu/eslint-config'

export default antfu({
  astro: true,
  react: true,
  formatters: {
    /**
     * Format files with prettier instead of eslint
     * @default true
     */
    prettier: false,
    /**
     * Format files with eslint --fix
     * @default true
     */
    eslint: true,
  },
  rules: {
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
  },
  ignores: ['src/components/Posthog.astro'],
})

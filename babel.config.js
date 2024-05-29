module.exports = {
  presets: ['react-app'],
  plugins: [
    '@babel/plugin-transform-private-property-in-object',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-optional-chaining',
  ],
};
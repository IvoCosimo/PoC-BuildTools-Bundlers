const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: 'defaults' }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
};
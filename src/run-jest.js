import babelJest from 'babel-jest';

module.exports = babelJest.createTransformer({ rootMode: 'upward' });

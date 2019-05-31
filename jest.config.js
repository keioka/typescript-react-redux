module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/test/__mocks__/fileMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js']
};

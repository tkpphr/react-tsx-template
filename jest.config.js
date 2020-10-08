module.exports = {
  "moduleFileExtensions": ["ts","tsx","js"],
  "transform": {
    "\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    '^main/(.*)': '<rootDir>/src/ts/main/$1'
  },
  "testMatch": ["<rootDir>/src/ts/test/**/*.spec.(ts|tsx)"],
  "collectCoverage": false,
  "collectCoverageFrom": [
    "src/ts/main/**/*.(ts|tsx)",
    "!node_modules/",
    "!src/ts/**/*.d.ts"
  ],
};
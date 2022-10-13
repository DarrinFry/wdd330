/* eslint-disable no-undef */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    // "rules": {
    // },
    // "overrides": [
    //     {
    //       "files": [ "js/**/*.js" ],

    //     }
    //   ]
    "rules": {
        "no-unused-vars": "off"
      }
}

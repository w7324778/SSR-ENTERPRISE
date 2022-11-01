const TYPEENUMARRAY = ["feat", "fix", "revert","ci","test","style","perf","docs","ci","chore"]

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "type-enum": [2, "always", TYPEENUMARRAY],
        "subject-max-length": [1, "always", 30],
    }
};

exports.slugifyConflictEmail = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase();
}

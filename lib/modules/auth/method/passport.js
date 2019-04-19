const localStrategy = require('passport-local').Strategy;

const { comparePassword } = require('../../../helpers/bcrypt.helper');

module.exports = passport => {
    passport.use(new localStrategy(
        {
            emailField: 'email',
            passwordField: 'password'
        },
        async function (email, password, done) {

            await db.collection('users').findOne({ email: email, deleted: false }, function (err, user) {
                console.log('user requested caught in passport', password);

                if (err) { return done(err) };
                if (!user) { return done(null, false) };

                const matchPassword = await comparePassword(password, user.password);

                if (!matchPassword) { return done(null, false) };

                return done(null, user);
            });
        }
    ));
}
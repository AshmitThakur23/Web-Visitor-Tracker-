import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Clean user data
        const user = {
          id: profile.id,
          name: profile.displayName,
          firstName: profile.name?.givenName || "",
          lastName: profile.name?.familyName || "",
          email: profile.emails?.[0]?.value || "",
          photo: profile.photos?.[0]?.value || "",
          provider: profile.provider,
        };

        // ✅ Extra: fetch birthday & gender from Google People API
        try {
          const peopleRes = await fetch(
            "https://people.googleapis.com/v1/people/me?personFields=genders,birthdays",
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          );
          const people = await peopleRes.json();

          if (people.birthdays?.length) {
            const bday = people.birthdays[0].date;
            user.birthday = `${bday.day || ""}-${bday.month || ""}-${bday.year || ""}`;
          }

          if (people.genders?.length) {
            user.gender = people.genders[0].value;
          }
        } catch (err) {
          console.log("⚠️ Could not fetch birthday/gender:", err.message);
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

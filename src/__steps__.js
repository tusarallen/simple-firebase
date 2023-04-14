/**              -----------------------------------
 *                       INITIAL INSTALLATION
 *             ---------------------------------------
 * 1.visit: console.firebase.google.com
 * 2.create project (skip google analytics)
 * 3.Register app (create config)
 * 4.install firebase: npm install firebase
 * 5.add config file to your project
 * 6.DANGER: do not publish or make firebase to config public or pushing all those to github
 *                   ----------------------------
 *                         INIGRATION
 *                   ----------------------------
 * 7.Visit: Go to docs > Build > Authenticiation > Web > Get started
 * 8.export app from the firebase.config.js file: export default app
 * Login jsx: import getAuth from firebase/auth
 * 10.create const auth = getAuth(app)
 *                        -------------------------
 *                             PROVIDER SETUP
 *                      ----------------------------
 * 11.import googleAuthProvider and create a new provider
 * 12.use signInWithPop and pass auth and provider
 * 13.activate sign in methode (google, facebook, github, etc)
 * 14.[vite] : change 127.0.0.1 to localhost
 *                    --------------------------------
 *                            More Auth Provider
 *                  ------------------------------------
 * 1.activate the auth provider (create app, provide redirect url, client id and client secret)
 * 2.
 * */

Partnr Style Guide
------------------
This project was formed from a need to create and explicitly define individual Partnr UI components.

You can reuse any of thse components by running:

`npm install partnr-style-guide`

then in your Sass styles, using this:

`@import /path/to/node_modules/src/partnr-style`

or building the `partnr-style.sass` file explicitly and moving the resulting static file to a place where you can serve it directly.


##Development

To run this program, you'll need to run:

`npm install`

Then, once that has finished, run:

`./node_modules/.bin/gulp serve`

This will start a static server on port `9090`.
This will also listen to all changes in the `src` directory and build the relevant files.
From there you can reload the browser to see your changes.


##Deployment

For now, we just use a (free tier) Heroku project hosted at [style.partnr.org](style.partnr.org) (which is an alias of [partnr-style-guide.herokuapp.com](partnr-style-guide.herokuapp.com))

If you want to emulate the heroku build process locally, then you should run:

`ENV=production gulp build`

and everything will build as if it were on the remote heroku server.

###NOTE:
the only thing that's a _real_ discrepancy between heroku and npm is that heroku *requires* all `node_modules` to be in `dependencies` and not `devDependencies` of the `package.json`.

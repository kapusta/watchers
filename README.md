dolla dolla watchers yo
=======

A bookmarklet that tells you how many $$watchers you have in your AngularJS app.

Pull requests accepted!

# Building the Bookmarklet

On the CLI, cd into the directory that contains these files, then...

    ./make_bookmarklet.pl watchers.js > bookmarklet.js

# Installing the Bookmarklet

* Make a new bookmark in your browser and name it.
* Copypasta from bookmarklet.js into the URL of the new bookmark.
* Go to your Angular app.
* Click the bookmark and read the console.log();

# License

MIT

# Aknowlegements

* Original idea via [clouddueling's gist](https://gist.github.com/clouddueling/8853332)
* bookmarklet.js built using [gruber's perl script](https://gist.github.com/gruber/8658935)

### Changelog

* 0.0.2 - using querySelectorAll and jqLite, support for multiple Angular apps
* 0.0.1 - first release, removed jQuery dependency

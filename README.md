# Creature Coliseum
Welcome to Creature Coliseum, a tool for Dungeons and Dragons 5th Edition Dungeon Masters to plan out combat encounters for their players enjoyment--and their own!        

Every publicly available monster is able to be referenced here--from the 5e System Reference Document, to 3rd party resources like the Tome of Beasts and the Creature Codex. Each entry has a link to the monster's statblock for ease of reference, and we have provided a wide variety of filters and search mechanisms, so you can find the perfect creatures to fill your coliseum!      

Here's a demo of how it works:
https://youtu.be/_RXX3gzcvzw

## Getting Started
If you'd like to make a local hosting of Creature Coliseum, start by cloning the repository, forking it first if you're going to make any changes.

```
$ git clone git@github.com:jesselsmith/react-redux-portfolio-project.git
```

Next, navigate to the frontend directory and run npm install, and then the backend directory and run bundle install.
```
$ cd react-redux-portfolio-project/frontend
$ npm install
$ cd ../backend
$ bundle install
```
Following this, you're going to need to start up both the backend and frontend of the application, so you'll have have 2 tabs of your terminal open. 

The default for both Rails and React on a local server is to use port 3000. In development, I changed my backend to port 3001, so that is how it's set up by default.

In the terminal tab that is still open to the backend directory:
```
$ rails s -p 3001
```

In the other terminal tab, you'll need to navigate to the frontend directory, then:
```
$ npm start
```
This should automatically open a tab in your browser that navigates to the homepage! Enjoy Creature Coliseum!

## ## Raising an Issue to Encourage a Contribution
If you notice a problem with the project that you believe needs improvement but you're unable to make the change yourself, you should raise a Github issue containing a clear description of the problem. Include relevant snippets of the content and/or screenshots if applicable. Thanks!

## Submitting a Pull Request to Suggest an Improvement
If you see an opportunity for improvement and can make the change yourself go ahead and use a typical git workflow to make it happen:

* Fork this repository
* Make the change on your fork, with descriptive commits in standard format
* Open a Pull Request against this repo
I will review the changes and approve or comment on them in due course.

Adapted from Learn contributing guide.

# License

https://github.com/jesselsmith/react-redux-portfolio-project/blob/master/LICENSE


Happy gaming!
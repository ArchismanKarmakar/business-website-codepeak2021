# Making business Website similar to ITC-hotels-codepeak2021

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


## This project is for getting a hotel business ready website similar to ITC Hotels website. So, let's get started. It will be a very good practice. So, let's begin!

## ⭐ How to get started?

You can refer to the following articles on the basics of Git and Github and also contact the Project Mentors, in case you are stuck:

- [Watch this video to get started, if you have no clue about open source](https://youtu.be/SL5KKdmvJ1U)
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)

## 💥 How to Contribute?

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

- Take a look at the Existing [Issues]
- Wait for the Issue to be assigned to you after which you can start working on it.
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Read the [Code of Conduct]
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this Script is all about.

### Scoring criteria : 
- For merging very easy issue assign 1 point.
- For merging easy issue assign 3-4 points.
- For merging MED issue assign 5-7 points.
- For merging hard issue assign 10-12 points.
- For merging extremely hard issue assign 15-20 points.
- For merging 1-point issue assign 1 point.
- For pointing a new easy issue assign 1 point
- For pointing a new MED/HARD issue assign 1 point
- ```Note: All points mentioned are excluding timeliness, efficiency & other bonuses. Max bonus can be upto 5.```

# PROJECT DETAILS

## Get Started
### Prerequisites
- NodeJS
- Bootstrap
- MongoDB or Firebase
- ReactJS
- Express
- HTML5/CSS3/JavaScript (Basics)
#
### SiteMap
![map1](https://user-images.githubusercontent.com/92569441/145706517-dd4d8722-cbc5-4850-8535-ad339165ece9.png)
#
#
```![map](https://user-images.githubusercontent.com/92569441/145590394-73a5533a-b4ff-4d18-9097-92d347030174.png)```discarded


### Tasks
##### check issues tab please
![](https://img.shields.io/badge/Difficulty-Moderate-yellow)
![](https://img.shields.io/badge/Difficulty-Hard-orange)
![](https://img.shields.io/badge/Difficulty-Easy-green)
![](https://img.shields.io/badge/Difficulty-VeryEasy-brightgreen)


## Setting up softwares

To work on Github hosted projects, one has to use Git - a Version Control System. So the first task is to install git on your machine. For Windows users, download git from here - https://git-scm.com/downloads. For Linux users, you can use your distro's package manager to install git.

**Note:** Although Linux isn't mandatory, it is preferred while working with Open Source Software.

**Note:** You can learn about Version Control Systems (VCS) [here](https://www.atlassian.com/git/tutorials/what-is-version-control).

## Setting up git

After installing git, run git and execute these commands:

```
git config --global user.name "[name]"
git config --global user.email "[email address]"
```

That should complete the software setup.

## Forking and Cloning

Before you can edit any file on the repo, you must fork and clone it. A **fork** is a copy of the repository in your account. To **clone** a repo means to download it locally. Click the Fork button on the top right of this repo to fork it. Next, go to your copy of the repo and click the Clone button. Copy the url. Now open git and execute this command:

```
git clone [copied url here]
```

That should download the repo locally.

## Making branches

A **branch** is a parallel copy of the code. When we add new features to a project, we usually create a copy of the code and work on it. This is done so that the main working copy of the code is unaffected. In most GitHub repos, the master branch is the default branch. You should create a separate branch for every contribution you make. To create a new branch, execute this command:

```
git checkout -b [branch name here]
```

You should see the branch name change on the terminal prompt. Congratulations! You created a new branch.


## Edit/Add files

## Adding and commiting changes

To create a **commit** means to save your work. But before you commit, you have to **add** your work to the commit. To do so, execute this command from the project root:

```
git add *
```

This adds all files to the upcoming commit. Now, to create the commit run this command:

```
git commit -m "[commit message here]"
```

Write any message in place of the commit message. If the command runs successfully, you should have committed your changes.

## Pushing changes and submitting a Pull Request

After committing your changes, you have to upload them to GitHub. This is known as **pushing**. To push your changes, run:

```
git push origin [branch name]
```

Where branch name is the name of your newly created branch. This should upload your changes to *your* GitHub account. Now, you can propose these changes to the actual project. To do so, click on the **Pull Request** button on GitHub. Most of the fields should be automatically filled out for you. Click Create Pull Request. If everything went correctly, you should have created a pull request with your changes. Now it is upto the repo owner to **merge** these changes.

Congratulations! You made your first Open Source Contribution! Now contribute to some other repos. Have a great time!

# Resources

You can learn more about Git and GitHub here:

- https://www.youtube.com/watch?v=w3jLJU7DT5E
- https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940

# Dependency guide
- Download & set-up nodejs first from here: https://nodejs.org/en/
- Download & set-up MongoDB from here: https://www.mongodb.com/try/download/community
- Install NodeJS without any changing configurations. Open VS Code, run terminal and run the commands:
 ```
        $ npm install bootstrap
 ```
 Alternatively, if you’re not using Bundler, you can install the gem by running this command:
 ```
        $ gem install bootstrap -v 5.1.3
 ```
 ##### CDN via jsDelivr
 
 ```
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
 ```
 
 Now let's install mongoose
 
 First be sure you have MongoDB and Node.js installed.

Next install Mongoose from the command line using npm:
 
 ```
        $ npm install mongoose --save
 ```
 
 Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.
 ```
        $ mkdir myapp
        $ cd myapp
```
Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.
```
        $ npm init
```
This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:
```
        entry point: (index.js)
```
Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

Now install Express in the myapp directory and save it in the dependencies list. For example:
```
        $ npm install express --save
```
To install Express temporarily and not add it to the dependencies list:
```
        $ npm install express --no-save
```
**By default with version npm 5.0+ npm install adds the module to the dependencies list in the package.json file; with earlier versions of npm, you must specify the --save option explicitly. Then, afterwards, running npm install in the app directory will automatically install modules in the dependencies list.**

## Plugins

```Empty```

## Development

```Empty```

## License

MIT


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

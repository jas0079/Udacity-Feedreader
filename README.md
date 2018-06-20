## How to run the application

Clone / download and unzip the repo from GitHUB: `git clone git@github.com:https://github.com/ThijsWaalders/Feedreader.git`

Open up index.html from the root directory

Test cases:
1. RSS feeds
    1. Check if allFeeds is defined and not empty
    2. Check if allFeeds has an URL inside
    3. Check if allFeeds has a name
2. Menu
    1. Is menu hidden by default?
    2. Check if menu visibility changes when there is a mouse click
3. Initial entries
    1. Check if there is at least one .entry element within the .feed
4. New feed selection
    1. Check if there is a new feed loaded
    2. Check if the new loaded feed is not equal to the old feed

# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.
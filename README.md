#Creating a Personal React Blog (with Rails backend) Using Heroku

This blog assumes you've got npm and rails configured to work in your console.  

This is a step-by-step guide for creating a minimal, personal blog using a standard React frontend, a Ruby on Rails backend hosted for free on Heroku, and is a recap of how I created this very blog.  This guide is meant for those who have just recently gotten into React/Rails and assumes that you already have npm, Ruby, Rails and PostgreSQL installed and ready to go on your Mac or UNIX based computer.  Please also note: this guide is meant for creating a truly minimal blog, so features you may be used to, like a WZYWIG text editor, are not included.  There are some simple solutions provided for this problem.

##Getting Started

First thing is to generate both ends of the application.  This can be done easily with the following:

###Creating the React Frontend
```javascript
npm install create-react-app
create-react-app 'name of your blog'
```

###Creating the API Backend
```javascript
rails new 'name of your blog backend' -d postgresql --api
```

This command will set up a Rails application without some of the extra files used for Rails frontend sites.  PostgreSQL is necessary for hosting on Heroku, so it is best to start off from the beginning with it set up.

##Setting up Basic Rails models and controllers

Since this will be a personal blog, a complex account interface isn't necessary.  Still, there are some basic parts that are handy - a user model for your account and basic account authorization and authentication to make sure only you can create, edit, update and delete your posts.

###Create User Resource
```javascript
rails g resoure users username password_digest
```

This will set up a very simple user model, migration and controller for your account, with two columns, `username` and `password_digest` (make keep `password_digest` as is for the next step)  In your Rails Gemfile, find the line for 'bcrypt' and uncomment it, then in the console, run `bundle install`.

```javascript
# gem 'bcrypt' ...
```

In your user model, add the line `has_secure_password`:

```javascript
class User < ApplicationRecord
    has_secure_password
end
```

When you create your user account, bcrypt will take in your password and encrypt it.  When you log in on your site, bcrypt will encrypt your input and check to see if the encrypted hash matches the original (one way encryption).

###Create Post Resource

Similar to user, enter the following in your command line:

```javascript
rails g resoure postss title content user:references
```

A post.rb file will be generated with a line `belongs_to :user` in it, telling ActiveRecord that each post is tied to a user.  In user.rb, add the line `has_many :posts`, so it will look like:

```javascript
class User < ApplicationRecord
    has_secure_password
    has_many :posts
end
```

This doesnt matter too much for a single user blog, but makes some data calls easier later on.  

###Setting up controller# react-blog
# rockland-instant-copy
# rockland-instant-copy

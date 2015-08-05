# ec2-on-node

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

## Development

```
npm install
npm start
```

## Instructions

+ Clone this repo
+ Go to Elastic Beanstalk - https://us-west-1.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-1#
+ Select 'Docker'
+ Click 'Launch Now'
+ On the next page, click 'Create New Environment'
+ Go to elastic beanstalk and click 'Create New Application'
+ Name it `ec2-on-node`
+ click 'Next'
+ on the next screen choose 'Create web server'
+ on the next screen choose 'Docker' and 'load balancing, auto scaling'
+ on the next upload your own
+ `git archive --format=zip HEAD > ec2-on-node.zip`
+ for environment name call it: `ec2-on-node-staging`
+ for url call it something similar
+ press next
+ on the next screen leave the defaults and click 'next'
+ on the next screen, leave the defaults
+ But add `/` in the application healthcheck url
+ press next for review
+ press 'Launch' on the final page
+ wait for the server to spin up (will take about 5 minutes)




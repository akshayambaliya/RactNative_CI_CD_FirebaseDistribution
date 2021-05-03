# CI/CD pipeline to create a android apk and distribute using firebase by git actions 

This demonstration will simulate a completely automated CI/CD deployment pipeline using git actions. 

It will essentially do the following steps (phases):

1.Checkout master branches when we push changes into master

2.Install node modules

3.Compile (build) the code using ./gradlew command and generate apk file

4.Upload application in firebase distribution.


Please add the following secrets in your git first

FIREBASE_TOKEN  = generate firebase token using firebase cli

FIREBASE_GROUPS = firebase testing group name

FIREBASE_APP_ID = firebase project app id


# For YML file please check .github\workflows\ci.yml

## Git Workflow

## 1. Git Pull Origin Main
Before writing any code please do like following
```bash
git pull origin main
```
Above command is used to make sure your local code is up to date to Github Repository. But, if you're already code something, don't worry just commit your changes first
```bash
git add .
git commit -am "your message"
```
And then you can move forward to step number 2


## 2. Change Your Branch
If your local code is already up to date to Github Repository, you can change your branch. Run command below
```bash
git checkout -b yourFeature-yourName
```
In order to set everything clean, you can name your branch with the pattern like ``your feature you were working on`` ``-`` ``your name``.
This make much easier to your leader team to see who made the Pull Request, and what were they working on

## 3. Commit your changes
```bash
git add .
git commit -am "your message"
```

## 4. Push Your updated code to your branch
```bash
git push origin your-current-branch
```

## 5. Make a pull request
And then open [Jaskipin Github](https://github.com/JKP-Development-Website-Team) and you'll see something like following
![App Screenshot](https://snipboard.io/c9jLth.jpg)
then press ``Compare & Pull Request``




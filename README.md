## How to Update GHCR ##
Updating the GHCR will allow the nlp-suite-runner to pull the latest version of the repository you're currently working on, allowing testing and execution of frontend and backend together.

## 1. Save Local Changes ##
Make sure you are **navigated to the correct directory** with the Dockerfile (in this case you must be in the nlp-suite-ui). The image will be created based on the current local version, so there is no need to push to GitHub during testing phases.

## 2. Create Local Docker Image ##
Create an image
```bash
docker build -t ghcr.io/nlp-suite/nlp-suite-ui:main .
```
This command uses the Dockefile instructions to create an image of your local repository. This image will be tagged as `ghcr.io/nlp-suite/nlp-suite-ui:main`. It will be stored in the local Docker registry on your machine.

## 3. Login to your account on the GHCR with Docker ##
A) Create a personal access token for your GitHub account. You can do this on GitHub by navigating to Settings>Developer Settings>Tokens(Classic)
Make sure your token has **full control of private repos, full control of projects, write:packages,** and **delete:packages**

B) Export this person access token to your system's environment variables. You can this by this command:
```bash
export GHCR_TOKEN={insert your token here}
```
C) Login to the GHCR
```bash
echo $GHCR_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
```
Replacing USERNAME with your GitHub username. It should return the statement "Login Succeeded"

## 4. Push the image to GHCR
```bash
docker push ghcr.io/nlp-suite/nlp-suite-ui:main
```
## 5. Check if update is successful
Run the executable file from the nlp-suite-runner. If your container is cached and not pulling the latest image, run the command
```bash
docker pull ghcr.io/nlp-suite/nlp-suite-ui:main
```

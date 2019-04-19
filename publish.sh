rm -rf ./docs/.vuepress/dist
npm run build;
git add ./docs/.vuepress/dist --force;
git commit -m "build: build version";
git subtree push --prefix ./docs/.vuepress/dist origin gh-pages;
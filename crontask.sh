#!/bin/bash

cd $HOME/basketgit
git pull
python3 scrap.py
git commit -am "ok"
git push

exit()

echo "TODO: scp fichiers des checkbox depuis olkihost et modifier "


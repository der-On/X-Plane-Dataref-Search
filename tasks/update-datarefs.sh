#!/bin/bash
cd ../dist && \
rm DataRefs.txt && \
wget http://www.xsquawkbox.net/xpsdk/docs/DataRefs.txt && \
git add DataRefs.txt && git commit -m'updated DataRefs.txt' && git push

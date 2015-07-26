#!/usr/bin/env bash

echo "Enter React-Bootstrap full release name:";
read release;

url="https://github.com/react-bootstrap/react-bootstrap/archive/$release.tar.gz";

# @todo finish this

echo "wget $url";
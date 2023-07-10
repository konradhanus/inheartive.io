#!/bin/bash
cd ./backend
if [ ! -d "node_modules" ]; then
  npm install
fi
cd ../frontend
if [ ! -d "node_modules" ]; then
  npm install
fi

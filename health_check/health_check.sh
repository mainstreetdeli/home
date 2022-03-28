#!/bin/bash

# NOTIFY IF THE RESPONSE CODE IS NOT '200 OK'
# previously used in condition -> grep -w "200\|301"
if curl -I "https://msdkeansburg.com" 2>&1 | grep -w "200" ; then
    echo "msdkeansburg.com is up"
    exit 0
else
    echo "msdkeansburg.com is down"
    exit 1
fi
#!/bin/bash
set -e

echo "Generating GO protobuf (media)"

protoc -I ./proto \
    --go_out=./gen/go \
    --go-grpc_out=./gen/go \
    --go_opt=module=github.com/alebooking/contracts \
    --go-grpc_opt=module=github.com/alebooking/contracts \
    ./proto/media.proto

ecoh "Go generation complete."
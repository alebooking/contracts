#!/bin/bash
set -e

echo "Generating GO protobuf (media)"

protoc -I ./proto \
    --go_out=. \
    --go-grpc_out=. \
    --go_opt=module=github.com/alebooking/contracts \
    --go-grpc_opt=module=github.com/alebooking/contracts \
    ./proto/media.proto

echo "Go generation complete."
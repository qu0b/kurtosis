module github.com/kurtosis-tech/kurtosis/enclave-manager/api/golang

go 1.20

replace github.com/kurtosis-tech/kurtosis/api/golang => ../../../api/golang

require (
	connectrpc.com/connect v1.11.1
	github.com/kurtosis-tech/kurtosis/api/golang v0.0.0 // Local dependency
	google.golang.org/grpc v1.56.3
	google.golang.org/protobuf v1.31.0
)

require (
	github.com/golang/protobuf v1.5.3 // indirect
	golang.org/x/net v0.17.0 // indirect
	golang.org/x/sys v0.15.0 // indirect
	golang.org/x/text v0.14.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20230706204954-ccb25ca9f130 // indirect
)

// @generated by protoc-gen-es v1.5.1 with parameter "target=ts"
// @generated from file kurtosis_enclave_manager_api.proto (package kurtosis_enclave_manager, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DownloadFilesArtifactArgs, FilesArtifactNameAndUuid, RunStarlarkPackageArgs, RunStarlarkScriptArgs } from "./api_container_service_pb.js";

/**
 * @generated from message kurtosis_enclave_manager.HealthCheckRequest
 */
export class HealthCheckRequest extends Message<HealthCheckRequest> {
  /**
   * @generated from field: string service = 1;
   */
  service = "";

  constructor(data?: PartialMessage<HealthCheckRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.HealthCheckRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJsonString(jsonString, options);
  }

  static equals(a: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined, b: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined): boolean {
    return proto3.util.equals(HealthCheckRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_enclave_manager.HealthCheckResponse
 */
export class HealthCheckResponse extends Message<HealthCheckResponse> {
  /**
   * @generated from field: kurtosis_enclave_manager.HealthCheckResponse.ServingStatus status = 1;
   */
  status = HealthCheckResponse_ServingStatus.UNKNOWN;

  constructor(data?: PartialMessage<HealthCheckResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.HealthCheckResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(HealthCheckResponse_ServingStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined, b: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined): boolean {
    return proto3.util.equals(HealthCheckResponse, a, b);
  }
}

/**
 * @generated from enum kurtosis_enclave_manager.HealthCheckResponse.ServingStatus
 */
export enum HealthCheckResponse_ServingStatus {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: SERVING = 1;
   */
  SERVING = 1,

  /**
   * @generated from enum value: NOT_SERVING = 2;
   */
  NOT_SERVING = 2,

  /**
   * Used only by the Watch method.
   *
   * @generated from enum value: SERVICE_UNKNOWN = 3;
   */
  SERVICE_UNKNOWN = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(HealthCheckResponse_ServingStatus)
proto3.util.setEnumType(HealthCheckResponse_ServingStatus, "kurtosis_enclave_manager.HealthCheckResponse.ServingStatus", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SERVING" },
  { no: 2, name: "NOT_SERVING" },
  { no: 3, name: "SERVICE_UNKNOWN" },
]);

/**
 * @generated from message kurtosis_enclave_manager.GetServicesRequest
 */
export class GetServicesRequest extends Message<GetServicesRequest> {
  /**
   * @generated from field: string apic_ip_address = 1;
   */
  apicIpAddress = "";

  /**
   * @generated from field: int32 apic_port = 2;
   */
  apicPort = 0;

  constructor(data?: PartialMessage<GetServicesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.GetServicesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "apic_ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apic_port", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetServicesRequest {
    return new GetServicesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetServicesRequest {
    return new GetServicesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetServicesRequest {
    return new GetServicesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetServicesRequest | PlainMessage<GetServicesRequest> | undefined, b: GetServicesRequest | PlainMessage<GetServicesRequest> | undefined): boolean {
    return proto3.util.equals(GetServicesRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_enclave_manager.GetListFilesArtifactNamesAndUuidsRequest
 */
export class GetListFilesArtifactNamesAndUuidsRequest extends Message<GetListFilesArtifactNamesAndUuidsRequest> {
  /**
   * @generated from field: string apic_ip_address = 1;
   */
  apicIpAddress = "";

  /**
   * @generated from field: int32 apic_port = 2;
   */
  apicPort = 0;

  constructor(data?: PartialMessage<GetListFilesArtifactNamesAndUuidsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.GetListFilesArtifactNamesAndUuidsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "apic_ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apic_port", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetListFilesArtifactNamesAndUuidsRequest {
    return new GetListFilesArtifactNamesAndUuidsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetListFilesArtifactNamesAndUuidsRequest {
    return new GetListFilesArtifactNamesAndUuidsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetListFilesArtifactNamesAndUuidsRequest {
    return new GetListFilesArtifactNamesAndUuidsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetListFilesArtifactNamesAndUuidsRequest | PlainMessage<GetListFilesArtifactNamesAndUuidsRequest> | undefined, b: GetListFilesArtifactNamesAndUuidsRequest | PlainMessage<GetListFilesArtifactNamesAndUuidsRequest> | undefined): boolean {
    return proto3.util.equals(GetListFilesArtifactNamesAndUuidsRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_enclave_manager.RunStarlarkPackageRequest
 */
export class RunStarlarkPackageRequest extends Message<RunStarlarkPackageRequest> {
  /**
   * @generated from field: string apic_ip_address = 1;
   */
  apicIpAddress = "";

  /**
   * @generated from field: int32 apic_port = 2;
   */
  apicPort = 0;

  /**
   * @generated from field: api_container_api.RunStarlarkPackageArgs RunStarlarkPackageArgs = 3;
   */
  RunStarlarkPackageArgs?: RunStarlarkPackageArgs;

  constructor(data?: PartialMessage<RunStarlarkPackageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.RunStarlarkPackageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "apic_ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apic_port", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "RunStarlarkPackageArgs", kind: "message", T: RunStarlarkPackageArgs },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunStarlarkPackageRequest {
    return new RunStarlarkPackageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunStarlarkPackageRequest {
    return new RunStarlarkPackageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunStarlarkPackageRequest {
    return new RunStarlarkPackageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RunStarlarkPackageRequest | PlainMessage<RunStarlarkPackageRequest> | undefined, b: RunStarlarkPackageRequest | PlainMessage<RunStarlarkPackageRequest> | undefined): boolean {
    return proto3.util.equals(RunStarlarkPackageRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_enclave_manager.RunStarlarkScriptRequest
 */
export class RunStarlarkScriptRequest extends Message<RunStarlarkScriptRequest> {
  /**
   * @generated from field: string apic_ip_address = 1;
   */
  apicIpAddress = "";

  /**
   * @generated from field: int32 apic_port = 2;
   */
  apicPort = 0;

  /**
   * @generated from field: api_container_api.RunStarlarkScriptArgs RunStarlarkScriptArgs = 3;
   */
  RunStarlarkScriptArgs?: RunStarlarkScriptArgs;

  constructor(data?: PartialMessage<RunStarlarkScriptRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.RunStarlarkScriptRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "apic_ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apic_port", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "RunStarlarkScriptArgs", kind: "message", T: RunStarlarkScriptArgs },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunStarlarkScriptRequest {
    return new RunStarlarkScriptRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunStarlarkScriptRequest {
    return new RunStarlarkScriptRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunStarlarkScriptRequest {
    return new RunStarlarkScriptRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RunStarlarkScriptRequest | PlainMessage<RunStarlarkScriptRequest> | undefined, b: RunStarlarkScriptRequest | PlainMessage<RunStarlarkScriptRequest> | undefined): boolean {
    return proto3.util.equals(RunStarlarkScriptRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_enclave_manager.InspectFilesArtifactContentsRequest
 */
export class InspectFilesArtifactContentsRequest extends Message<InspectFilesArtifactContentsRequest> {
  /**
   * @generated from field: string apic_ip_address = 1;
   */
  apicIpAddress = "";

  /**
   * @generated from field: int32 apic_port = 2;
   */
  apicPort = 0;

  /**
   * @generated from field: api_container_api.FilesArtifactNameAndUuid file_names_and_uuid = 3;
   */
  fileNamesAndUuid?: FilesArtifactNameAndUuid;

  constructor(data?: PartialMessage<InspectFilesArtifactContentsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.InspectFilesArtifactContentsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "apic_ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apic_port", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "file_names_and_uuid", kind: "message", T: FilesArtifactNameAndUuid },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InspectFilesArtifactContentsRequest {
    return new InspectFilesArtifactContentsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InspectFilesArtifactContentsRequest {
    return new InspectFilesArtifactContentsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InspectFilesArtifactContentsRequest {
    return new InspectFilesArtifactContentsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: InspectFilesArtifactContentsRequest | PlainMessage<InspectFilesArtifactContentsRequest> | undefined, b: InspectFilesArtifactContentsRequest | PlainMessage<InspectFilesArtifactContentsRequest> | undefined): boolean {
    return proto3.util.equals(InspectFilesArtifactContentsRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_enclave_manager.DownloadFilesArtifactRequest
 */
export class DownloadFilesArtifactRequest extends Message<DownloadFilesArtifactRequest> {
  /**
   * @generated from field: string apic_ip_address = 1;
   */
  apicIpAddress = "";

  /**
   * @generated from field: int32 apic_port = 2;
   */
  apicPort = 0;

  /**
   * @generated from field: api_container_api.DownloadFilesArtifactArgs download_files_artifacts_args = 3;
   */
  downloadFilesArtifactsArgs?: DownloadFilesArtifactArgs;

  constructor(data?: PartialMessage<DownloadFilesArtifactRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.DownloadFilesArtifactRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "apic_ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apic_port", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "download_files_artifacts_args", kind: "message", T: DownloadFilesArtifactArgs },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadFilesArtifactRequest {
    return new DownloadFilesArtifactRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadFilesArtifactRequest {
    return new DownloadFilesArtifactRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadFilesArtifactRequest {
    return new DownloadFilesArtifactRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DownloadFilesArtifactRequest | PlainMessage<DownloadFilesArtifactRequest> | undefined, b: DownloadFilesArtifactRequest | PlainMessage<DownloadFilesArtifactRequest> | undefined): boolean {
    return proto3.util.equals(DownloadFilesArtifactRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_enclave_manager.GetStarlarkRunRequest
 */
export class GetStarlarkRunRequest extends Message<GetStarlarkRunRequest> {
  /**
   * @generated from field: string apic_ip_address = 1;
   */
  apicIpAddress = "";

  /**
   * @generated from field: int32 apic_port = 2;
   */
  apicPort = 0;

  constructor(data?: PartialMessage<GetStarlarkRunRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_enclave_manager.GetStarlarkRunRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "apic_ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apic_port", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStarlarkRunRequest {
    return new GetStarlarkRunRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStarlarkRunRequest {
    return new GetStarlarkRunRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStarlarkRunRequest {
    return new GetStarlarkRunRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetStarlarkRunRequest | PlainMessage<GetStarlarkRunRequest> | undefined, b: GetStarlarkRunRequest | PlainMessage<GetStarlarkRunRequest> | undefined): boolean {
    return proto3.util.equals(GetStarlarkRunRequest, a, b);
  }
}


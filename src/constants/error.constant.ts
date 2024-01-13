import { HttpStatusInterface } from '../interfaces';

const ERROR_CONSTANT: { [key: string]: HttpStatusInterface } = Object.freeze({
  BAD_REQUEST: {
    code: 400,
    name: 'BAD_REQUEST',
    message: 'The request cannot be fulfilled due to bad syntax.',
    class: '4xx',
    status: 'Bad Request'
  },
  UNAUTHORIZED: {
    code: 401,
    name: 'UNAUTHORIZED',
    message: 'You are not allowed to access this resources.',
    class: '4xx',
    status: 'Unauthorized'
  },
  PAYMENT_REQUIRED: {
    code: 402,
    name: 'PAYMENT_REQUIRED',
    message: 'The request cannot be fulfilled until payment is not done.',
    class: '4xx',
    status: 'Payment Required'
  },
  FORBIDDEN: {
    code: 403,
    name: 'FORBIDDEN',
    message: 'You are not allowed to perform this action.',
    class: '4xx',
    status: 'Forbidden'
  },
  NOT_FOUND: {
    code: 404,
    name: 'NOT_FOUND',
    message: 'We could not find the resource you requested.',
    class: '4xx',
    status: 'Not Found'
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    name: 'METHOD_NOT_ALLOWED',
    message: 'A request method is not supported for the requested resource.',
    class: '4xx',
    status: 'Method Not Allowed'
  },
  NOT_ACCEPTABLE: {
    code: 406,
    name: 'NOT_ACCEPTABLE',
    message:
      'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
    class: '4xx',
    status: 'Not Acceptable'
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    code: 407,
    name: 'PROXY_AUTHENTICATION_REQUIRED',
    message: 'The client must first authenticate itself with the proxy.',
    class: '4xx',
    status: 'Proxy Authentication Required'
  },
  REQUEST_TIMEOUT: {
    code: 408,
    name: 'REQUEST_TIMEOUT',
    message: 'The server timed out waiting for the request.',
    class: '4xx',
    status: 'Request Time-out'
  },
  CONFLICT: {
    code: 409,
    name: 'CONFLICT',
    message:
      'Request could not be processed because of conflict in the request.',
    class: '4xx',
    status: 'Conflict'
  },
  GONE: {
    code: 410,
    name: 'GONE',
    message:
      'Resource requested is no longer available and will not be available again.',
    class: '4xx',
    status: 'Gone'
  },
  LENGTH_REQUIRED: {
    code: 411,
    name: 'LENGTH_REQUIRED',
    message:
      'The request did not specify the length of its content, which is required by the requested resource.',
    class: '4xx',
    status: 'Length Required'
  },
  PRECONDITION_FAILED: {
    code: 412,
    name: 'PRECONDITION_FAILED',
    message:
      'The server does not meet one of the preconditions that the requester put on the request.',
    class: '4xx',
    status: 'Precondition Failed'
  },
  REQUEST_ENTITY_TOO_LARGE: {
    code: 413,
    name: 'REQUEST_ENTITY_TOO_LARGE',
    message:
      'The request is larger than the server is willing or able to process.',
    class: '4xx',
    status: 'Request Entity Too Large'
  },
  REQUEST_URI_TOO_LONG: {
    code: 414,
    name: 'REQUEST_URI_TOO_LONG',
    message: 'The URI provided was too long for the server to process.',
    class: '4xx',
    status: 'Request-URI Too Large'
  },
  UNSUPPORTED_MEDIA_TYPE: {
    code: 415,
    name: 'UNSUPPORTED_MEDIA_TYPE',
    message:
      'The request entity has a media type which the server or resource does not support.',
    class: '4xx',
    status: 'Unsupported Media Type'
  },
  REQUESTED_RANGE_NOT_SATISFIABLE: {
    code: 416,
    name: 'REQUESTED_RANGE_NOT_SATISFIABLE',
    message: 'Server cannot supply the portion of the file that is requested.',
    class: '4xx',
    status: 'Requested Range not Satisfiable'
  },
  EXPECTATION_FAILED: {
    code: 417,
    name: 'EXPECTATION_FAILED',
    message:
      'The server cannot meet the requirements of the Expect request-header field.',
    class: '4xx',
    status: 'Expectation Failed'
  },
  IM_A_TEAPOT: {
    code: 418,
    name: 'IM_A_TEAPOT',
    message: 'Cannot entertain the automated request.',
    class: '4xx',
    status: "I'm a teapot"
  },
  MISDIRECTED_REQUEST: {
    code: 421,
    name: 'MISDIRECTED_REQUEST',
    message:
      'The request was directed at a server that is not able to produce a response.',
    class: '4xx',
    status: 'Misdirected Request'
  },
  UNPROCESSABLE_ENTITY: {
    code: 422,
    name: 'UNPROCESSABLE_ENTITY',
    message:
      'The request was well-formed but was unable to be followed due to semantic errors.',
    class: '4xx',
    status: 'Unprocessable Entity'
  },
  LOCKED: {
    code: 423,
    name: 'LOCKED',
    message: 'The resource that is being accessed is locked.',
    class: '4xx',
    status: 'Locked'
  },
  FAILED_DEPENDENCY: {
    code: 424,
    name: 'FAILED_DEPENDENCY',
    message:
      'The request failed because it depended on another request and that request failed.',
    class: '4xx',
    status: 'Failed Dependency'
  },
  UPGRADE_REQUIRED: {
    code: 426,
    name: 'UPGRADE_REQUIRED',
    message:
      'The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.',
    class: '4xx',
    status: 'Upgrade Required'
  },
  PRECONDITION_REQUIRED: {
    code: 428,
    name: 'PRECONDITION_REQUIRED',
    message: 'The origin server requires the request to be conditional.',
    class: '4xx',
    status: 'Precondition Required'
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    name: 'TOO_MANY_REQUESTS',
    message: 'Too many request, Please try again after an hour.',
    class: '4xx',
    status: 'Too Many Requests'
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    code: 431,
    name: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
    message:
      'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.',
    class: '4xx',
    status: 'Request Header Fields Too Large'
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    code: 451,
    name: 'UNAVAILABLE_FOR_LEGAL_REASONS',
    message:
      'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.',
    class: '4xx',
    status: 'Unavailable For Legal Reasons'
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    name: 'INTERNAL_SERVER_ERROR',
    message:
      'The server encountered an unexpected condition which prevented it from fulfilling the request.',
    class: '5xx',
    status: 'Internal Server Error'
  },
  NOT_IMPLEMENTED: {
    code: 501,
    name: 'NOT_IMPLEMENTED',
    message:
      'The server either does not recognize the request method, or it lacks the ability to fulfil the request.',
    class: '5xx',
    status: 'Not Implemented'
  },
  BAD_GATEWAY: {
    code: 502,
    name: 'BAD_GATEWAY',
    message:
      'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
    class: '5xx',
    status: 'Bad Gateway'
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    name: 'SERVICE_UNAVAILABLE',
    message: 'The server is currently unavailable.',
    class: '5xx',
    status: 'Service Unavailable'
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    name: 'GATEWAY_TIMEOUT',
    message:
      'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
    class: '5xx',
    status: 'Gateway Time-out'
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    code: 505,
    name: 'HTTP_VERSION_NOT_SUPPORTED',
    message:
      'The server does not support the HTTP protocol version used in the request.',
    class: '5xx',
    status: 'HTTP Version not Supported'
  },
  VARIANT_ALSO_NEGOTIATES: {
    code: 506,
    name: 'VARIANT_ALSO_NEGOTIATES',
    message:
      'Transparent content negotiation for the request results in a circular reference.',
    class: '5xx',
    status: 'Variant Also Negotiates'
  },
  INSUFFICIENT_STORAGE: {
    code: 507,
    name: 'INSUFFICIENT_STORAGE',
    message:
      'The server is unable to store the representation needed to complete the request.',
    class: '5xx',
    status: 'Insufficient Storage'
  },
  LOOP_DETECTED: {
    code: 508,
    name: 'LOOP_DETECTED',
    message:
      'The server detected an infinite loop while processing the request.',
    class: '5xx',
    status: 'Loop Detected'
  },
  NOT_EXTENDED: {
    code: 510,
    name: 'NOT_EXTENDED',
    message:
      'Further extensions to the request are required for the server to fulfil it.',
    class: '5xx',
    status: 'Not Extended'
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    code: 511,
    name: 'NETWORK_AUTHENTICATION_REQUIRED',
    message:
      'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.',
    class: '5xx',
    status: 'Network Authentication Required'
  }
});
export default ERROR_CONSTANT;

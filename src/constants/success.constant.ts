import { HttpStatusInterface } from '../interfaces';

const SUCCESS_CONSTANT: { [key: string]: HttpStatusInterface } = Object.freeze({
  OK: {
    code: 200,
    name: 'OK',
    message: 'The request has succeeded.',
    class: '2xx',
    status: 'OK'
  },
  CREATED: {
    code: 201,
    name: 'CREATED',
    message:
      'The request has been fulfilled, resulting in the creation of a new resource.',
    class: '2xx',
    status: 'Created'
  },
  ACCEPTED: {
    code: 202,
    name: 'ACCEPTED',
    message: 'The request has been accepted for processing.',
    class: '2xx',
    status: 'Accepted'
  },
  NON_AUTHORITATIVE_INFORMATION: {
    code: 203,
    name: 'NON_AUTHORITATIVE_INFORMATION',
    message:
      "The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response.",
    class: '2xx',
    status: 'Non-Authoritative Information'
  },
  NO_CONTENT: {
    code: 204,
    name: 'NO_CONTENT',
    message:
      'The server successfully processed the request and is not returning any content.',
    class: '2xx',
    status: 'No Content'
  },
  RESET_CONTENT: {
    code: 205,
    name: 'RESET_CONTENT',
    message:
      'The server successfully processed the request, but is not returning any content. Please refresh the document view.',
    class: '2xx',
    status: 'Reset Content'
  },
  PARTIAL_CONTENT: {
    code: 206,
    name: 'PARTIAL_CONTENT',
    message:
      'The server is delivering only part of the resource due to a range header sent by the client.',
    class: '2xx',
    status: 'Partial Content'
  },
  MULTI_STATUS: {
    code: 207,
    name: 'MULTI_STATUS',
    message:
      'The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
    class: '2xx',
    status: 'Multi Status'
  },
  ALREADY_REPORTED: {
    code: 208,
    name: 'ALREADY_REPORTED',
    message:
      'The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.',
    class: '2xx',
    status: 'Already Reported'
  },
  IM_USED: {
    code: 226,
    name: 'IM_USED',
    message:
      'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
    class: '2xx',
    status: 'IM Used'
  }
});
export default SUCCESS_CONSTANT;

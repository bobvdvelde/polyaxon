// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by go-swagger; DO NOT EDIT.

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetRunDownstreamLineageReader is a Reader for the GetRunDownstreamLineage structure.
type GetRunDownstreamLineageReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunDownstreamLineageReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunDownstreamLineageOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunDownstreamLineageNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunDownstreamLineageForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunDownstreamLineageNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunDownstreamLineageDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunDownstreamLineageOK creates a GetRunDownstreamLineageOK with default headers values
func NewGetRunDownstreamLineageOK() *GetRunDownstreamLineageOK {
	return &GetRunDownstreamLineageOK{}
}

/* GetRunDownstreamLineageOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetRunDownstreamLineageOK struct {
	Payload *service_model.V1ListRunEdgesResponse
}

func (o *GetRunDownstreamLineageOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/downstream][%d] getRunDownstreamLineageOK  %+v", 200, o.Payload)
}
func (o *GetRunDownstreamLineageOK) GetPayload() *service_model.V1ListRunEdgesResponse {
	return o.Payload
}

func (o *GetRunDownstreamLineageOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListRunEdgesResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunDownstreamLineageNoContent creates a GetRunDownstreamLineageNoContent with default headers values
func NewGetRunDownstreamLineageNoContent() *GetRunDownstreamLineageNoContent {
	return &GetRunDownstreamLineageNoContent{}
}

/* GetRunDownstreamLineageNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetRunDownstreamLineageNoContent struct {
	Payload interface{}
}

func (o *GetRunDownstreamLineageNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/downstream][%d] getRunDownstreamLineageNoContent  %+v", 204, o.Payload)
}
func (o *GetRunDownstreamLineageNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunDownstreamLineageNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunDownstreamLineageForbidden creates a GetRunDownstreamLineageForbidden with default headers values
func NewGetRunDownstreamLineageForbidden() *GetRunDownstreamLineageForbidden {
	return &GetRunDownstreamLineageForbidden{}
}

/* GetRunDownstreamLineageForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetRunDownstreamLineageForbidden struct {
	Payload interface{}
}

func (o *GetRunDownstreamLineageForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/downstream][%d] getRunDownstreamLineageForbidden  %+v", 403, o.Payload)
}
func (o *GetRunDownstreamLineageForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunDownstreamLineageForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunDownstreamLineageNotFound creates a GetRunDownstreamLineageNotFound with default headers values
func NewGetRunDownstreamLineageNotFound() *GetRunDownstreamLineageNotFound {
	return &GetRunDownstreamLineageNotFound{}
}

/* GetRunDownstreamLineageNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetRunDownstreamLineageNotFound struct {
	Payload interface{}
}

func (o *GetRunDownstreamLineageNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/downstream][%d] getRunDownstreamLineageNotFound  %+v", 404, o.Payload)
}
func (o *GetRunDownstreamLineageNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunDownstreamLineageNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunDownstreamLineageDefault creates a GetRunDownstreamLineageDefault with default headers values
func NewGetRunDownstreamLineageDefault(code int) *GetRunDownstreamLineageDefault {
	return &GetRunDownstreamLineageDefault{
		_statusCode: code,
	}
}

/* GetRunDownstreamLineageDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetRunDownstreamLineageDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get run downstream lineage default response
func (o *GetRunDownstreamLineageDefault) Code() int {
	return o._statusCode
}

func (o *GetRunDownstreamLineageDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/lineage/downstream][%d] GetRunDownstreamLineage default  %+v", o._statusCode, o.Payload)
}
func (o *GetRunDownstreamLineageDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunDownstreamLineageDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
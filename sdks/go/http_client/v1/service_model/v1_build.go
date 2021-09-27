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

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// V1Build Build definition
//
// swagger:model v1Build
type V1Build struct {

	// Optional flag to disable cache validation and force run this operation
	Cache *V1Cache `json:"cache,omitempty"`

	// Connection to use
	Connection string `json:"connection,omitempty"`

	// Component name to use
	HubRef string `json:"hubRef,omitempty"`

	// Optional dict of params
	Params map[string]V1Param `json:"params,omitempty"`

	// Optional patch strategy, default post_merge
	PatchStrategy *V1PatchStrategy `json:"patchStrategy,omitempty"`

	// Optional list of presets to use for running this tuner
	Presets []string `json:"presets"`

	// Optional queue to use for scheduling the tuner
	Queue string `json:"queue,omitempty"`

	// Optional a run section to override the content of the run in the template
	RunPatch interface{} `json:"runPatch,omitempty"`
}

// Validate validates this v1 build
func (m *V1Build) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCache(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateParams(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePatchStrategy(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Build) validateCache(formats strfmt.Registry) error {
	if swag.IsZero(m.Cache) { // not required
		return nil
	}

	if m.Cache != nil {
		if err := m.Cache.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("cache")
			}
			return err
		}
	}

	return nil
}

func (m *V1Build) validateParams(formats strfmt.Registry) error {
	if swag.IsZero(m.Params) { // not required
		return nil
	}

	for k := range m.Params {

		if err := validate.Required("params"+"."+k, "body", m.Params[k]); err != nil {
			return err
		}
		if val, ok := m.Params[k]; ok {
			if err := val.Validate(formats); err != nil {
				return err
			}
		}

	}

	return nil
}

func (m *V1Build) validatePatchStrategy(formats strfmt.Registry) error {
	if swag.IsZero(m.PatchStrategy) { // not required
		return nil
	}

	if m.PatchStrategy != nil {
		if err := m.PatchStrategy.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("patchStrategy")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 build based on the context it is used
func (m *V1Build) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateCache(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateParams(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidatePatchStrategy(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Build) contextValidateCache(ctx context.Context, formats strfmt.Registry) error {

	if m.Cache != nil {
		if err := m.Cache.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("cache")
			}
			return err
		}
	}

	return nil
}

func (m *V1Build) contextValidateParams(ctx context.Context, formats strfmt.Registry) error {

	for k := range m.Params {

		if val, ok := m.Params[k]; ok {
			if err := val.ContextValidate(ctx, formats); err != nil {
				return err
			}
		}

	}

	return nil
}

func (m *V1Build) contextValidatePatchStrategy(ctx context.Context, formats strfmt.Registry) error {

	if m.PatchStrategy != nil {
		if err := m.PatchStrategy.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("patchStrategy")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Build) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Build) UnmarshalBinary(b []byte) error {
	var res V1Build
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
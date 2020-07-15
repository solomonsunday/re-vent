import React from 'react'
import PlacesAutoComplete from 'react-places-autocomplete';
import { Form, Label, Segment, List } from 'semantic-ui-react';

export const PlaceInput = ({ input: { value, onChange, OnBlur }, width, options, placeholder, meta: { touch, error } }) => {
    return (
        <PlacesAutoComplete value={value}
            onChange={onChange}
            searchOptions={options}>
            {({ getInputprops, suggestions, getSuggestionitemProps, loading })
                => (<Form.Field error={touched && !!error}>
                    <input placeholder={placeholder} {...getInputprops({ placeholder, OnBlur })} />
                    {touched && error && <Label basic color='red'>{error}</Label>}
                    {suggestions.length > 0 && (
                        <Segment>
                            {loading && <div>Loading...</div>}
                            <List selection>
                                {suggestions.map(suggestions => (
                                    <List.Item {...getSuggestionitemProps(suggestions)}>
                                        <List.Header>
                                            {suggestions.formattedSuggestion.mainText}
                                        </List.Header>
                                        <List.Description>
                                            {suggestions.formattedSuggestion.secondaryText}
                                        </List.Description>
                                    </List.Item>
                                ))}

                            </List>
                        </Segment>
                    )}
                </Form.Field>)}

        </PlacesAutoComplete>
    )
}

export default PlaceInput;

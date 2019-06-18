import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ) {
        createItem(
            title: $title
            description: $description
            price: $price
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`;
class CreateItem extends Component {
    state = {
        title: 'Cool Shoes',
        description: 'This is desc.',
        image: 'dog.jpg',
        largeImage: 'large-dog.jpg',
        price: 34
    };
    handleChange = e => {
        // console.log(e.target.value);
        const { name, type, value } = e.target;
        // console.log({ name, type, value });
        const val = type === 'number' ? parseFloat(value) : value;
        // this.setState({ title: e.target.value });
        this.setState({ [name]: val });
    };
    render() {
        return (
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {/* {(mutationfunction, payload) => { */}
                {(createItem, { loading, error }) => (
                    <Form
                        onSubmit={async e => {
                            // Stop the form from submitting
                            e.preventDefault();
                            // console.log(this.state);

                            // call the mutation
                            const res = await createItem();
                            // change them to the single item page
                            console.log(res);
                            Router.push({
                                pathname: '/item',
                                query: { id: res.data.createItem.id }
                            });
                        }}
                    >
                        <Error error={error} />
                        {/* <h2>Sell an Item.</h2> */}
                        <fieldset disabled={loading} aria-busy={loading}>
                            <label htmlFor="title">
                                Title
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title"
                                    required
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                            </label>

                            <label htmlFor="price">
                                Price
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder="Price"
                                    required
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                />
                            </label>

                            <label htmlFor="description">
                                Description
                                <textarea
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Enter a Description"
                                    required
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </fieldset>
                    </Form>
                )}
            </Mutation>
        );
    }
}

export default CreateItem;

const graphql = require('graphql');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType', 
    fields: {
        email: {
            type: GraphQLString
        }, 
        id: { type: graphql.GraphQLID}
    }
});

module.exports = UserType;


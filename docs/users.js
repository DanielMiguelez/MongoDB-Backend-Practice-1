module.exports = {
  paths: {
    "/users/createUser": {
      post: {
        security: [{
            ApiKeyAuth: [ ]
            }],

        tags: {
          Users: "Create users",
        },

        description: "Create users",

        operationId: "createUser",

        parameters: [
           
        ],

        responses: {
          200: {
            description: "users were created",

            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = {
  paths: {
    "/orders/createOrder": {
      post: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],

        tags: {
          Orders: "Create orders",
        },

        description: "Create orders",

        operationId: "create Orders",

        parameters: [],

        responses: {
          200: {
            description: "Orders were created",

            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/order",
                },
              },
            },
          },
        },
      },
    },
  },
};

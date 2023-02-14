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

    "/orders/updateOrderById/{_id}": {
      put: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
        tags: {
          Orders: "Update an order",
        },

        description: "Update Order",

        operationId: "updateOrder",

        parameters: [
          {
            status: "string",

            in: "path",

            schema: {
              $ref: "#/components/schemas/order_id",
            },

            description: "Id of the order to be updated",
          },
        ],

        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/order" },
            },
          },
        },

        responses: {
          200: { description: "Product updated successfully" },

          404: { description: "Product not found" },

          500: { description: "Server error" },
        },
      },
    },
  },
};

module.exports = {
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },

      schemas: {
        product: {
          type: "object",

          properties: {
            _id: {
              type: "objectId",
              description: "product identification number",
              example: "6201064b0028de7866e2b2c4",
            },

            name: {
              type: "string",
              description: "Product's title",
              example: "Product name",
            },

            price: {
              type: "number",
              description: "The price of the product",
              example: 20,
            },
            reviews: {
              type: "array",
              description: "The reviews of the product",
              example: 20,
            },
            likes: {
              type: "objectId",
              description: "The likes of the product",
              example: 20,
            },
          },
        },
        ProductInput: {
          type: "object",

          properties: {
            name: {
              type: "string",

              description: "Product's name",

              example: "create a product",
            },

            price: {
              type: "number",

              description: "Price of the product",

              example: 1,
            },
          },
        },
        _id: {
          type: "objectId",

          description: "An id of a product",

          example: "6201064b0028de7866e2b2c4",
        },
      },
    },
  },
};
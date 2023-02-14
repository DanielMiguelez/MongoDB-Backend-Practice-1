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
        name: {
          type: "string",

          description: "A name of a product",

          example: "Balon",
        },
      },

      schemas: {
        order: {
          type: "object",

          properties: {
            _id: {
              type: "ObjectId",
              description: "order identification number",
              example: "6201064b0028de7866e2b2c4",
            },

            status: {
              type: "string",
              description: "Order status",
              example: "available",
            },

            deliveryDate: {
              type: "number",
              description: "the date of the order",
              example: 20 / 10 / 2023,
            },
            productIds: {
              type: "array",
              description: "The products of the order",
              example: 4445,
            },
          },
        },

        OrderInput: {
          type: "object",

          properties: {
            status: {
              type: "string",

              description: "Order status",

              example: "available",
            },

            deliveryDate: {
              type: "date",

              description: "date of the order",

              example: "20/10/2023",
            },
            productIds: {
              type: "array",

              description: "products of the order",

              example: 20 / 10 / 2023,
            },
          },
        },

        order_id: {
          type: "objectId",

          description: "An id of an order",

          example: "6201064b0028de7866e2b2c4",
        },
        status: {
          type: "string",

          description: "An status of an order",

          example: "available",
        },
      },

      schemas: {
        user: {
          type: "object",

          properties: {
            _id: {
              type: "ObjectId",
              description: "user identification number",
              example: "6201064b0028de7866e2b2c4",
            },

            name: {
              type: "string",
              description: "User name",
              example: "Dani",
            },

            email: {
              type: "number",
              description: "user email",
              example: "dani@gmail.com",
            },
            password: {
              type: "string",
              description: "password",
              example: "holita",
            },
            age: {
              type: "number",
              description: "age",
              example: 20,
            },
            tokens: {
              type: "array",
              description: "The tokens of the user",
              example: 4445,
            },
            orderIds: {
              type: "array",
              description: "The ids of the orders",
              example: 4445,
            },
            wishList: {
              type: "array",
              description: "The likes to products",
              example: "balon liked",
            },
          },
        },
      },
    },
  },
};

module.exports = {
  paths: {
    "/products/getAllProducts": {
      get: {
        tags: {
          Tasks: "Get all products",
        },

        description: "Get products",

        operationId: "getAllProducts",

        parameters: [],

        responses: {
          200: {
            description: "Products were obtained",

            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/product",
                },
              },
            },
          },
        },
      },
    },

    "/products/createProduct": {
      post: {

        security: [{
          ApiKeyAuth: [ ]
          }],

        tags: {
          Tasks: "Create product",
        },

        description: "Create products",

        operationId: "createProduct",

        parameters: [],

        responses: {
          200: {
            description: "Products was created",

            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/product",
                },
              },
            },
          },
        },
      },
    },
    "/products/updateProductById/{_id}": {
      put: {
        security: [{
          ApiKeyAuth: [ ]
          }],
        tags: {
          Products: "Update a product",
        },

        description: "Update Product",

        operationId: "updateProduct",

        parameters: [
          {
            name: "_id",

            in: "path",

            schema: {
              $ref: "#/components/schemas/_id",
            },

            description: "Id of Product to be updated",
          },
        ],

        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ProductInput" },
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
    "/products/getProductById/{_id}": {
      get: {
      
        tags: {
          Products: "Get by Id",
        },

        description: "get Product By Id",

        operationId: "getProductById",

        parameters: [
          {
            name: "_id",

            in: "path",

            schema: {
              $ref: "#/components/schemas/_id",
            },

            description: "get Product By Id",
          },
        ],

        responses: {
          200: { description: "Product by Id successfully" },

          404: { description: "Product not found" },

          500: { description: "Server error" },
        },
      },
    },
    "/products/deleteProduct/{_id}": {
      delete: {
        security: [{
          ApiKeyAuth: [ ]
          }],
        tags: {
          Products: "Delete a product",
        },

        description: "Deleting a Product",

        operationId: "deleteProduct",

        parameters: [
          {
            name: "_id",

            in: "path",

            schema: {
              $ref: "#/components/schemas/_id",
            },

            description: "Deleting a created Product",
          },
        ],

        responses: {
          200: { description: "Product deleted successfully" },

          404: { description: "Product not found" },

          500: { description: "Server error" },
        },
      },
    },
  },
};

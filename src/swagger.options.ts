export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'The API of The Road',
        version: '1.0.0',
        description: "Schoolar project 'The Road', using Express, TypeScript, and Swagger.",
      },
      servers: [
        {
            name: 'Desarrollo',
            url: `http://localhost:${process.env.PORT ? process.env.PORT : 3000 }`,
        },
        {
            name: 'Producción',
            url: 'www.google.com',
        }
      ],
    },
    apis: ['./src/routes/*.ts'],
  };
  
export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'The API of The Road',
      version: '1.1.0',
      description: "Schoolar project 'The Road', using Express, TypeScript, and Swagger.",
    },
    servers: [
      {
        name: 'Desarrollo',
        url: `http://localhost:${process.env.PORT ? process.env.PORT : 3200 }`,
      },
      {
        name: 'Render',
        url: 'https://the-road-api.onrender.com/',
      },
      {
        name: 'Vercel',
        url: 'https://the-road-api.vercel.app/',
      },
    ],
  },
  apis: [
    './dist/**/*.js',
    './src/routes/*.ts',
  ],
};

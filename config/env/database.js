module.exports = ({ env }) => ({
    defaultConnection: "default",
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "sarang"),
        user: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "12345"),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl:{
            ca:env('DATABASE_CA'),
        }
      },
      debug:false,
    }
  });
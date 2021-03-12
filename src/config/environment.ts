enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  STAGING = 'staging',
  TEST = 'test',
}

export const isEnvironment = (environment: Environment): boolean =>
  process.env.NODE_ENV === environment;

export default Environment;

export const jwtConstants = {
    secret: 'supersecretkey123', // In real apps, use env vars!
  };
  
  export const users = [
    {
      id: 1,
      username: 'admin',
      password: 'admin123', // We'll later hash this
      role: 'admin',
    },
  ];
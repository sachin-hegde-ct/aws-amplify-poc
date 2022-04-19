interface User {
  name: string;
}

export const useAuth = () =>
  useState<User>("user", () => {
    name: "";
  });

import { useQuery } from "@tanstack/react-query";
import { User } from "../../types/user";

const useCheckAuth = () => {
  const { data, isLoading } = useQuery<User>({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/auth/me");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch user data");
        }
        return data;
      } catch (error) {
        console.error("Error fetching auth user:", error);
      }
    },
  });

  return { data, isLoading };
};

export default useCheckAuth;

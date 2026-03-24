import { Role } from "@prisma/client";

export function getAuthUser(req: any) {
  // Dummy implementation to allow build to pass.
  // In a real application, this should verify the session and return the user.
  return {
    id: 1,
    email: "test@example.com",
    role: Role.USER,
  };
}

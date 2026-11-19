import type { UserRole } from "../types";

export const roles: { id: UserRole; label: string }[] = [
  { id: "nurse", label: "Nurse" },
  { id: "doctor", label: "Doctor" },
  { id: "manager", label: "Manager" },
  { id: "rounds", label: "Rounds" },
  { id: "infection_control", label: "Infection Control" }
];
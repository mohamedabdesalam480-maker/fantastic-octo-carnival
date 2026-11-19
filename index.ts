export type UserRole = "nurse" | "doctor" | "manager" | "rounds" | "infection_control";

export type AppUser = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  departmentId?: string;
};

export type TaskStatus = "pending" | "in_progress" | "completed" | "cancelled";
export type TaskPriority = "low" | "normal" | "high" | "urgent";

export type NursingTask = {
  id: string;
  title: string;
  description?: string;
  assignedTo: string;
  createdBy: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueAt?: string;
  createdAt: string;
};
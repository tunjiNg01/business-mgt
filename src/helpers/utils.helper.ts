import { toast } from "sonner";

export const customToast = (message: string, description: string) => {
  return toast.success(message, {
    description: description,
    position: "top-right",
    // variant: "success",
    duration: 3000,
  });
};

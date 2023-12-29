import { toast, ToastOptions } from "react-toastify"

export const useToast = () => {
  const success = (content: string, options?: ToastOptions<{}> | undefined) =>
    toast(content, {
      ...options,
      type: "success",
    })

  const error = (content: string, options?: ToastOptions<{}> | undefined) =>
    toast(content, {
      ...options,
      type: "error",
    })

  const info = (content: string, options?: ToastOptions<{}> | undefined) =>
    toast(content, {
      ...options,
      type: "info",
    })

  const warning = (content: string, options?: ToastOptions<{}> | undefined) =>
    toast(content, {
      ...options,
      type: "warning",
    })

  return {
    toast,
    info,
    error,
    warning,
    success,
  }
}

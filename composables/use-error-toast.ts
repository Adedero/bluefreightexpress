import type { FetchError } from 'ofetch'
import type { ToastServiceMethods } from "primevue";

export default function useErrorToast(error: FetchError | Error | unknown, toast: ToastServiceMethods) {
  toast.add({
    severity: 'error',
    //@ts-expect-error
    summary: error.name || 'Error',
    //@ts-expect-error
    detail: error.statusMessage || error.message || error
  })
}
import type { FetchError } from 'ofetch'
import type { ToastServiceMethods } from "primevue";

export default function useErrorToast(error: FetchError, toast: ToastServiceMethods) {
  toast.add({
    severity: 'error',
    summary: error.name,
    detail: error.statusMessage
  })
}
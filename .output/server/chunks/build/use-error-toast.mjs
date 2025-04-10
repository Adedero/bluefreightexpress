function useErrorToast(error, toast) {
  toast.add({
    severity: "error",
    //@ts-expect-error
    summary: error.name || "Error",
    //@ts-expect-error
    detail: error.statusMessage || error.message || error
  });
}

export { useErrorToast as u };
//# sourceMappingURL=use-error-toast.mjs.map

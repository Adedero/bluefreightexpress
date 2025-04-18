function useErrorToast(error, toast) {
  var _a;
  toast.add({
    severity: "error",
    //@ts-expect-error
    summary: error.name || "Error",
    //@ts-expect-error
    detail: ((_a = error.data) == null ? void 0 : _a.statusMessage) || error.statusMessage || error.message || error.toString()
  });
}

export { useErrorToast as u };
//# sourceMappingURL=use-error-toast.mjs.map

export default function useNavbarFix(el: Ref<HTMLElement | null>) {
  const controller = new AbortController()

  onMounted(() => {
    if (!el.value) return

    window.addEventListener('scroll', onWindowScroll, { signal: controller.signal })
  })

  onUnmounted(() => {
    controller.abort()
  })

  function onWindowScroll() {
    const { scrollY } = window
    if (scrollY >= 144) {
      el.value?.classList.add('fixed')
      el.value?.classList.remove('absolute')
    } else {
      el.value?.classList.remove('fixed')
      el.value?.classList.add('absolute')
    }
  }
}
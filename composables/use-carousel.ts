export interface UseCarouselOptions {
  autoplay?: boolean
  breakpoints?: { minScreenSize: number, itemsVisible: number }[] //will override the itemsVisible option if present
  cyclic?: boolean
  interval?: number
  itemsVisible?: number //will use the normal width of the children if not defined
  transition?: 'fade' | 'slide' | null
}

export default function useCarousel(el: Ref<HTMLElement | null>, options: UseCarouselOptions = {}) {
  const currentIndex = ref<number>(0)
  const itemsVisible = ref<number>(options.itemsVisible || 1)
  const intervalId = ref<ReturnType<typeof setTimeout> | null>(null)
  const isTransitioning = ref<boolean>(false)
  const { autoplay = false, interval = 3000, breakpoints = [], transition = 'slide', cyclic = true } = options
  
  // Setup carousel styles
  const setupCarouselStyles = () => {
    if (!el.value) return
    
    // Style container
    el.value.style.display = 'flex'
    el.value.style.overflow = 'hidden'
    el.value.style.position = 'relative'
    
    // Style children
    const itemWidth = 100 / itemsVisible.value
    Array.from(el.value.children).forEach((child, index) => {
      (child as HTMLElement).style.flex = `0 0 ${itemWidth}%`;
      (child as HTMLElement).style.boxSizing = 'border-box';
      (child as HTMLElement).style.transition = 'transform 0.3s ease-in-out';
    })
  }
  
  const updateItemsVisible = () => {
    if (breakpoints.length) {
      const sortedBreakpoints = [...breakpoints].sort((a, b) => a.minScreenSize - b.minScreenSize)
      const screenWidth = window.innerWidth
      const matchingBreakpoint = sortedBreakpoints.find(bp => screenWidth >= bp.minScreenSize)
      itemsVisible.value = (matchingBreakpoint ? matchingBreakpoint.itemsVisible : options.itemsVisible) || 1
      
      // Update styles when items visible changes
      setupCarouselStyles()
    }
  }
  
  const getTotalItems = () => el.value?.children.length || 0
  
  const getMaxIndex = () => {
    const totalItems = getTotalItems()
    return Math.max(0, totalItems - itemsVisible.value)
  }
  
  const next = () => {
    if (!el.value || isTransitioning.value) return
    isTransitioning.value = true
    
    const maxIndex = getMaxIndex()
    
    if (cyclic || currentIndex.value < maxIndex) {
      currentIndex.value = cyclic 
        ? (currentIndex.value + 1) % (maxIndex + 1) 
        : Math.min(currentIndex.value + 1, maxIndex)
    }
    
    setTimeout(() => (isTransitioning.value = false), transition === 'fade' ? 500 : 300)
  }
  
  const prev = () => {
    if (!el.value || isTransitioning.value) return
    isTransitioning.value = true
    
    const maxIndex = getMaxIndex()
    
    if (cyclic || currentIndex.value > 0) {
      currentIndex.value = cyclic 
        ? (currentIndex.value - 1 + maxIndex + 1) % (maxIndex + 1) 
        : Math.max(currentIndex.value - 1, 0)
    }
    
    setTimeout(() => (isTransitioning.value = false), transition === 'fade' ? 500 : 300)
  }
  
  const startAutoplay = () => {
    if (autoplay && interval) {
      intervalId.value = setInterval(next, interval)
    }
  }
  
  const stopAutoplay = () => {
    if (intervalId.value) {
      clearInterval(intervalId.value)
      intervalId.value = null
    }
  }
  
  onMounted(() => {
    setupCarouselStyles()
    updateItemsVisible()
    startAutoplay()
    window.addEventListener('resize', updateItemsVisible)
  })
  
  onUnmounted(() => {
    stopAutoplay()
    window.removeEventListener('resize', updateItemsVisible)
  })
  
  watch(currentIndex, () => {
    if (!el.value) return
    
    const itemWidth = 100 / itemsVisible.value
    const translateXValue = -currentIndex.value * itemWidth
    
    if (transition === 'fade') {
      el.value.style.transition = 'opacity 0.5s'
      el.value.style.opacity = '0'
      setTimeout(() => {
        el.value!.style.transform = `translateX(${translateXValue}%)`
        el.value!.style.opacity = '1'
      }, 250)
    } else if (transition === 'slide') {
      el.value.style.transition = 'transform 0.3s ease-in-out'
      el.value.style.transform = `translateX(${translateXValue}%)`
    }
  })
  
  return { 
    next, 
    prev, 
    currentIndex,
    itemsVisible,
    goTo: (index: number) => {
      if (!el.value) return
      const maxIndex = getMaxIndex()
      currentIndex.value = Math.max(0, Math.min(index, maxIndex))
    }
  }
}
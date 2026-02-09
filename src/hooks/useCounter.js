import { useEffect, useRef, useState } from 'react'

export function useCounter(target, suffix = '', prefix = '', duration = 2000) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true
            let startTime = null

            function step(timestamp) {
              if (!startTime) startTime = timestamp
              const progress = Math.min((timestamp - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Math.floor(eased * target))
              if (progress < 1) {
                requestAnimationFrame(step)
              } else {
                setValue(target)
              }
            }
            requestAnimationFrame(step)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  const display = `${prefix}${value.toLocaleString()}${suffix}`
  return { ref, display }
}

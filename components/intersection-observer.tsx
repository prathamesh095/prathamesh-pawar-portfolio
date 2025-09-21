"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting

        if (isElementIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsIntersecting(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else if (!triggerOnce) {
          setIsIntersecting(isElementIntersecting)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { elementRef, isIntersecting }
}

interface LazyLoadProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export function LazyLoad({ children, className = "", threshold = 0.1, rootMargin = "100px" }: LazyLoadProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  return (
    <div ref={elementRef} className={className}>
      {isIntersecting ? children : <div className="min-h-[200px]" />}
    </div>
  )
}

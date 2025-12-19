import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { enableMapSet } from 'immer'
import { persist } from 'zustand/middleware'
import superjson from 'superjson'
import dayjs from 'dayjs'

type Store = {
  list: Map<string, Stopwatch>
  add(): void
  remove(id: string): void
  update(id: string, label: string): void
  isPaused(id: string): boolean
  togglePause(id: string): void
}

export type Stopwatch = {
  id: string
  label: string
  stops: string[]
}

enableMapSet()

export const stopwatchStore = create(
  persist(
    immer(
      (set, get): Store => ({
        list: new Map<string, Stopwatch>(),

        add() {
          set((state) => {
            const id = state.list.size + ''
            state.list.set(id, { id, label: 'label', stops: [] })
          })
        },

        remove(id: string) {
          set((state) => {
            state.list.delete(id)
          })
        },

        update(id: string, label: string) {
          set((state) => {
            const stopwatch = state.list.get(id)
            if (stopwatch) {
              stopwatch.label = label
            }
          })
        },

        isPaused(id: string) {
          const stopwatch = get().list.get(id)
          return !stopwatch || stopwatch.stops.length % 2 == 0
        },

        togglePause(id: string) {
          set((state) => {
            const stopwatch = state.list.get(id)
            stopwatch?.stops.push(dayjs().millisecond(0).toISOString())
          })
        },
      }),
    ),
    {
      name: 'stopwatch-store',
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name)
          return item ? superjson.parse<any>(item) : null
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, superjson.stringify(value))
        },
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    },
  ),
)

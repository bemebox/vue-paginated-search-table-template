import { defineStore } from 'pinia'

interface Circuit {
  circuitId: string
  circuitName: string
  location: {
    lat: string
    long: string
    locality: string
    country: string
  }
  url: string
}

interface StoreState {
  currentPage: number
  totalPages: number
  pageLimit: number
  circuits: Circuit[]
}

export const useCircuitStore = defineStore('circuitStore', {
  state: (): StoreState => ({
    currentPage: 0,
    totalPages: 0,
    pageLimit: 10,
    circuits: []
  }),
  actions: {
    async getPageData(pageNumber: number = 1) {
      try {
        const response = await fetch(
          `http://ergast.com/api/f1/circuits.json?limit=10&offset=${(pageNumber - 1) * this.pageLimit}`
        )
        const data = await response.json()

        // Extract circuits from the JSON response
        const circuits = data.MRData.CircuitTable.Circuits.map((circuit: any) => ({
          circuitId: circuit.circuitId,
          circuitName: circuit.circuitName,
          location: {
            lat: circuit.Location.lat,
            long: circuit.Location.long,
            locality: circuit.Location.locality,
            country: circuit.Location.country
          },
          url: circuit.url
        }))
        this.circuits = circuits

        this.currentPage = pageNumber
        this.totalPages = Math.ceil(data.MRData.total / this.pageLimit) // Calculate total pages
      } catch (error) {
        console.error('Error fetching search results:', error)
        throw new Error('Failed to fetch search results')
      }
    }
  }
})

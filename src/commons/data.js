import { Entries, NewEntries } from "../pages"; 

export const pages = [
    {
      path: '/',
      Component: NewEntries,
      name: "NewEntries",
    },
    {
      path: '/entry-details',
      Component: Entries,
      name: "Entries",
    }
]
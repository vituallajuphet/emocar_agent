import { Entries, NewEntries } from "../pages"; 

export const pages = [
    {
      path: '/',
      Component: NewEntries,
      name: "New Entries",
      exact:true,
    },
    {
      path: '/entry-details',
      Component: Entries,
      name: "Entries",
      exact:true,
    }
]
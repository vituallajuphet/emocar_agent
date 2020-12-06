import { 
  Entries, 
  NewEntries, 
  Login,
  PageNotFound 
} from "../pages"; 

export const pages = [
    {
      path: '/entries',
      Component: NewEntries,
      name: "New Entries",
      exact:true,
      icon:"fa fa-plus",
      meta:{ auth: true }
    },
    {
      path: '/entry-details',
      Component: Entries,
      name: "Entries",
      exact:true,
      icon: "fa fa-file",
      meta:{ auth: true }
    },
    {
      path: '/login',
      Component: Login,
      name: "Login",
      exact:true,
      icon: "fa fa-file",
      meta:{ auth: false }
    }
]
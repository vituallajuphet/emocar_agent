import { 
  Entries, NewEntries, Login 
} from "../pages"; 

export const pages = [
    {
      path: '/',
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
      icon: "fa fa-file"
    }
]
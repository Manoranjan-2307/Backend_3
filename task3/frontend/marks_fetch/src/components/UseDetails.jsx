import {create} from 'zustand';

const UserDetails = create((set)=>({
    
    user:null,
    login:(userData)=>set({user:userData}),
    logout:()=>set({user:null}),
}))
export default UserDetails; 
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth'

export const auth = getAuth()



// const createUser = (email: string, password: string, name: string) => {
//     createUserWithEmailAndPassword(auth, email, password)
//     .then(cred => {
//         updateProfile(cred.user, {
//             displayName: name
//         })
//         console.log('user created::',cred.user);
//     })
//     .catch(err => {
//         console.log(err.message); 
//     })
// }


export {}

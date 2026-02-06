<script type="module">

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore,
doc,setDoc,getDoc,updateDoc,
collection,addDoc,getDocs
} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "PASTE",
 authDomain: "PASTE",
 projectId: "PASTE",
 storageBucket: "PASTE",
 messagingSenderId: "PASTE",
 appId: "PASTE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

</script>

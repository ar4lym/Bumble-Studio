// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseconfig = {
  apiKey: "AIzaSyCMBQVUaY_rAgIGmGcFDF1BlfSidKKcIrM",
  authDomain: "bumble-studio-c4a23.firebaseapp.com",
  databaseURL:
    "https://bumble-studio-c4a23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bumble-studio-c4a23",
  storageBucket: "bumble-studio-c4a23.firebasestorage.app",
  messagingSenderId: "510811662952",
  appId: "1:510811662952:web:0b4d4cfa02b956531d69dd",
  measurementId: "G-2HR4Z7Z8F6",
};

// Initialize Firebase
const app = initializeApp(firebaseconfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const uid = userCredential.user.uid;

      const snapshot = await get(ref(db, "players/" + uid));

      if (snapshot.exists()) {
        const playerData = snapshot.val();

        localStorage.setItem("playerData", JSON.stringify(playerData));
        localStorage.setItem("uid", uid);

        window.location.href = "index.html";
      } else {
        alert("No player data found.");
      }
    } catch (error) {
      alert("Login error: " + error.message);
      console.error(error);
    }
  });
}

/**
 * ======================================================
 * SIGN-UP HANDLER
 * ======================================================
 * Creates a new user
 */
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const uid = userCredential.user.uid;

      localStorage.setItem("uid", uid);

      const playerData = {
        username,
        email,
        password,
      };

      await set(ref(db, `players/${uid}`), playerData);
      window.location.href = "index.html";
    } catch (error) {
      alert("Sign up error: " + error.message);
      console.error(error);
    }
  });
}

const leaderboardBody = document.getElementById("leaderboardTableBody");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "all"; // default filter

// Fetch players from Firebase
const playersRef = ref(db, "players");
onValue(playersRef, (snapshot) => {
  if (!snapshot.exists()) return;
  updateLeaderboard(snapshot.val());
});

// Update leaderboard
function updateLeaderboard(players) {
  let results = [];

  for (const uid in players) {
    const player = players[uid];
    const username = player.userName || "Unknown"; // <-- grab userName here

    if (!player.sceneEntries) continue;

    for (const scene in player.sceneEntries) {
      if (currentFilter !== "all" && scene !== currentFilter) continue;

      const bestTime = player.sceneEntries[scene].bestTime;
      if (bestTime != null) {
        results.push({
          name: username, // <-- this will display the Firebase userName
          scene: scene,
          time: parseFloat(bestTime),
        });
      }
    }
  }

  // Sort ascending by time
  results.sort((a, b) => a.time - b.time);

  // Take top 5
  const top5 = results.slice(0, 5);

  renderLeaderboard(top5);
}

// Render leaderboard table
function renderLeaderboard(data) {
  leaderboardBody.innerHTML = "";
  data.forEach((entry, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${entry.name}</td> <!-- Name column now uses Firebase userName -->
        <td>${entry.scene}</td>
        <td>${entry.time.toFixed(2)}</td>
      </tr>
    `;
    leaderboardBody.innerHTML += row;
  });
}

// Filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.getAttribute("data-Scene");
    // Refresh leaderboard
    onValue(
      playersRef,
      (snapshot) => {
        if (!snapshot.exists()) return;
        updateLeaderboard(snapshot.val());
      },
      { onlyOnce: true },
    );
  });
});

const achievementsContainer = document.getElementById("achievementsContainer");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    achievementsContainer.innerHTML = `
      <div class="col-12 text-center">
        <p class="lead">Please <a href="login.html">log in</a> to view your achievements.</p>
      </div>
    `;
    return;
  }

  const uid = user.uid;
  const achRef = ref(db, `players/${uid}/achievement`);
  const snapshot = await get(achRef);

  if (!snapshot.exists()) {
    achievementsContainer.innerHTML = `
      <div class="col-12 text-center">
        <p class="lead">No achievements earned yet. Play some scenes to earn badges!</p>
      </div>
    `;
    return;
  }

  const achievements = snapshot.val();
  achievementsContainer.innerHTML = "";

  // Loop through each badge type
  for (const badgeType in achievements) {
    const badge = achievements[badgeType];

    // Render each badge
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title fw-bold">${badge.title || "Untitled Badge"}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${badge.sceneName || "Unknown Scene"}</h6>
            <p class="card-text">${badge.description || "No description available."}</p>
          </div>
        </div>
      </div>
    `;
    achievementsContainer.innerHTML += card;
  }
});

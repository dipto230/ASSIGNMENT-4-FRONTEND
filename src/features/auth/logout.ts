export async function logout() {
  await fetch("http://localhost:5000/api/auth/sign-out", {
    method: "POST",
    credentials: "include",
  });

  window.location.href = "/";
}

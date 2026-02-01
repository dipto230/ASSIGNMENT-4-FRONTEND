export async function logout() {
  await fetch("/api/auth/sign-out", {
    method: "POST",
    credentials: "include",
  });

  window.location.href = "/";
}

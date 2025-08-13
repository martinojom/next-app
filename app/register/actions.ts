"use server";

export async function submitUserForm(previusState: string, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, password);
  return { email, password };
}

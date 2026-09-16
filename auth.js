const { createClient } = window.supabase;

const db = createClient(
  window.KAS_SUPABASE_URL,
  window.KAS_SUPABASE_KEY
);

const form = document.querySelector("#authForm");
const message = document.querySelector("#message");
const nameWrap = document.querySelector("#nameWrap");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const subtitle = document.querySelector("#subtitle");

let mode = "register";

function showMessage(text, type = "") {
  message.textContent = text;
  message.className = `message ${type}`;
}

function setMode(nextMode) {
  mode = nextMode;

  document
    .querySelector("#registerTab")
    .classList.toggle("active", mode === "register");

  document
    .querySelector("#loginTab")
    .classList.toggle("active", mode === "login");

  nameWrap.hidden = mode === "login";

  subtitle.textContent =
    mode === "register"
      ? "Crie seu acesso para continuar."
      : "Entre com o cadastro confirmado.";

  submit.textContent =
    mode === "register"
      ? "Criar minha conta →"
      : "Entrar no KAS →";

  showMessage("");
}

document.querySelector("#registerTab").onclick = () => {
  setMode("register");
};

document.querySelector("#loginTab").onclick = () => {
  setMode("login");
};

(async function verificarSessao() {
  const { data } = await db.auth.getSession();

  if (data.session) {
    window.location.href = "app.html";
  }
})();

form.onsubmit = async function (event) {
  event.preventDefault();

  showMessage("");
  submit.disabled = true;
  submit.textContent = "Aguarde...";

  try {
    const userEmail = email.value.trim().toLowerCase();

    if (mode === "register") {
      const { data, error } = await db.auth.signUp({
        email: userEmail,
        password: password.value,
        options: {
          data: {
            name: name.value.trim()
          },
          emailRedirectTo: window.location.href
        }
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        await db.from("profiles").upsert({
          id: data.user.id,
          name: name.value.trim(),
          email: userEmail
        });

        window.location.href = "app.html";
      } else {
        showMessage(
          "Cadastro criado. Verifique seu e-mail e confirme o link antes de entrar.",
          "success"
        );
      }
    } else {
      const { data, error } = await db.auth.signInWithPassword({
        email: userEmail,
        password: password.value
      });

      if (error) {
        throw error;
      }

      const profileName =
        data.user.user_metadata?.name || "Usuário KAS";

      const { error: profileError } = await db
        .from("profiles")
        .upsert({
          id: data.user.id,
          name: profileName,
          email: data.user.email
        });

      if (profileError) {
        throw profileError;
      }

      window.location.href = "app.html";
    }
  } catch (error) {
    showMessage(
      error.message || "Não foi possível concluir a operação."
    );
  } finally {
    submit.disabled = false;

    submit.textContent =
      mode === "register"
        ? "Criar minha conta →"
        : "Entrar no KAS →";
  }
};

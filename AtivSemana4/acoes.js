const formulario = document.getElementById("formulario-contato");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");

if (formulario) {
    formulario.querySelector('button[type="submit"]').disabled = false;

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        for (const nome of ["nome", "email", "mensagem"]) {
            const campo = formulario.elements.namedItem(nome);
            if (campo && !campo.value.trim()) {
                campo.setCustomValidity("Preencha este campo.");
                campo.reportValidity();
                return;
            }
        }

        if (senha && confirmaSenha && senha.value !== confirmaSenha.value) {
            confirmaSenha.setCustomValidity("As senhas não conferem.");
            confirmaSenha.reportValidity();
            return;
        }

        const dados = {
            nome: formulario.elements.namedItem("nome")?.value.trim() || "",
            email: formulario.elements.namedItem("email")?.value.trim() || "",
            mensagem: formulario.elements.namedItem("mensagem")?.value.trim() || ""
        };

        sessionStorage.setItem("dadosFormulario", JSON.stringify(dados));
        window.location.href = "recebedados.html";
    });

    formulario.addEventListener("input", (evento) => {
        evento.target.setCustomValidity("");
    });
}
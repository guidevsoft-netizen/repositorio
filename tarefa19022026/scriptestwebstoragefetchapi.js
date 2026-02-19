document.getElementById("cep").addEventListener("blur", (evento)=> {
   const elemento = evento.target;
   const cepinformado = elemento.value;
   if (!(cepinformado.length === 8)) {
      return;
   }
   fetch(`https://viacep.com.br/ws/${cepinformado}/json/`)
      .then(response => response.json())
      .then(dados => {
        if (!dados.erro) {
            document.getElementById("logradouro").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;
            localStorage.setItem("cepSalvado", cepinformado);
            localStorage.setItem("logradouroSalvo", dados.logradouro);
            localStorage.setItem("bairroSalvo", dados.bairro);
            localStorage.setItem("cidadeSalva", dados.localidade);
            localStorage.setItem("estadoSalvo", dados.uf);
        } else {
            alert("CEP não informado.");
        }
      })
      .catch(error => console.error("Erro ao buscar o CEP: ", error));
});
window.addEventListener("load", ()=> {
   const cepSalvo = localStorage.getItem("cepSalvado");
   if (cepSalvo) {
      document.getElementById("cep").value = cepSalvo;
   }
   const logradouroSalvo = localStorage.getItem("logradouroSalvo");
   if (logradouroSalvo) {
      document.getElementById("logradouro").value = logradouroSalvo;
   }
   const bairroSalvo = localStorage.getItem("bairroSalvo");
   if (bairroSalvo) {
      document.getElementById("bairro").value = bairroSalvo;
   }
   const cidadeSalva = localStorage.getItem("cidadeSalva");
   if (cidadeSalva) {
      document.getElementById("cidade").value = cidadeSalva;
   }
   const estadoSalvo = localStorage.getItem("estadoSalvo");
   if (estadoSalvo) {
      document.getElementById("estado").value = estadoSalvo;
   }
});
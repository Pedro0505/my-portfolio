export default function calculateAge(dataNascimento) {
  const dataAtual = new Date();

  let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

  if (
    dataAtual.getMonth() < dataNascimento.getMonth()
    || (dataAtual.getMonth() === dataNascimento.getMonth()
    && dataAtual.getDate() < dataNascimento.getDate())
  ) {
    idade -= 1;
  }

  return idade;
}

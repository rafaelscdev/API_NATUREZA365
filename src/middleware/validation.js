const yup = require('yup');

const usuarioSchema = yup.object().shape({
    email: yup.string()
    .required("Email é um campo obrigatório.")
    .email("Insira um endereço de email válido."),

    senha: yup.string()
    .required("Senha é um campo obrigatório.")
    .min(8, "A senha deve conter no mínimo 8 caracteres."),

    nome: yup.string()
    .required("Nome é um campo obrigatório.")
    .matches(/^[a-zA-Z\s]*$/, 'Nome deve conter apenas letras.'),

    sexo: yup.string()
    .oneOf(['Masculino', 'Feminino'], "Apenas opções de Feminino ou Masculino no presente momento."),

    cpf: yup.string()
    .required("CPF é um campo obrigatório.")
    .matches(/^[0-9]{11}$/, 'CPF deve conter 11 dígitos numéricos'),

    endereco: yup.string()
    .required("Endereço é um campo obrigatório."),

    data_nascimento: yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Data de nascimento deve estar no formato aaaa-mm-dd')
    .nullable(),

    celular: yup.string().
    matches(/^[0-9]*$/, 'Celular deve conter apenas números')
    .nullable(),
});

const localSchema = yup.object().shape({
    nome: yup.string()
    .required("Nome é um campo obrigatório."),

    cep: yup.string()
    .required("CEP é um campo obrigatório.")
    .matches(/^[0-9]{8}$/, "O CEP precisa ter 8 dígitos."),

});



module.exports = {usuarioSchema, localSchema}

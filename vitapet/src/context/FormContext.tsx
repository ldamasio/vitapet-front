'use client'

import React, { createContext, useState } from 'react';

export interface FormState {
  // Defina a estrutura de dados conforme os passos do formulário
  codigoPlano: string;
  dataAdmissao: string;
  tipoPet: string;
  racaPet: string;
  nomePet: string;
  sexoPet: string;
  dataNascimentoPet: string;
  nomePrimeiroTutor: string;
  cpfTutorPrincipal: string;
  nomeSegundoTutor: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
  emailTutor: string;
  telefonePrincipal: string;
  telefoneSecundario: string;
  outroTelefone: string;
}

const initialFormState: FormState = {
  codigoPlano: '',
  dataAdmissao: '',
  tipoPet: '',
  racaPet: '',
  nomePet: '',
  sexoPet: '',
  dataNascimentoPet: '',
  nomePrimeiroTutor: '',
  cpfTutorPrincipal: '',
  nomeSegundoTutor: '',
  endereco: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  cep: '',
  estado: '',
  emailTutor: '',
  telefonePrincipal: '',
  telefoneSecundario: '',
  outroTelefone: '',
};

interface FormContextType {
  formData: FormState;
  setFormData: React.Dispatch<React.SetStateAction<FormState>>;
}

export const FormContext = createContext<FormContextType>({
  formData: initialFormState,
  setFormData: () => {},
});

export const FormProvider: React.FC = ({ children }) => {
  const [formData, setFormData] = useState<FormState>(initialFormState);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

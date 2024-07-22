'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface FormState {
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

interface FormContextProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, setFormState] = useState<FormState>({
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
  });

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export default useFormContext;

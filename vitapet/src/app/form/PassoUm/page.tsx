'use client'

import React, { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useFormContext } from '@/context/FormContext';

const PassoUm: React.FC = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const goToNextStep = () => {
    // Aqui você pode adicionar validações se necessário antes de avançar para o próximo passo

    // Navega para a página StepTwo
    router.push('/form/PassoDois');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="w-full max-w-screen-lg">
        <Image
          src="/logo.png"
          alt="Vita Pet Saúde"
          width={125}
          height={80}
        />
        <div className='pt-5'>
          <h1>Cadastro Principal</h1>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Código do plano</label>
            <input
              type="text"
              name="codigoPlano"
              value={formState.codigoPlano}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Código do plano"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Data de admissão</label>
            <input
              type="date"
              name="dataAdmissao"
              value={formState.dataAdmissao}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Tipo do PET</label>
            <select
              name="tipoPet"
              value={formState.tipoPet}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecione o tipo do PET</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
              <option value="Reptil">Réptil</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Raça do PET</label>
            <input
              type="text"
              name="racaPet"
              value={formState.racaPet}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Raça do PET"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Nome do PET</label>
            <input
              type="text"
              name="nomePet"
              value={formState.nomePet}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nome do PET"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Sexo do PET</label>
            <select
              name="sexoPet"
              value={formState.sexoPet}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecione o sexo do PET</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Data de nascimento do PET</label>
            <input
              type="date"
              name="dataNascimentoPet"
              value={formState.dataNascimentoPet}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Nome do primeiro TUTOR</label>
            <input
              type="text"
              name="nomePrimeiroTutor"
              value={formState.nomePrimeiroTutor}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nome do primeiro TUTOR"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Número do CPF do TUTOR principal</label>
            <input
              type="text"
              name="cpfTutorPrincipal"
              value={formState.cpfTutorPrincipal}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Número do CPF do TUTOR principal"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Nome do segundo TUTOR</label>
            <input
              type="text"
              name="nomeSegundoTutor"
              value={formState.nomeSegundoTutor}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nome do segundo TUTOR"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={goToNextStep}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Avançar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PassoUm;


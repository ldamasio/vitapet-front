'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';

const PassoDois: React.FC = () => {
  const { formData, setFormData } = useContext(FormContext);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const goBackToStepOne = () => {
    router.push('/form/PassoUm');
  };

  const handleSubmit = async () => {
    // const response = await axios.post('https://backend.vitapetsaude.com.br/api/register/', formData, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // console.log('Resposta do servidor:', response.data);

    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="w-full max-w-screen-lg">
      <Link href="/form/PassoUm/">
        <Image
          src="/logo.png"
          alt="Vita Pet Saúde"
          width={125}
          height={80}
        />
      </Link>
        <div className='pt-5'>
          <h1>Endereço e Dados de Contato</h1>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Endereço</label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Endereço"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Número</label>
            <input
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Número"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Complemento</label>
            <input
              type="text"
              name="complemento"
              value={formData.complemento}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Complemento"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Bairro</label>
            <input
              type="text"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Bairro"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Cidade</label>
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Cidade"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">CEP</label>
            <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="CEP"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Estado</label>
            <input
              type="text"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Estado"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Endereço de email do TUTOR</label>
            <input
              type="email"
              name="emailTutor"
              value={formData.emailTutor}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Endereço de email do TUTOR"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Número do telefone principal</label>
            <input
              type="text"
              name="telefonePrincipal"
              value={formData.telefonePrincipal}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Número do telefone principal"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Número do telefone secundário</label>
            <input
              type="text"
              name="telefoneSecundario"
              value={formData.telefoneSecundario}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Número do telefone secundário"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Outro telefone de contato</label>
            <input
              type="text"
              name="outroTelefone"
              value={formData.outroTelefone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Outro telefone de contato"
            />
          </div>
          <div className="mt-6 flex justify-between">
            <button
              onClick={goBackToStepOne}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Voltar
            </button>
            <button
              onClick={handleSubmit}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PassoDois;
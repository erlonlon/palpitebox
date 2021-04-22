import React, { useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0,
    indicacao: false,
    Sugestao: ''
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const promoves = ['Sim', 'Não']
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {

    try {
      const response = await fetch('api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)

    } catch (err) {

    }
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value

    }))
  }

  return (
    <>
      <PageTitle title='Pesqauisa' />
      <div className='container mx-auto'>

        <div className="flex justify-center  ">

          <div className="space-y-4 m-4 border-gray-600 border-solid shadow-md ">

            <div className="block px-4 m-2 mx-auto max-w-7xl font-bold text-center">
              <h1 className='p-2 text-green-600'>AVALIAÇÃO DO ATENDIMENTO</h1>
            Seu feedback é a melhor forma de melhorarmos nossos serviços.
            </div>
            {!success &&
              <div className="block p-2 m-2 mx-auto">
                <input type='text'
                  className='p-2 w-full block shadow bg-gray-100 my-4 rounded'
                  placeholder='Digite seu nome:' name='Nome' onChange={onChange} value={form.Nome} />
                <input type='email'
                  className='p-2 w-full block shadow bg-gray-100 my-4 rounded'
                  placeholder='Digite seu e-mail:' name="Email" onChange={onChange} value={form.Email} />
                <input type='text'
                  className='p-2 w-full block shadow bg-gray-100 my-4 rounded'
                  placeholder='Digite seu Whatsapp:' name="Whatsapp" onChange={onChange} value={form.Whatsapp} />
                <input className='p-2 w-full block shadow bg-gray-100 my-4 rounded'
                  placeholder='Digite sua sugestão:' name='Sugestao'
                  onChange={onChange} value={form.Sugestao} />
                <span className="block p-2 m-2 text-center" >
                  Que nota você dária ao estabelecimento:<br></br>
                  {notas.map(nota => {
                    return (
                      <label className='m-2' for="Nota">{nota}
                        <input className='m-2' type="radio" name="Nota" value={nota} onChange={onChange} />
                      </label>
                    )
                  })}
                </span>
                <span className="block p-2 m-2 text-center">
                  Você indicaria para um amigo?<br></br>
                  {promoves.map(promove => {
                    return (
                      <label className='m-2' for="Promove">{promove}
                        <input className='m-2' type="radio" name="Promove" value={promove} onChange={onChange} />
                      </label>
                    )
                  })}
                </span>
                <div className="flex-none justify-center p-4 m-2 text-center">
                  <button className='bg-green-600 text-white px-6 py-2 font-bold rounded-lg shadow-lg hover:bg-green-4' onClick={save}>
                    Salvar
                  </button>

                </div>
              </div>
            }

            <div class="block py-4 m-2 mx-auto max-w-7xl justify-center font-bold text-center">

              {success && <div className='p-2 block justify-center shadow bg-gray-100 my-4 rounded'>
                <p>Obrigado por contribuir com sua sugestão ou crítica.</p>
                {retorno.showCoupon && <div className='max-w-md mx-auto text-3xl p-2 block shadow bg-green-400 my-4 rounded'>
                  Seu Cupon: <br></br>{retorno.Cupom}</div>
                }
                {retorno.showCoupon && <div className='p-2 block shadow bg-gray-200 my-4 rounded'>
                  {retorno.Promo}</div>
                }

              </div>
              }

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Pesquisa
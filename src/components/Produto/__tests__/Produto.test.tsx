import { fireEvent, screen } from '@testing-library/react'

import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 1,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows'],
  preco: 150.9,
  precoAntigo: 199.9,
  titulo: 'Elden Ring'
}

describe('testes para o componente produto', () => {
  test('deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Elden Ring')).toBeInTheDocument()
  })

  test('deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})

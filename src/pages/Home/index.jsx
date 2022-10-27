import { useState } from 'react'
import './styles.css'
import { Rack } from '../../components/Rack'


function Home() {
  const [productName, setProductName] = useState('')
  const [productValue, setProductValue] = useState('')
  const [productAmount, setProductAmount] = useState('')
  const [products, setProducts] = useState([])
  var idproduct = 0  

  function handleAddProduct(){        
    const newProduct = {       
      name: productName,
      value: productValue,
      amount: productAmount,
      total: (productValue * productAmount)
    }
    setProducts(prevState => [...prevState, newProduct])
  }
 
      

  return (
    <div className='container'>
      <header>
        <img src="../../public/carrinho-de-supermercado-canes.svg" alt="" />
        <h1>Lista de Compras</h1>
      
      </header>
           
        
          <input
          type="text"
          placeholder='Digite o produto...'
          onChange={e => setProductName(e.target.value)}
          />
          <div className='values'>
            <input
            type="number"
            placeholder='Valor...'
            onChange={e => setProductValue(e.target.value)}
            />
            <input
            type="number"
            placeholder='Quantidade...'
            onChange={e => setProductAmount(e.target.value)}
            />
          </div>
        
     
      
      <button type='button' onClick={handleAddProduct}>Adicionar</button>
      

      
        {
          products.map(product => (
          <Rack
          key={product.name}
          name={product.name}
          value={product.value}
          amount={product.amount}
          total={product.total}                 
          />
        ))}  
   
          

    </div>
    
  )
  
}

export default Home

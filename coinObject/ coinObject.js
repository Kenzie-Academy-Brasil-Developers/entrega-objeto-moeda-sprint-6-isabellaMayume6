const coin = {
    state: 0,
    flip: function () {
    let numRandom = Math.floor(Math.random()*2);
    this.state = numRandom
    
  },
    toString: function () {
      if(this.state===0){
        return "Heads"
      }else{
        return "Tails"
      }
    },
    toHTML: function () {
      const image = document.createElement("img");
      if(coin.toString()==="Heads"){
      image.src = "./img/cara.png"
      image.alt = "Heads"
    }else{
      image.src = "./img/coroa.jpg"
      image.alt = "Tails"
    }
      return image
    },
  };
  function display20Flips() {
    const results = [];
    for(let i=0;i<20;i++){
      coin.flip()
      let resultado = document.createElement("h2")
      if(coin.state===0){
        document.body.appendChild(resultado)
        resultado.innerText = "Heads"
      }else {
        document.body.appendChild(resultado)
        resultado.innerText = "Tails"
      }
      results.push(coin.toString())
    }console.log(results)
   
    
    return results
  }display20Flips()
  function display20Images() {
    const results = [];
    for(let i=0;i<20;i++){
      coin.flip()
      let resultadoImagem = document.createElement("img")
      resultadoImagem.style.heigth = '50px'
      resultadoImagem.style.width = '50px'
      if(coin.state===0){
        document.body.appendChild(resultadoImagem)
        resultadoImagem.src = './img/cara.png'
      }else {
        document.body.appendChild(resultadoImagem)
        resultadoImagem.src = './img/coroa.jpg'
      }
      results.push(coin.toHTML())
    }console.log(results)
    return results
  }display20Images()
  
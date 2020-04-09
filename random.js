let random = {
  ramdonINT: function (n=10){
      /**
       * O parâmtro que a função recebe é quais números queremos que ele mostre, ou seja, o valor máximo que irá mostrar
       * O Math.random gera um número entre 0 e 1, então se multiplicar por 10, fica um número entre 0 e 10
       * Porém, continua com o ponto flutuante, então temos que usar Math.round para se aproximar de algum inteiro
       */
      let aleatorio = Math.round((Math.random() * 10) + 1)
      return aleatorio
    }

}

export default random

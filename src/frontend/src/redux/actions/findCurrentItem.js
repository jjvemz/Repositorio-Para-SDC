export const type = 'findCurrentitem';
//encuentra el item actual según el Id del gráfico para el switch case
const findCurrentitem = graphId =>{
  return{
    type,
    payload: +graphId,
  };
};

export default findCurrentitem;
